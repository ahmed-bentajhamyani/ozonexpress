using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using OzonExpress.Dto;
using OzonExpress.Dtos;
using OzonExpress.Helper;
using OzonExpress.Interfaces;
using OzonExpress.Models;

namespace OzonExpress.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly IUserRepository _userRepository;
        private readonly JwtService _jwtService;
        private readonly IMapper _mapper;

        public UserController(IUserRepository userRepository, JwtService jwtService, IMapper mapper)
        {
            _userRepository = userRepository;
            _jwtService = jwtService;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<User>))]
        public IActionResult GetUsers()
        {
            var users = _mapper.Map<List<UserDto>>(_userRepository.GetUsers());

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(users);
        }

        [HttpGet("{userId}")]
        [ProducesResponseType(200, Type = typeof(User))]
        [ProducesResponseType(400)]
        public IActionResult GetUser(int userId)
        {
            if (!_userRepository.UserExists(userId))
                return NotFound();

            var User = _mapper.Map<UserDto>(_userRepository.GetUser(userId));

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(User);
        }

        [HttpPost("{jwtToken}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateUser(string jwtToken, [FromForm] UserDto userCreate)
        {
            try
            {
                var token = _jwtService.Verify(jwtToken);

                int userId = int.Parse(token.Issuer);

                var user = _userRepository.GetUser(userId);

                if(user == null)
                    return Unauthorized();

                if (userCreate == null)
                    return BadRequest(ModelState);

                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                userCreate.Password = BCrypt.Net.BCrypt.HashPassword(userCreate.Password);
                var userMap = _mapper.Map<User>(userCreate);

                if (!_userRepository.CreateUser(userMap))
                {
                    ModelState.AddModelError("", "Something went wrong while savin");
                    return StatusCode(500, ModelState);
                }

                return Ok("Successfully created");
            }
            catch (Exception)
            {
                return Unauthorized();
            }
        }

        [HttpPut("{userId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult UpdateUser(int userId, [FromForm] UserDto updatedUser)
        {
            if (updatedUser == null)
                return BadRequest(ModelState);

            if (!_userRepository.UserExists(userId))
                return NotFound();

            if (!ModelState.IsValid)
                return BadRequest();

            updatedUser.Id = userId;

            var userMap = _mapper.Map<User>(updatedUser);

            if (!_userRepository.UpdateUser(userMap))
            {
                ModelState.AddModelError("", "Something went wrong updating User");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully updated");
        }

        [HttpDelete("{userId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult DeleteUser(int userId)
        {
            if (!_userRepository.UserExists(userId))
            {
                return NotFound();
            }

            var userToDelete = _userRepository.GetUser(userId);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_userRepository.DeleteUser(userToDelete))
            {
                ModelState.AddModelError("", "Something went wrong deleting User");
            }

            return Ok("Successfully deleted");
        }
    }
}
