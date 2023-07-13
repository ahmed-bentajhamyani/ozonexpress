using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;

namespace OzonExpress.Dto
{
    public class ArticleDto
    {
        public int Id { get; set; }
        public string Nom { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public float Prix { get; set; }
        public int Quantite { get; set; }
    }
}
