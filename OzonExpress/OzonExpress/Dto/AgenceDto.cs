using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;

namespace OzonExpress.Dto
{
    public class AgenceDto
    {
        public int? Id { get; set; }
        public string? Ville { get; set; }
    }
}
