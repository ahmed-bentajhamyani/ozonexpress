using OzonExpress.Models;

namespace OzonExpress.Interfaces
{
    public interface IVenteRepository
    {
        bool VenteExists(int id);
        ICollection<Vente> GetVentes();
        Vente GetVente(int id);
        bool CreateVente(int[] articleIds, Vente vente);
        bool UpdateVente(int[] articleIds, Vente vente);
        bool DeleteVente(Vente vente);
        bool Save();
    }
}
