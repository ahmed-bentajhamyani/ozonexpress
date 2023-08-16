using System.ComponentModel.DataAnnotations;

namespace OzonExpress.Models
{
    public class Tarif
    {
        public int? Id { get; set; }
        public int? AgenceDepId { get; set; }
        public Agence? AgenceDep { get; set; }
        public int? AgenceArrId { get; set; }
        public Agence? AgenceArr { get; set; }
        public float? Cout { get; set; }
    }
}
