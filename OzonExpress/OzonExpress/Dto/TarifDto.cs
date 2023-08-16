using OzonExpress.Models;

namespace OzonExpress.Dto
{
    public class TarifDto
    {
        public int? Id { get; set; }
        public int? AgenceDepId { get; set; }
        public int? AgenceArrId { get; set; }
        public float? Cout { get; set; }
    }
}
