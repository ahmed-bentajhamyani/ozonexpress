using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using OzonExpress.Dto;
using OzonExpress.Interfaces;
using OzonExpress.Models;

namespace OzonExpress.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VenteController : Controller
    {
        private readonly IVenteRepository _venteRepository;
        private readonly IMapper _mapper;

        public VenteController(IVenteRepository venteRepository, IMapper mapper)
        {
            _venteRepository = venteRepository;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Vente>))]
        public IActionResult GetVentes()
        {
            var ventes = _mapper.Map<List<VenteDto>>(_venteRepository.GetVentes());

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(ventes);
        }

        [HttpGet("{venteId}")]
        [ProducesResponseType(200, Type = typeof(Vente))]
        [ProducesResponseType(400)]
        public IActionResult GetVente(int venteId)
        {
            if (!_venteRepository.VenteExists(venteId))
                return NotFound();

            var vente = _mapper.Map<VenteDto>(_venteRepository.GetVente(venteId));

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(vente);
        }

        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateVente([FromQuery] int[] articleIds, [FromBody] VenteDto venteCreate)
        {
            if (venteCreate == null)
                return BadRequest(ModelState);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var venteMap = _mapper.Map<Vente>(venteCreate);

            if (!_venteRepository.CreateVente(articleIds, venteMap))
            {
                ModelState.AddModelError("", "Something went wrong while savin");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully created");
        }

        [HttpPut("{venteId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult UpdateVente(int venteId, [FromQuery] int[] articleIds, [FromBody] VenteDto updatedVente)
        {
            if (updatedVente == null)
                return BadRequest(ModelState);

            if (!_venteRepository.VenteExists(venteId))
                return NotFound();

            if (!ModelState.IsValid)
                return BadRequest();

            // updatedVente.Id = venteId;

            var venteMap = _mapper.Map<Vente>(updatedVente);

            if (!_venteRepository.UpdateVente(articleIds, venteMap))
            {
                ModelState.AddModelError("", "Something went wrong updating vente");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully updated");
        }

        [HttpDelete("{venteId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult DeleteVente(int venteId)
        {
            if (!_venteRepository.VenteExists(venteId))
            {
                return NotFound();
            }

            var venteToDelete = _venteRepository.GetVente(venteId);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_venteRepository.DeleteVente(venteToDelete))
            {
                ModelState.AddModelError("", "Something went wrong deleting vente");
            }

            return Ok("Successfully deleted");
        }
    }
}
