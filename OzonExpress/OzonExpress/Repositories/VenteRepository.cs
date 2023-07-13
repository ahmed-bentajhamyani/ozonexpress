using OzonExpress.Data;
using OzonExpress.Interfaces;
using OzonExpress.Models;

namespace OzonExpress.Repository
{
    public class VenteRepository : IVenteRepository
    {
        private readonly DataContext _context;

        public VenteRepository(DataContext context)
        {
            _context = context;
        }

        public bool VenteExists(int id)
        {
            return _context.Ventes.Any(a => a.Id == id);
        }

        public ICollection<Vente> GetVentes()
        {
            return _context.Ventes.OrderBy(a => a.Id).ToList();
        }

        public Vente GetVente(int id)
        {
            return _context.Ventes.Where(v => v.Id == id).FirstOrDefault();
        }

        public bool CreateVente(int[] articleIds, Vente vente)
        {
            List<Article> articles = new List<Article>();
            foreach (var articleId in articleIds)
            {
                articles.Add(_context.Articles.Where(a => a.Id == articleId).FirstOrDefault());
            }

            foreach (var article in articles)
            {
                var articleVente = new ArticleVente()
                {
                    Article = article,
                    Vente = vente
                };

                _context.Add(articleVente);
            }

            _context.Add(vente);
            return Save();
        }

        public bool UpdateVente(int[] articleIds, Vente vente)
        {
            _context.Update(vente);
            return Save();
        }

        public bool DeleteVente(Vente vente)
        {
            _context.Remove(vente);
            return Save();
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }
    }
}
