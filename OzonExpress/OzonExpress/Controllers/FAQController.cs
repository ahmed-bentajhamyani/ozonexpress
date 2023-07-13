using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using OzonExpress.Dto;
using OzonExpress.Interfaces;
using OzonExpress.Models;

namespace OzonExpress.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FAQController : Controller
    {
        private readonly IFAQRepository _faqRepository;
        private readonly IMapper _mapper;

        public FAQController(IFAQRepository faqRepository, IMapper mapper)
        {
            _faqRepository = faqRepository;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<FAQ>))]
        public IActionResult GetFAQs()
        {
            var faqs = _mapper.Map<List<FAQDto>>(_faqRepository.GetFAQs());

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(faqs);
        }

        [HttpGet("{faqId}")]
        [ProducesResponseType(200, Type = typeof(FAQ))]
        [ProducesResponseType(400)]
        public IActionResult GetFAQ(int faqId)
        {
            if (!_faqRepository.FAQExists(faqId))
                return NotFound();

            var blog = _mapper.Map<FAQDto>(_faqRepository.GetFAQ(faqId));

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(blog);
        }

        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateFAQ([FromBody] FAQDto faqCreate)
        {
            if (faqCreate == null)
                return BadRequest(ModelState);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var faqMap = _mapper.Map<FAQ>(faqCreate);

            if (!_faqRepository.CreateFAQ(faqMap))
            {
                ModelState.AddModelError("", "Something went wrong while savin");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully created");
        }

        [HttpPut("{faqId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult UpdateFAQ(int faqId, [FromBody] FAQDto updatedFAQ)
        {
            if (updatedFAQ == null)
                return BadRequest(ModelState);

            if (!_faqRepository.FAQExists(faqId))
                return NotFound();

            if (!ModelState.IsValid)
                return BadRequest();

            updatedFAQ.Id = faqId;

            var faqMap = _mapper.Map<FAQ>(updatedFAQ);

            if (!_faqRepository.UpdateFAQ(faqMap))
            {
                ModelState.AddModelError("", "Something went wrong updating blog");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully updated");
        }

        [HttpDelete("{faqId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult DeleteFAQ(int faqId)
        {
            if (!_faqRepository.FAQExists(faqId))
            {
                return NotFound();
            }

            var blogToDelete = _faqRepository.GetFAQ(faqId);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_faqRepository.DeleteFAQ(blogToDelete))
            {
                ModelState.AddModelError("", "Something went wrong deleting blog");
            }

            return Ok("Successfully deleted");
        }
    }
}
