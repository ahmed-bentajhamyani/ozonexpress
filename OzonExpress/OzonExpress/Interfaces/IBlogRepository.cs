using OzonExpress.Models;

namespace OzonExpress.Interfaces
{
    public interface IBlogRepository
    {
        bool BlogExists(int id);
        ICollection<Blog> GetBlogs();
        Blog GetBlog(int id);
        bool CreateBlog(Blog blog);
        bool UpdateBlog(Blog blog);
        bool DeleteBlog(Blog blog);
        bool Save();
    }
}
