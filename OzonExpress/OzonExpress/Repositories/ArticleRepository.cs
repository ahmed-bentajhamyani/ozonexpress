using Microsoft.AspNetCore.Mvc;
using OzonExpress.Data;
using OzonExpress.Interfaces;
using OzonExpress.Models;

namespace OzonExpress.Repository
{
    public class ArticleRepository : IArticleRepository
    {
        private readonly DataContext _context;

        public ArticleRepository(DataContext context)
        { 
            _context = context; 
        }

        public bool ArticleExists(int id)
        {
            return _context.Articles.Any(a => a.Id == id);
        }

        public ICollection<Article> GetArticles()
        {
            return _context.Articles.OrderBy(a => a.Id).ToList();
        }

        public Article GetArticle(int id)
        {
            return _context.Articles.Where(a => a.Id == id).FirstOrDefault();
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
