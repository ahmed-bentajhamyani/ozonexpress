using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;

namespace OzonExpress.Dto
{
    public class VilleDto
    {
        public int Id { get; set; }
        public string NomVille { get; set; }
    }
}
