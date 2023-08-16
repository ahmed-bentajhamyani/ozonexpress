using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;

namespace OzonExpress.Models
{
    public class Blog
    {
        public int? Id { get; set; }
        [Column(TypeName = "nvarchar(250)")]
        public string? Titre { get; set; }
        [Column(TypeName = "nvarchar(1000)")]
        public string? Article { get; set; }
        [Column(TypeName = "nvarchar(150)")]
        public string? ImageName { get; set; }
        [NotMapped]
        public IFormFile? ImageFile { get; set; }
        [NotMapped]
        public string? ImageSrc { get; set; }
        public DateTime? DateAjout { get; set; }
    }
}
