using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using OzonExpress.Dto;
using OzonExpress.Interfaces;
using OzonExpress.Models;

namespace OzonExpress.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TarifController : Controller
    {
        private readonly ITarifRepository _tarifRepository;
        private readonly IMapper _mapper;

        public TarifController(ITarifRepository tarifRepository, IMapper mapper)
        {
            _tarifRepository = tarifRepository;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Tarif>))]
        public IActionResult GetTarifs()
        {
            var tarifs = _mapper.Map<List<TarifDto>>(_tarifRepository.GetTarifs());

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(tarifs);
        }

        [HttpGet("{tarifId}")]
        [ProducesResponseType(200, Type = typeof(Tarif))]
        [ProducesResponseType(400)]
        public IActionResult GetTarif(int tarifId)
        {
            if (!_tarifRepository.TarifExists(tarifId))
                return NotFound();

            var tarif = _mapper.Map<TarifDto>(_tarifRepository.GetTarif(tarifId));

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(tarif);
        }

        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateTarif([FromBody] TarifDto tarifCreate)
        {
            if (tarifCreate == null)
                return BadRequest(ModelState);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var tarifMap = _mapper.Map<Tarif>(tarifCreate);

            if (!_tarifRepository.CreateTarif(tarifMap))
            {
                ModelState.AddModelError("", "Something went wrong while savin");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully created");
        }

        [HttpPut("{tarifId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult UpdateTarif(int tarifId, [FromBody] TarifDto updatedTarif)
        {
            if (updatedTarif == null)
                return BadRequest(ModelState);

            if (!_tarifRepository.TarifExists(tarifId))
                return NotFound();

            if (!ModelState.IsValid)
                return BadRequest();

            updatedTarif.Id = tarifId;

            var tarifMap = _mapper.Map<Tarif>(updatedTarif);

            if (!_tarifRepository.UpdateTarif(tarifMap))
            {
                ModelState.AddModelError("", "Something went wrong updating Tarif");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully updated");
        }

        [HttpDelete("{tarifId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult DeleteTarif(int tarifId)
        {
            if (!_tarifRepository.TarifExists(tarifId))
            {
                return NotFound();
            }

            var tarifToDelete = _tarifRepository.GetTarif(tarifId);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_tarifRepository.DeleteTarif(tarifToDelete))
            {
                ModelState.AddModelError("", "Something went wrong deleting Tarif");
            }

            return Ok("Successfully deleted");
        }
    }
}
