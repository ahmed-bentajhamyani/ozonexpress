using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using OzonExpress.Dto;
using OzonExpress.Interfaces;
using OzonExpress.Models;

namespace OzonExpress.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticleController : Controller
    {
        private readonly IArticleRepository _articleRepository;
        private readonly IMapper _mapper;

        public ArticleController(IArticleRepository articleRepository, IMapper mapper) 
        {
            _articleRepository = articleRepository;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Article>))]
        public IActionResult GetArticles()
        {
            var articles = _mapper.Map<List<ArticleDto>>(_articleRepository.GetArticles());

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(articles);
        }

        [HttpGet("{articleId}")]
        [ProducesResponseType(200, Type = typeof(Article))]
        [ProducesResponseType(400)]
        public IActionResult GetArticle(int articleId)
        {
            if (!_articleRepository.ArticleExists(articleId))
                return NotFound();

            var article = _mapper.Map<ArticleDto>(_articleRepository.GetArticle(articleId));

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(article);
        }

        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateArticle([FromBody] ArticleDto articleCreate)
        {
            if (articleCreate == null)
                return BadRequest(ModelState);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var articleMap = _mapper.Map<Article>(articleCreate);

            if (!_articleRepository.CreateArticle(articleMap))
            {
                ModelState.AddModelError("", "Something went wrong while savin");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully created");
        }

        [HttpPut("{articleId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult UpdateArticle(int articleId, [FromBody] ArticleDto updatedArticle)
        {
            if (updatedArticle == null)
                return BadRequest(ModelState);

            if (!_articleRepository.ArticleExists(articleId))
               return NotFound();

            if (!ModelState.IsValid)
                return BadRequest();

            updatedArticle.Id = articleId;

            var articleMap = _mapper.Map<Article>(updatedArticle);

            if (!_articleRepository.UpdateArticle(articleMap))
            {
                ModelState.AddModelError("", "Something went wrong updating article");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully updated");
        }

        [HttpDelete("{articleId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult DeleteArticle(int articleId)
        {
            if (!_articleRepository.ArticleExists(articleId))
            {
                return NotFound();
            }

            var articleToDelete = _articleRepository.GetArticle(articleId);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_articleRepository.DeleteArticle(articleToDelete))
            {
                ModelState.AddModelError("", "Something went wrong deleting article");
            }

            return Ok("Successfully deleted");
        }
    }
}
