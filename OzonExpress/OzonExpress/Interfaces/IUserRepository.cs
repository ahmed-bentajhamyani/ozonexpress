using Microsoft.EntityFrameworkCore;
using OzonExpress.Models;

namespace OzonExpress.Interfaces
{
    public interface IUserRepository
    {

        bool UserExists(int id);
        ICollection<User> GetUsers();
        User GetUser(int id);
        User GetUserByEmail(string email);
        bool CreateUser(User user);
        bool UpdateUser(User user);
        bool DeleteUser(User user);
        bool Save();
    }
}
