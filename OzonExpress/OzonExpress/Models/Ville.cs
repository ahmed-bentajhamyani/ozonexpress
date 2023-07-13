using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OzonExpress.Models
{
    public class Ville
    {
        public int Id { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string NomVille { get; set; }
        public ICollection<Tarif> Tarifs { get; set; }
    }
}
