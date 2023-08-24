using OzonExpress.Models;

namespace OzonExpress.Interfaces
{
    public interface IAgenceRepository
    {
        bool AgenceExists(int id);
        ICollection<Agence> GetAgences();
        Agence GetAgence(int id);
        bool CreateAgence(Agence agence);
        bool UpdateAgence(Agence agence);
        bool DeleteAgence(Agence agence);
        bool Save();
    }
}
