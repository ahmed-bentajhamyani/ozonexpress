using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using OzonExpress.Dto;
using OzonExpress.Interfaces;
using OzonExpress.Models;
using System.Diagnostics;
using System.Reflection.Metadata;

namespace OzonExpress.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : Controller
    {
        private readonly IBlogRepository _blogRepository;
        private readonly IMapper _mapper;
        private readonly IWebHostEnvironment _hostEnvironment;

        public BlogController(IBlogRepository blogRepository, IMapper mapper, IWebHostEnvironment hostEnvironment)
        {
            _blogRepository = blogRepository;
            _mapper = mapper;
            _hostEnvironment = hostEnvironment;
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
        public async Task<IActionResult> CreateBlog([FromForm] BlogDto blogCreate)
        {
            if (blogCreate == null)
                return BadRequest(ModelState);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            blogCreate.DateAjout = DateTime.Now;
            blogCreate.ImageName = await SaveImage(blogCreate.ImageFile);
            var blogMap = _mapper.Map<Blog>(blogCreate);

            if (!_blogRepository.CreateBlog(blogMap))
            {
                ModelState.AddModelError("", "Something went wrong updating blog");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully created");
        }

        [HttpPut("{blogId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public async Task<IActionResult> UpdateBlog(int blogId, [FromForm] BlogDto updatedBlog)
        {
            if (updatedBlog == null)
                return BadRequest(ModelState);

            if (!_blogRepository.BlogExists(blogId))
                return NotFound();

            if (!ModelState.IsValid)
                return BadRequest();

            updatedBlog.Id = blogId;

            updatedBlog.DateAjout = DateTime.Now;
            if (updatedBlog.ImageFile != null)
            {
                DeleteImage(updatedBlog.ImageName);
                updatedBlog.ImageName = await SaveImage(updatedBlog.ImageFile);
            }

            var blogMap = _mapper.Map<Blog>(updatedBlog);

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

        [NonAction]
        public async Task<string> SaveImage(IFormFile ImageFile)
        {
            if (ImageFile != null)
            {
                string imageName = new String(Path.GetFileNameWithoutExtension(ImageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
                imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(ImageFile.FileName);
                var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);
                using (var fileStream = new FileStream(imagePath, FileMode.Create))
                {
                    await ImageFile.CopyToAsync(fileStream);
                }
                return imageName;
            }
            return null;
        }

        [NonAction]
        public void DeleteImage(string imageName)
        {
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);
            if (System.IO.File.Exists(imagePath))
                System.IO.File.Delete(imagePath);
        }
    }
}
