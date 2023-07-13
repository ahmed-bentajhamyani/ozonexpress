using OzonExpress.Data;
using OzonExpress.Interfaces;
using OzonExpress.Models;

namespace OzonExpress.Repositories
{
    public class TarifRepository : ITarifRepository
    {
        private readonly DataContext _context;

        public TarifRepository(DataContext context)
        {
            _context = context;
        }

        public bool TarifExists(int id)
        {
            return _context.Tarifs.Any(t => t.Id == id);
        }

        public ICollection<Tarif> GetTarifs()
        {
            return _context.Tarifs.OrderBy(t => t.Id).ToList();
        }

        public Tarif GetTarif(int id)
        {
            return _context.Tarifs.Where(t => t.Id == id).FirstOrDefault();
        }

        public bool CreateTarif(Tarif tarif)
        {
            _context.Add(tarif);
            return Save();
        }

        public bool UpdateTarif(Tarif tarif)
        {
            _context.Update(tarif);
            return Save();
        }

        public bool DeleteTarif(Tarif tarif)
        {
            _context.Remove(tarif);
            return Save();
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }
    }
}
