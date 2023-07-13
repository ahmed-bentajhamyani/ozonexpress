using OzonExpress.Models;

namespace OzonExpress.Dto
{
    public class TarifDto
    {
        public int Id { get; set; }
        public float Cout { get; set; }
        public int VilleDepId { get; set; }
        public int VilleArrId { get; set; }
    }
}
