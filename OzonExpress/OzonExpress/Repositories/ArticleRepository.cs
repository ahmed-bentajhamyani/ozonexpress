using OzonExpress.Data;
using OzonExpress.Interfaces;
using OzonExpress.Models;

namespace OzonExpress.Repository
{
    public class ArticleRepository : IArticleRepository
    {
        private readonly DataContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public ArticleRepository(DataContext context, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _httpContextAccessor = httpContextAccessor;
        }

        public bool ArticleExists(int id)
        {
            return _context.Articles.Any(a => a.Id == id);
        }

        public ICollection<Article> GetArticles()
        {
            return _context.Articles
                .OrderBy(a => a.Id)
                .Select(a => new Article()
                {
                    Id = a.Id,
                    Nom = a.Nom,
                    Description = a.Description,
                    ImageName = a.ImageName,
                    ImageSrc = String.Format("{0}://{1}{2}/Images/{3}",
                                            _httpContextAccessor.HttpContext.Request.Scheme,
                                            _httpContextAccessor.HttpContext.Request.Host,
                                            _httpContextAccessor.HttpContext.Request.PathBase,
                                            a.ImageName),
                    Prix = a.Prix,
                    Quantite = a.Quantite,
                    CategorieId = a.CategorieId,
                })
                .ToList();
        }

        public Article GetArticle(int id)
        {
#pragma warning disable CS8603 // Possible null reference return.
            return _context.Articles
                .Where(a => a.Id == id)
                .Select(a => new Article()
                {
                    Id = a.Id,
                    Nom = a.Nom,
                    Description = a.Description,
                    ImageName = a.ImageName,
                    ImageSrc = String.Format("{0}://{1}{2}/Images/{3}",
                                            _httpContextAccessor.HttpContext.Request.Scheme,
                                            _httpContextAccessor.HttpContext.Request.Host,
                                            _httpContextAccessor.HttpContext.Request.PathBase,
                                            a.ImageName),
                    Prix = a.Prix,
                    Quantite = a.Quantite,
                    CategorieId = a.CategorieId,
                })
                .FirstOrDefault();
#pragma warning disable CS8603 // Possible null reference return.
        }

        public bool CreateArticle(Article article)
        {
            _context.Add(article);
            return Save();
        }

        public bool UpdateArticle(Article article)
        {
            _context.Update(article);
            return Save();
        }

        public bool DeleteArticle(Article article)
        {
            _context.Remove(article);
            return Save();
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }
    }
}
