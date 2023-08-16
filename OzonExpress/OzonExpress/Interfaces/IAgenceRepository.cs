using OzonExpress.Models;

namespace OzonExpress.Interfaces
{
    public interface IAgenceRepository
    {
        bool AgenceExists(int id);
        ICollection<Agence> GetAgences();
        Agence GetAgence(int id);
        bool CreateAgence(Agence Agence);
        bool UpdateAgence(Agence Agence);
        bool DeleteAgence(Agence Agence);
        bool Save();
    }
}
