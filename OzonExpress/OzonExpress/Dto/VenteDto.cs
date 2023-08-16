using OzonExpress.Models;

namespace OzonExpress.Dto
{
    public class VenteDto
    {
        public int? Id { get; set; }
        public DateTime? Date { get; set; }
        public string? Status { get; set; }
        public int? ClientId { get; set; }
    }
}
