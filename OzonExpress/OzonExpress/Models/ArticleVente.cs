namespace OzonExpress.Models
{
    public class ArticleVente
    {
        public int ArticleId { get; set; }
        public int VenteId { get; set; }
        public int Quantite { get; set; }
        public Article Article { get; set; }
        public Vente Vente { get; set; }
    }
}
