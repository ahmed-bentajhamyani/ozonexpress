using OzonExpress.Models;

namespace OzonExpress.Interfaces
{
    public interface IArticleRepository
    {
        bool ArticleExists(int id);
        ICollection<Article> GetArticles();
        Article GetArticle(int id);
        bool CreateArticle(Article article);
        bool UpdateArticle(Article article);
        bool DeleteArticle(Article article);
        bool Save();
    }
}
