using Microsoft.EntityFrameworkCore;
using OzonExpress.Models;

namespace OzonExpress.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions option): base(option) { }

        public DbSet<Article> Articles { get; set; }
        public DbSet<ArticlePanier> ArticlePaniers { get; set; }
        public DbSet<ArticleVente> ArticleVentes { get; set; }
        public DbSet<Blog> Blogs { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<FAQ> FAQs { get; set; }
        public DbSet<Panier> Paniers { get; set; }
        public DbSet<Vente> Ventes { get; set; }
        public DbSet<Ville> Villes { get; set; }
        public DbSet<Tarif> Tarifs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ArticlePanier>()
                .HasKey(ap => new { ap.ArticleId, ap.PanierId });
            modelBuilder.Entity<ArticlePanier>()
                .HasOne(a => a.Article)
                .WithMany(ap => ap.ArticlePaniers)
                .HasForeignKey(a => a.ArticleId);
            modelBuilder.Entity<ArticlePanier>()
                .HasOne(p => p.Panier)
                .WithMany(ap => ap.ArticlePaniers)
                .HasForeignKey(p => p.PanierId);

            modelBuilder.Entity<ArticleVente>()
                .HasKey(av => new { av.ArticleId, av.VenteId });
            modelBuilder.Entity<ArticleVente>()
                .HasOne(a => a.Article)
                .WithMany(av => av.ArticleVentes)
                .HasForeignKey(a => a.ArticleId);
            modelBuilder.Entity<ArticleVente>()
                .HasOne(v => v.Vente)
                .WithMany(av => av.ArticleVentes)
                .HasForeignKey(v => v.VenteId);

            modelBuilder.Entity<Tarif>()
                .HasOne(t => t.VilleDep)
                .WithMany(v => v.Tarifs)
                .HasForeignKey(t => t.VilleDepId)
                .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<Tarif>()
                .HasOne(t => t.VilleArr)
                .WithMany()
                .HasForeignKey(t => t.VilleArrId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
