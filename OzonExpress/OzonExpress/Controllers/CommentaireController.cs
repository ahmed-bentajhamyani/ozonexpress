using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using OzonExpress.Dto;
using OzonExpress.Interfaces;
using OzonExpress.Models;

namespace OzonExpress.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentaireController : Controller
    {
        private readonly ICommentaireRepository _commentaireRepository;
        private readonly IMapper _mapper;

        public CommentaireController(ICommentaireRepository commentaireRepository, IMapper mapper)
        {
            _commentaireRepository = commentaireRepository;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Commentaire>))]
        public IActionResult GetCommentaires()
        {
            var commentaires = _mapper.Map<List<CommentaireDto>>(_commentaireRepository.GetCommentaires());

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(commentaires);
        }

        [HttpGet("{commentaireId}")]
        [ProducesResponseType(200, Type = typeof(Commentaire))]
        [ProducesResponseType(400)]
        public IActionResult GetCommentaire(int commentaireId)
        {
            if (!_commentaireRepository.CommentaireExists(commentaireId))
                return NotFound();

            var Commentaire = _mapper.Map<CommentaireDto>(_commentaireRepository.GetCommentaire(commentaireId));

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(Commentaire);
        }

        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateCommentaire([FromBody] CommentaireDto commentaireCreate)
        {
            if (commentaireCreate == null)
                return BadRequest(ModelState);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var commentaireMap = _mapper.Map<Commentaire>(commentaireCreate);

            if (!_commentaireRepository.CreateCommentaire(commentaireMap))
            {
                ModelState.AddModelError("", "Something went wrong while savin");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully created");
        }

        [HttpPut("{commentaireId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult UpdateCommentaire(int commentaireId, [FromBody] CommentaireDto updatedCommentaire)
        {
            if (updatedCommentaire == null)
                return BadRequest(ModelState);

            if (!_commentaireRepository.CommentaireExists(commentaireId))
                return NotFound();

            if (!ModelState.IsValid)
                return BadRequest();

            updatedCommentaire.Id = commentaireId;

            var commentaireMap = _mapper.Map<Commentaire>(updatedCommentaire);

            if (!_commentaireRepository.UpdateCommentaire(commentaireMap))
            {
                ModelState.AddModelError("", "Something went wrong updating Commentaire");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully updated");
        }

        [HttpDelete("{commentaireId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult DeleteCommentaire(int commentaireId)
        {
            if (!_commentaireRepository.CommentaireExists(commentaireId))
            {
                return NotFound();
            }

            var commentaireToDelete = _commentaireRepository.GetCommentaire(commentaireId);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_commentaireRepository.DeleteCommentaire(commentaireToDelete))
            {
                ModelState.AddModelError("", "Something went wrong deleting Commentaire");
            }

            return Ok("Successfully deleted");
        }
    }
}
