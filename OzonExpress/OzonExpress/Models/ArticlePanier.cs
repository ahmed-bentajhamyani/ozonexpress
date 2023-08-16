namespace OzonExpress.Models
{
    public class ArticlePanier
    {
        public int? ArticleId { get; set; }
        public int? PanierId { get; set; }
        public int? Quantite { get; set; }
        public Article? Article { get; set; }
        public Panier? Panier { get; set; }
    }
}
