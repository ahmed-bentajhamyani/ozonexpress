using OzonExpress.Models;

namespace OzonExpress.Interfaces
{
    public interface IClientRepository
    {
        bool ClientExists(int id);
        ICollection<Client> GetClients();
        Client GetClient(int id);
        bool CreateClient(Client client);
        bool UpdateClient(Client client);
        bool DeleteClient(Client client);
        bool Save();
    }
}
