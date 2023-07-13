using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using OzonExpress.Dto;
using OzonExpress.Interfaces;
using OzonExpress.Models;

namespace OzonExpress.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : Controller
    {
        private readonly IBlogRepository _blogRepository;
        private readonly IMapper _mapper;

        public BlogController(IBlogRepository blogRepository, IMapper mapper)
        {
            _blogRepository = blogRepository;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Blog>))]
        public IActionResult GetBlogs()
        {
            var blogs = _mapper.Map<List<BlogDto>>(_blogRepository.GetBlogs());

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(blogs);
        }

        [HttpGet("{blogId}")]
        [ProducesResponseType(200, Type = typeof(Blog))]
        [ProducesResponseType(400)]
        public IActionResult GetBlog(int blogId)
        {
            if (!_blogRepository.BlogExists(blogId))
                return NotFound();

            var blog = _mapper.Map<BlogDto>(_blogRepository.GetBlog(blogId));

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(blog);
        }

        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateBlog([FromBody] BlogDto blogCreate)
        {
            if (blogCreate == null)
                return BadRequest(ModelState);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var blogMap = _mapper.Map<Blog>(blogCreate);

            if (!_blogRepository.CreateBlog(blogMap))
            {
                ModelState.AddModelError("", "Something went wrong while savin");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully created");
        }

        [HttpPut("{blogId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult UpdateBlog(int blogId, [FromBody] BlogDto updatedArticle)
        {
            if (updatedArticle == null)
                return BadRequest(ModelState);

            if (!_blogRepository.BlogExists(blogId))
                return NotFound();

            if (!ModelState.IsValid)
                return BadRequest();

            updatedArticle.Id = blogId;

            var blogMap = _mapper.Map<Blog>(updatedArticle);

            if (!_blogRepository.UpdateBlog(blogMap))
            {
                ModelState.AddModelError("", "Something went wrong updating blog");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully updated");
        }

        [HttpDelete("{blogId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult DeleteBlog(int blogId)
        {
            if (!_blogRepository.BlogExists(blogId))
            {
                return NotFound();
            }

            var blogToDelete = _blogRepository.GetBlog(blogId);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_blogRepository.DeleteBlog(blogToDelete))
            {
                ModelState.AddModelError("", "Something went wrong deleting blog");
            }

            return Ok("Successfully deleted");
        }
    }
}
