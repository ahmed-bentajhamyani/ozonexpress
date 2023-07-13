using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OzonExpress.Models
{
    public class FAQ
    {
        public int Id { get; set; }
        [Column(TypeName = "nvarchar(500)")]
        public string Question { get; set; }
        [Column(TypeName = "nvarchar(500)")]
        public string Reponse { get; set; }
    }
}
