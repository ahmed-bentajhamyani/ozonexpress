using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;

namespace OzonExpress.Dto
{
    public class FAQDto
    {
        public int Id { get; set; }
        public string Question { get; set; }
        public string Reponse { get; set; }
    }
}
