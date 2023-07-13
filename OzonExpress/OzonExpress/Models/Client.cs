namespace OzonExpress.Models
{
    public class Client
    {
        public int Id { get; set; }
        public ICollection<Vente> Ventes { get; set; }
    }
}
