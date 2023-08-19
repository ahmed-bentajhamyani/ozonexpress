using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;

namespace OzonExpress.Dto
{
    public class BlogDto
    {
        public int? Id { get; set; }
        public string? Titre { get; set; }
        public string? Article { get; set; }
        public string? ImageName { get; set; }
        public IFormFile? ImageFile { get; set; }
        public string? ImageSrc { get; set; }
        public DateTime? DateAjout { get; set; }
    }
}
