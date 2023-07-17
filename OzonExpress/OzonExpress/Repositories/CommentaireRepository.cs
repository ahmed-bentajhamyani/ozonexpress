using OzonExpress.Data;
using OzonExpress.Interfaces;
using OzonExpress.Models;

namespace OzonExpress.Repositories
{
    public class CommentaireRepository : ICommentaireRepository
    {
        private readonly DataContext _context;

        public CommentaireRepository(DataContext context)
        {
            _context = context;
        }

        public bool CommentaireExists(int id)
        {
            return _context.Commentaires.Any(a => a.Id == id);
        }

        public ICollection<Commentaire> GetCommentaires()
        {
            return _context.Commentaires.OrderBy(a => a.Id).ToList();
        }

        public Commentaire GetCommentaire(int id)
        {
            return _context.Commentaires.Where(a => a.Id == id).FirstOrDefault();
        }

        public bool CreateCommentaire(Commentaire commentaire)
        {
            _context.Add(commentaire);
            return Save();
        }

        public bool UpdateCommentaire(Commentaire commentaire)
        {
            _context.Update(commentaire);
            return Save();
        }

        public bool DeleteCommentaire(Commentaire commentaire)
        {
            _context.Remove(commentaire);
            return Save();
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }
    }
}
