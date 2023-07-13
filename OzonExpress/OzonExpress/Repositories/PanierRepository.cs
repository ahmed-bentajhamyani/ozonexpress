using Humanizer.Localisation;
using OzonExpress.Data;
using OzonExpress.Interfaces;
using OzonExpress.Models;

namespace OzonExpress.Repositories
{
    public class PanierRepository : IPanierRepository
    {
        private readonly DataContext _context;

        public PanierRepository(DataContext context)
        {
            _context = context;
        }

        public bool PanierExists(int id)
        {
            return _context.Paniers.Any(a => a.Id == id);
        }

        public ICollection<Panier> GetPaniers()
        {
            return _context.Paniers.OrderBy(a => a.Id).ToList();
        }

        public Panier GetPanier(int id)
        {
            return _context.Paniers.Where(p => p.Id == id).FirstOrDefault();
        }

        public bool CreatePanier(Panier panier)
        {
            _context.Add(panier);
            return Save();
        }

        public bool AddToPanier(int panierId, int articleId, int quantite)
        {
            var article = _context.Articles.Where(a => a.Id == articleId).FirstOrDefault();

            var panier = _context.Paniers.Where(p => p.Id == panierId).FirstOrDefault();

            var articlePanier = new ArticlePanier()
            {
                Article = article,
                Panier = panier,
                Quantite = quantite
            };

            _context.Add(articlePanier); 
            return Save();
        }

        public bool DeleteFromPanier(int articleId, Panier panier)
        {
            var article = _context.Articles.Where(a => a.Id == articleId).FirstOrDefault();

            var articlePanier = _context.ArticlePaniers.Where(a => a.Article == article && a.Panier == panier).FirstOrDefault();
            
            _context.Remove(articlePanier);
            return Save();
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }
    }
}
