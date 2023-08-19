using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;

namespace OzonExpress.Dto
{
    public class CategorieDto
    {
        public int? Id { get; set; }
        public string? Nom { get; set; }
    }
}
