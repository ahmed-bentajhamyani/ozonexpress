using OzonExpress.Models;

namespace OzonExpress.Interfaces
{
    public interface ICategorieRepository
    {
        bool CategorieExists(int id);
        ICollection<Categorie> GetCategories();
        Categorie GetCategorie(int id);
        bool CreateCategorie(Categorie categorie);
        bool UpdateCategorie(Categorie categorie);
        bool DeleteCategorie(Categorie categorie);
        bool Save();
    }
}
