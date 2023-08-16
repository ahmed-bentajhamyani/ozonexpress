using Microsoft.Extensions.Hosting;
using OzonExpress.Data;
using OzonExpress.Interfaces;
using OzonExpress.Models;
using System.Reflection.Metadata;

namespace OzonExpress.Repository
{
    public class BlogRepository : IBlogRepository
    {
        private readonly DataContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public BlogRepository(DataContext context, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _httpContextAccessor = httpContextAccessor;
        }

        public bool BlogExists(int id)
        {
            return _context.Blogs.Any(b => b.Id == id);
        }

        public ICollection<Blog> GetBlogs()
        {
            return _context.Blogs
                .OrderBy(b => b.Id)
                .Select(b => new Blog()
                {
                    Id = b.Id,
                    Titre = b.Titre,
                    Article = b.Article,
                    DateAjout = b.DateAjout,
                    ImageName = b.ImageName,
                    ImageSrc = String.Format("{0}://{1}{2}/Images/{3}",
                                            _httpContextAccessor.HttpContext.Request.Scheme,
                                            _httpContextAccessor.HttpContext.Request.Host,
                                            _httpContextAccessor.HttpContext.Request.PathBase,
                                            b.ImageName),
                })
                .ToList();
        }

        public Blog GetBlog(int id)
        {
#pragma warning disable CS8603 // Possible null reference return.
            return _context.Blogs
                .Where(b => b.Id == id)
                .Select(b => new Blog()
                {
                    Id = b.Id,
                    Titre = b.Titre,
                    Article = b.Article,
                    DateAjout = b.DateAjout,
                    ImageName = b.ImageName,
                    ImageSrc = String.Format("{0}://{1}{2}/Images/{3}",
                                            _httpContextAccessor.HttpContext.Request.Scheme,
                                            _httpContextAccessor.HttpContext.Request.Host,
                                            _httpContextAccessor.HttpContext.Request.PathBase,
                                            b.ImageName),
                })
                .FirstOrDefault();
#pragma warning restore CS8603 // Possible null reference return.
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
