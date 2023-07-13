using OzonExpress.Data;
using OzonExpress.Interfaces;
using OzonExpress.Models;

namespace OzonExpress.Repositories
{
    public class ClientRepository : IClientRepository
    {
        private readonly DataContext _context;

        public ClientRepository(DataContext context)
        {
            _context = context;
        }

        public bool ClientExists(int id)
        {
            return _context.Clients.Any(c => c.Id == id);
        }

        public ICollection<Client> GetClients()
        {
            return _context.Clients.OrderBy(c => c.Id).ToList();
        }

        public Client GetClient(int id)
        {
            return _context.Clients.Where(c => c.Id == id).FirstOrDefault();
        }

        public bool CreateClient(Client client)
        {
            _context.Add(client);
            return Save();
        }

        public bool UpdateClient(Client client)
        {
            _context.Update(client);
            return Save();
        }

        public bool DeleteClient(Client client)
        {
            _context.Remove(client);
            return Save();
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }
    }
}
