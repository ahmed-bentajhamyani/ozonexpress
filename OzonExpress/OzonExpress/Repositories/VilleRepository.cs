using OzonExpress.Data;
using OzonExpress.Interfaces;
using OzonExpress.Models;

namespace OzonExpress.Repositories
{
    public class VilleRepository : IVilleRepository
    {
        private readonly DataContext _context;

        public VilleRepository(DataContext context)
        {
            _context = context;
        }

        public bool VilleExists(int id)
        {
            return _context.Villes.Any(a => a.Id == id);
        }

        public ICollection<Ville> GetVilles()
        {
            return _context.Villes.OrderBy(v => v.Id).ToList();
        }

        public Ville GetVille(int id)
        {
            return _context.Villes.Where(v => v.Id == id).FirstOrDefault();
        }

        public bool CreateVille(Ville ville)
        {
            _context.Add(ville);
            return Save();
        }

        public bool UpdateVille(Ville ville)
        {
            _context.Update(ville);
            return Save();
        }

        public bool DeleteVille(Ville ville)
        {
            _context.Remove(ville);
            return Save();
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }
    }
}
