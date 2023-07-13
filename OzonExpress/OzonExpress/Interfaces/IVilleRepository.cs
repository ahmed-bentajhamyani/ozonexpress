using OzonExpress.Models;

namespace OzonExpress.Interfaces
{
    public interface IVilleRepository
    {
        bool VilleExists(int id);
        ICollection<Ville> GetVilles();
        Ville GetVille(int id);
        bool CreateVille(Ville ville);
        bool UpdateVille(Ville ville);
        bool DeleteVille(Ville ville);
        bool Save();
    }
}
