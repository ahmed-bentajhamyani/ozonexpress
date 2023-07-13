using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using OzonExpress.Dto;
using OzonExpress.Interfaces;
using OzonExpress.Models;

namespace OzonExpress.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VilleController : Controller
    {
        private readonly IVilleRepository _villeRepository;
        private readonly IMapper _mapper;

        public VilleController(IVilleRepository villeRepository, IMapper mapper)
        {
            _villeRepository = villeRepository;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Ville>))]
        public IActionResult GetVilles()
        {
            var villes = _mapper.Map<List<VilleDto>>(_villeRepository.GetVilles());

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(villes);
        }

        [HttpGet("{villeId}")]
        [ProducesResponseType(200, Type = typeof(Ville))]
        [ProducesResponseType(400)]
        public IActionResult GetVille(int villeId)
        {
            if (!_villeRepository.VilleExists(villeId))
                return NotFound();

            var ville = _mapper.Map<VilleDto>(_villeRepository.GetVille(villeId));

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(ville);
        }

        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateVille([FromBody] VilleDto villeCreate)
        {
            if (villeCreate == null)
                return BadRequest(ModelState);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var villeMap = _mapper.Map<Ville>(villeCreate);

            if (!_villeRepository.CreateVille(villeMap))
            {
                ModelState.AddModelError("", "Something went wrong while savin");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully created");
        }

        [HttpPut("{villeId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult UpdateVille(int villeId, [FromBody] VilleDto updatedVille)
        {
            if (updatedVille == null)
                return BadRequest(ModelState);

            if (!_villeRepository.VilleExists(villeId))
                return NotFound();

            if (!ModelState.IsValid)
                return BadRequest();

            updatedVille.Id = villeId;

            var villeMap = _mapper.Map<Ville>(updatedVille);

            if (!_villeRepository.UpdateVille(villeMap))
            {
                ModelState.AddModelError("", "Something went wrong updating Ville");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully updated");
        }

        [HttpDelete("{villeId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult DeleteVille(int villeId)
        {
            if (!_villeRepository.VilleExists(villeId))
            {
                return NotFound();
            }

            var villeToDelete = _villeRepository.GetVille(villeId);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_villeRepository.DeleteVille(villeToDelete))
            {
                ModelState.AddModelError("", "Something went wrong deleting Ville");
            }

            return Ok("Successfully deleted");
        }
    }
}
