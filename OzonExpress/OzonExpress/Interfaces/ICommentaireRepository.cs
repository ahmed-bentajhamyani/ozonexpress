using OzonExpress.Models;

namespace OzonExpress.Interfaces
{
    public interface ICommentaireRepository
    {
        bool CommentaireExists(int id);
        ICollection<Commentaire> GetCommentaires();
        Commentaire GetCommentaire(int id);
        bool CreateCommentaire(Commentaire commentaire);
        bool UpdateCommentaire(Commentaire commentaire);
        bool DeleteCommentaire(Commentaire commentaire);
        bool Save();
    }
}
