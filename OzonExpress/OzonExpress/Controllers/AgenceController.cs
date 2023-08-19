using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using OzonExpress.Dto;
using OzonExpress.Interfaces;
using OzonExpress.Models;

namespace OzonExpress.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AgenceController : Controller
    {
        private readonly IAgenceRepository _agenceRepository;
        private readonly IMapper _mapper;

        public AgenceController(IAgenceRepository agenceRepository, IMapper mapper)
        {
            _agenceRepository = agenceRepository;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Agence>))]
        public IActionResult GetAgences()
        {
            var agences = _mapper.Map<List<AgenceDto>>(_agenceRepository.GetAgences());

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(agences);
        }

        [HttpGet("{agenceId}")]
        [ProducesResponseType(200, Type = typeof(Agence))]
        [ProducesResponseType(400)]
        public IActionResult GetAgence(int agenceId)
        {
            if (!_agenceRepository.AgenceExists(agenceId))
                return NotFound();

            var agence = _mapper.Map<AgenceDto>(_agenceRepository.GetAgence(agenceId));

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(agence);
        }

        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateAgence([FromForm] AgenceDto agenceCreate)
        {
            if (agenceCreate == null)
                return BadRequest(ModelState);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var agenceMap = _mapper.Map<Agence>(agenceCreate);

            if (!_agenceRepository.CreateAgence(agenceMap))
            {
                ModelState.AddModelError("", "Something went wrong while savin");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully created");
        }

        [HttpPut("{agenceId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult UpdateAgence(int agenceId, [FromForm] AgenceDto updatedagence)
        {
            if (updatedagence == null)
                return BadRequest(ModelState);

            if (!_agenceRepository.AgenceExists(agenceId))
                return NotFound();

            if (!ModelState.IsValid)
                return BadRequest();

            updatedagence.Id = agenceId;

            var agenceMap = _mapper.Map<Agence>(updatedagence);

            if (!_agenceRepository.UpdateAgence(agenceMap))
            {
                ModelState.AddModelError("", "Something went wrong updating agence");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully updated");
        }

        [HttpDelete("{agenceId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult DeleteAgence(int agenceId)
        {
            if (!_agenceRepository.AgenceExists(agenceId))
            {
                return NotFound();
            }

            var agenceToDelete = _agenceRepository.GetAgence(agenceId);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_agenceRepository.DeleteAgence(agenceToDelete))
            {
                ModelState.AddModelError("", "Something went wrong deleting agence");
            }

            return Ok("Successfully deleted");
        }
    }
}
