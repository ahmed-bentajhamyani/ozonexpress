using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;

namespace OzonExpress.Dto
{
    public class ArticleDto
    {
        public int? Id { get; set; }
        public string? Nom { get; set; }
        public string? Description { get; set; }
        public string? ImageName { get; set; }
        public float? Prix { get; set; }
        public int? Quantite { get; set; }
        public IFormFile? ImageFile { get; set; }
        public string? ImageSrc { get; set; }
        public int? CategorieId { get; set; }
    }
}
