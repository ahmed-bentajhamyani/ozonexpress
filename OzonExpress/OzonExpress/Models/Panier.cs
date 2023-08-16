namespace OzonExpress.Models
{
    public class Panier
    {
        public int? Id { get; set; }
        public ICollection<ArticlePanier>? ArticlePaniers { get; set; }
    }
}
