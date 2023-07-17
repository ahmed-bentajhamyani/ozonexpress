using AutoMapper;
using OzonExpress.Dto;
using OzonExpress.Models;
using System.Diagnostics.Metrics;

namespace OzonExpress.Helper
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Article, ArticleDto>();
            CreateMap<ArticleDto, Article>();

            CreateMap<Blog, BlogDto>();
            CreateMap<BlogDto, Blog>();

            CreateMap<FAQ, FAQDto>();
            CreateMap<FAQDto, FAQ>();

            CreateMap<Tarif, TarifDto>();
            CreateMap<TarifDto, Tarif>();

            CreateMap<Client, ClientDto>();
            CreateMap<ClientDto, Client>();

            CreateMap<Vente, VenteDto>();
            CreateMap<VenteDto, Vente>();

            CreateMap<Panier, PanierDto>();
            CreateMap<PanierDto, Panier>();

            CreateMap<Ville, VilleDto>();
            CreateMap<VilleDto, Ville>();

            CreateMap<Commentaire, CommentaireDto>();
            CreateMap<CommentaireDto, Commentaire>();
        }
    }
}
