using OzonExpress.Models;

namespace OzonExpress.Interfaces
{
    public interface IPanierRepository
    {
        bool PanierExists(int id);
        ICollection<Panier> GetPaniers();
        Panier GetPanier(int id);
        bool CreatePanier(Panier panier);
        bool AddToPanier(int panierId, int articleId, int quantite);
        bool DeleteFromPanier(int articleId, Panier panier);
        bool Save();
    }
}
