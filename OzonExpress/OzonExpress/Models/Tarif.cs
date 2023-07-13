using System.ComponentModel.DataAnnotations;

namespace OzonExpress.Models
{
    public class Tarif
    {
        public int Id { get; set; }
        public float Cout { get; set; }
        public int VilleDepId { get; set; }
        public Ville VilleDep { get; set; }
        public int VilleArrId { get; set; }
        public Ville VilleArr { get; set; }
    }
}
