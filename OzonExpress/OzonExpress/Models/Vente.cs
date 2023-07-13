using System.ComponentModel.DataAnnotations;

namespace OzonExpress.Models
{
    public class Vente
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string Status { get; set; }
        public int ClientId { get; set; }
        public Client Client { get; set; }
        public ICollection<ArticleVente> ArticleVentes { get; set; }
    }
}
