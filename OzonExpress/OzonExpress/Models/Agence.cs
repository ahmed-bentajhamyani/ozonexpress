using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;

namespace OzonExpress.Models
{
    public class Agence
    {
        public int? Id { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string? Ville { get; set; }
        public ICollection<Tarif>? Tarifs { get; set; }
    }
}
