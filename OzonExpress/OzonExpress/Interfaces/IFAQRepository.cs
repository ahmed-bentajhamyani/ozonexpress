using OzonExpress.Models;

namespace OzonExpress.Interfaces
{
    public interface IFAQRepository
    {
        bool FAQExists(int id);
        ICollection<FAQ> GetFAQs();
        FAQ GetFAQ(int id);
        bool CreateFAQ(FAQ faq);
        bool UpdateFAQ(FAQ faq);
        bool DeleteFAQ(FAQ faq);
        bool Save();
    }
}
