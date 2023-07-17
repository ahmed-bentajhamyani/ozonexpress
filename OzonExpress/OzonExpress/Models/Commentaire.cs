namespace OzonExpress.Models
{
    public class Commentaire
    {
        public int Id { get; set; }
        public string Comment { get; set; }
        public int ClientId { get; set; }
        public Client Client { get; set; }
    }
}
