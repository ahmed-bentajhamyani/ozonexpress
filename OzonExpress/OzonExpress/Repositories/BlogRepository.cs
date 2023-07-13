using OzonExpress.Data;
using OzonExpress.Interfaces;
using OzonExpress.Models;

namespace OzonExpress.Repository
{
    public class BlogRepository : IBlogRepository
    {
        private readonly DataContext _context;

        public BlogRepository(DataContext context)
        {
            _context = context;
        }

        public bool BlogExists(int id)
        {
            return _context.Blogs.Any(b => b.Id == id);
        }

        public ICollection<Blog> GetBlogs()
        {
            return _context.Blogs.OrderBy(b => b.Id).ToList();
        }

        public Blog GetBlog(int id)
        {
            return _context.Blogs.Where(b => b.Id == id).FirstOrDefault();
        }

        public bool CreateBlog(Blog blog)
        {
            _context.Add(blog);
            return Save();
        }

        public bool UpdateBlog(Blog blog)
        {
            _context.Update(blog);
            return Save();
        }

        public bool DeleteBlog(Blog blog)
        {
            _context.Remove(blog);
            return Save();
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }
    }
}
