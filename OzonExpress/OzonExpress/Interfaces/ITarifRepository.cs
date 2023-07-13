using OzonExpress.Models;

namespace OzonExpress.Interfaces
{
    public interface ITarifRepository
    {
        bool TarifExists(int id);
        ICollection<Tarif> GetTarifs();
        Tarif GetTarif(int id);
        bool CreateTarif(Tarif tarif);
        bool UpdateTarif(Tarif tarif);
        bool DeleteTarif(Tarif tarif);
        bool Save();
    }
}
