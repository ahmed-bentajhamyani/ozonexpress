using OzonExpress.Data;
using OzonExpress.Interfaces;
using OzonExpress.Models;

namespace OzonExpress.Repositories
{
    public class AgenceRepository : IAgenceRepository
    {
        private readonly DataContext _context;

        public AgenceRepository(DataContext context)
        {
            _context = context;
        }

        public bool AgenceExists(int id)
        {
            return _context.Agences.Any(a => a.Id == id);
        }

        public ICollection<Agence> GetAgences()
        {
            return _context.Agences.OrderBy(v => v.Id).ToList();
        }

        public Agence GetAgence(int id)
        {
            return _context.Agences.Where(v => v.Id == id).FirstOrDefault();
        }

        public bool CreateAgence(Agence Agence)
        {
            _context.Add(Agence);
            return Save();
        }

        public bool UpdateAgence(Agence Agence)
        {
            _context.Update(Agence);
            return Save();
        }

        public bool DeleteAgence(Agence Agence)
        {
            _context.Remove(Agence);
            return Save();
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }
    }
}
