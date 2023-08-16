using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using OzonExpress.Dto;
using OzonExpress.Interfaces;
using OzonExpress.Models;

namespace OzonExpress.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PanierController : Controller
    {
        private readonly IPanierRepository _panierRepository;
        private readonly IMapper _mapper;

        public PanierController(IPanierRepository panierRepository, IMapper mapper)
        {
            _panierRepository = panierRepository;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Panier>))]
        public IActionResult GetPaniers()
        {
            var paniers = _mapper.Map<List<PanierDto>>(_panierRepository.GetPaniers());

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(paniers);
        }

        [HttpGet("{panierId}")]
        [ProducesResponseType(200, Type = typeof(Panier))]
        [ProducesResponseType(400)]
        public IActionResult GetPanier(int panierId)
        {
            if (!_panierRepository.PanierExists(panierId))
                return NotFound();

            var panier = _mapper.Map<PanierDto>(_panierRepository.GetPanier(panierId));

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(panier);
        }

        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreatePanier([FromForm] PanierDto panierCreate)
        {
            if (panierCreate == null)
                return BadRequest(ModelState);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var panierMap = _mapper.Map<Panier>(panierCreate);

            if (!_panierRepository.CreatePanier(panierMap))
            {
                ModelState.AddModelError("", "Something went wrong while savin");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully created");
        }

        [HttpPut("addto/{panierId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult AddToPanier(int panierId, [FromForm] int articleId, [FromForm] int quantite)
        {
            if (!_panierRepository.PanierExists(panierId))
                return NotFound();

            if (!ModelState.IsValid)
                return BadRequest();

            if (!_panierRepository.AddToPanier(panierId, articleId, quantite))
            {
                ModelState.AddModelError("", "Something went wrong updating Panier");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully added to cart");
        }

        [HttpPut("deletefrom/{panierId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult DeleteFromPanier(int panierId, [FromForm] int articleId)
        {
            if (!_panierRepository.PanierExists(panierId))
            {
                return NotFound();
            }

            var panierToDeleteFrom = _panierRepository.GetPanier(panierId);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_panierRepository.DeleteFromPanier(articleId, panierToDeleteFrom))
            {
                ModelState.AddModelError("", "Something went wrong deleting Panier");
            }

            return Ok("Successfully deleted from cart");
        }
    }
}
