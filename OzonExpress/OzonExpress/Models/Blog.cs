using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;

namespace OzonExpress.Models
{
    public class Blog
    {
        public int Id { get; set; }
        [Column(TypeName = "nvarchar(250)")]
        public string Titre { get; set; }
        [Column(TypeName = "nvarchar(1000)")]
        public string Article { get; set; }
        public string Image { get; set; }
        public DateTime DateAjout { get; set; }
    }
}
