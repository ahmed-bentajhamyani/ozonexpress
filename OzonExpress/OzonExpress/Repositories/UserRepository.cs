using Humanizer.Localisation;
using OzonExpress.Data;
using OzonExpress.Interfaces;
using OzonExpress.Models;

namespace OzonExpress.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;

        public UserRepository(DataContext context)
        {
            _context = context;
        }

        public bool UserExists(int id)
        {
            return _context.Users.Any(u => u.Id == id);
        }

        public ICollection<User> GetUsers()
        {
            return _context.Users.OrderBy(u => u.Id).ToList();
        }

        public User GetUser(int id)
        {
            return _context.Users.FirstOrDefault(u => u.Id == id);
        }

        public User GetUserByEmail(string email)
        {
            return _context.Users.FirstOrDefault(u => u.Email == email);
        }

        public bool CreateUser(User User)
        {
            _context.Add(User);
            return Save();
        }

        public bool UpdateUser(User user)
        {
            _context.Update(user);
            return Save();
        }

        public bool DeleteUser(User user)
        {
            _context.Remove(user);
            return Save();
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }
    }
}
