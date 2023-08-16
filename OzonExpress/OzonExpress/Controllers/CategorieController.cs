using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using OzonExpress.Dto;
using OzonExpress.Interfaces;
using OzonExpress.Models;

namespace OzonExpress.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategorieController : Controller
    {
        private readonly ICategorieRepository _categorieRepository;
        private readonly IMapper _mapper;

        public CategorieController(ICategorieRepository categorieRepository, IMapper mapper)
        {
            _categorieRepository = categorieRepository;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Categorie>))]
        public IActionResult GetCategories()
        {
            var Categories = _mapper.Map<List<CategorieDto>>(_categorieRepository.GetCategories());

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(Categories);
        }

        [HttpGet("{categorieId}")]
        [ProducesResponseType(200, Type = typeof(Categorie))]
        [ProducesResponseType(400)]
        public IActionResult GetCategorie(int categorieId)
        {
            if (!_categorieRepository.CategorieExists(categorieId))
                return NotFound();

            var Categorie = _mapper.Map<CategorieDto>(_categorieRepository.GetCategorie(categorieId));

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(Categorie);
        }

        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateCategorie([FromForm] CategorieDto categorieCreate)
        {
            if (categorieCreate == null)
                return BadRequest(ModelState);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var categorieMap = _mapper.Map<Categorie>(categorieCreate);

            if (!_categorieRepository.CreateCategorie(categorieMap))
            {
                ModelState.AddModelError("", "Something went wrong while savin");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully created");
        }

        [HttpPut("{categorieId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult UpdateCategorie(int categorieId, [FromForm] CategorieDto updatedCategorie)
        {
            if (updatedCategorie == null)
                return BadRequest(ModelState);

            if (!_categorieRepository.CategorieExists(categorieId))
                return NotFound();

            if (!ModelState.IsValid)
                return BadRequest();

            updatedCategorie.Id = categorieId;

            var categorieMap = _mapper.Map<Categorie>(updatedCategorie);

            if (!_categorieRepository.UpdateCategorie(categorieMap))
            {
                ModelState.AddModelError("", "Something went wrong updating Categorie");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully updated");
        }

        [HttpDelete("{categorieId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult DeleteCategorie(int categorieId)
        {
            if (!_categorieRepository.CategorieExists(categorieId))
            {
                return NotFound();
            }

            var categorieToDelete = _categorieRepository.GetCategorie(categorieId);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_categorieRepository.DeleteCategorie(categorieToDelete))
            {
                ModelState.AddModelError("", "Something went wrong deleting Categorie");
            }

            return Ok("Successfully deleted");
        }
    }
}
