using OzonExpress.Data;
using OzonExpress.Interfaces;
using OzonExpress.Models;

namespace OzonExpress.Repositories
{
    public class CategorieRepository : ICategorieRepository
    {
        private readonly DataContext _context;

        public CategorieRepository(DataContext context)
        {
            _context = context;
        }

        public bool CategorieExists(int id)
        {
            return _context.Categories.Any(c => c.Id == id);
        }

        public ICollection<Categorie> GetCategories()
        {
            return _context.Categories.OrderBy(c => c.Id).ToList();
        }

        public Categorie GetCategorie(int id)
        {
            return _context.Categories.Where(c => c.Id == id).FirstOrDefault();
        }

        public bool CreateCategorie(Categorie categorie)
        {
            _context.Add(categorie);
            return Save();
        }

        public bool UpdateCategorie(Categorie categorie)
        {
            _context.Update(categorie);
            return Save();
        }

        public bool DeleteCategorie(Categorie categorie)
        {
            _context.Remove(categorie);
            return Save();
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }
    }
}
