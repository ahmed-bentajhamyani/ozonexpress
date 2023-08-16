using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;

namespace OzonExpress.Models
{
    public class Categorie
    {
        public int? Id { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string? Nom { get; set; }
        public ICollection<Article>? Articles { get; set; }
    }
}
