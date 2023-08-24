using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.Scripting;
using Newtonsoft.Json.Linq;
using OzonExpress.Dto;
using OzonExpress.Helper;
using OzonExpress.Interfaces;
using OzonExpress.Models;
using OzonExpress.Repositories;
using System.Net;
using static System.Net.WebRequestMethods;

namespace OzonExpress.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : Controller
    {   
        private readonly IUserRepository _userRepository;
        private readonly JwtService _jwtService;

        public AuthController(IUserRepository userRepository, JwtService jwtService)
        {
            _userRepository = userRepository;
            _jwtService = jwtService;
        }

        [HttpPost("adduser")]
        public IActionResult Register([FromForm] RegisterDto registerDto)
        {
            if (registerDto == null)
                return BadRequest(ModelState);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = new User
            {
                Name = registerDto.Name,
                Email = registerDto.Email,
                Password = BCrypt.Net.BCrypt.HashPassword(registerDto.Password)
            };            

            if (!_userRepository.CreateUser(user))
            {
                ModelState.AddModelError("", "Something went wrong while savin");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully created");
        }

        [HttpPost("login")]
        public IActionResult Login([FromForm] LoginDto loginDto)
        {
            var user = _userRepository.GetUserByEmail(loginDto.Email);

            if (user == null) return BadRequest(new { message = "Invalid Credentials" });

            if (!BCrypt.Net.BCrypt.Verify(loginDto.Password, user.Password))
            {
                return BadRequest(new { message = "Invalid Credentials" });
            }

            var jwt = _jwtService.Generate(user.Id);

            var data = new
            {
                User = user,
                JwtToken = jwt
            };

            return Ok(data);
        }

        [HttpPost("user")]
        public IActionResult GetUser([FromForm] string jwtToken)
        {
            try
            {
                var token = _jwtService.Verify(jwtToken);

                int userId = int.Parse(token.Issuer);

                var user = _userRepository.GetUser(userId);

                return Ok(user);
            }
            catch (Exception)
            {
                return Unauthorized();
            }
        }
    }
}
