using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OzonExpress.Models
{
    public class Article
    {
        public int? Id { get; set; }
        [Column(TypeName="nvarchar(50)")]
        public string? Nom { get; set; }
        [Column(TypeName = "nvarchar(250)")]
        public string? Description { get; set; }
        public float? Prix { get; set; }
        public int? Quantite { get; set; }
        [Column(TypeName = "nvarchar(150)")]
        public string? ImageName { get; set; }
        [NotMapped]
        public IFormFile? ImageFile { get; set; }
        [NotMapped]
        public string? ImageSrc { get; set; }
        public int? CategorieId { get; set; }
        public Categorie? Categorie { get; set; }
        public ICollection<ArticlePanier>? ArticlePaniers { get; set; }
        public ICollection<ArticleVente>? ArticleVentes { get; set; }
    }
}
