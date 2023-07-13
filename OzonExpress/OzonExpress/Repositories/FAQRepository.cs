using OzonExpress.Data;
using OzonExpress.Interfaces;
using OzonExpress.Models;

namespace OzonExpress.Repository
{
    public class FAQRepository : IFAQRepository
    {
        private readonly DataContext _context;

        public FAQRepository(DataContext context)
        {
            _context = context;
        }

        public bool FAQExists(int id)
        {
            return _context.FAQs.Any(f => f.Id == id);
        }

        public ICollection<FAQ> GetFAQs()
        {
            return _context.FAQs.OrderBy(f => f.Id).ToList();
        }

        public FAQ GetFAQ(int id)
        {
            return _context.FAQs.Where(f => f.Id == id).FirstOrDefault();
        }

        public bool CreateFAQ(FAQ faq)
        {
            _context.Add(faq);
            return Save();
        }

        public bool UpdateFAQ(FAQ faq)
        {
            _context.Update(faq);
            return Save();
        }

        public bool DeleteFAQ(FAQ faq)
        {
            _context.Remove(faq);
            return Save();
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }
    }
}
