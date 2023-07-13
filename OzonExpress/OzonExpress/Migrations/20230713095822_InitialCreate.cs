using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OzonExpress.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Articles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nom = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(250)", nullable: false),
                    Image = table.Column<string>(type: "nvarchar(150)", nullable: false),
                    Prix = table.Column<float>(type: "real", nullable: false),
                    Quantite = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Articles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Blogs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Titre = table.Column<string>(type: "nvarchar(250)", nullable: false),
                    Article = table.Column<string>(type: "nvarchar(1000)", nullable: false),
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DateAjout = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Blogs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Clients",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clients", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FAQs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Question = table.Column<string>(type: "nvarchar(500)", nullable: false),
                    Reponse = table.Column<string>(type: "nvarchar(500)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FAQs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Paniers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Paniers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Villes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NomVille = table.Column<string>(type: "nvarchar(50)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Villes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Ventes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ClientId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ventes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Ventes_Clients_ClientId",
                        column: x => x.ClientId,
                        principalTable: "Clients",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ArticlePaniers",
                columns: table => new
                {
                    ArticleId = table.Column<int>(type: "int", nullable: false),
                    PanierId = table.Column<int>(type: "int", nullable: false),
                    Quantite = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ArticlePaniers", x => new { x.ArticleId, x.PanierId });
                    table.ForeignKey(
                        name: "FK_ArticlePaniers_Articles_ArticleId",
                        column: x => x.ArticleId,
                        principalTable: "Articles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ArticlePaniers_Paniers_PanierId",
                        column: x => x.PanierId,
                        principalTable: "Paniers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Tarifs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    VilleDepId = table.Column<int>(type: "int", nullable: false),
                    VilleArrId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tarifs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Tarifs_Villes_VilleArrId",
                        column: x => x.VilleArrId,
                        principalTable: "Villes",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Tarifs_Villes_VilleDepId",
                        column: x => x.VilleDepId,
                        principalTable: "Villes",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "ArticleVentes",
                columns: table => new
                {
                    ArticleId = table.Column<int>(type: "int", nullable: false),
                    VenteId = table.Column<int>(type: "int", nullable: false),
                    Quantite = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ArticleVentes", x => new { x.ArticleId, x.VenteId });
                    table.ForeignKey(
                        name: "FK_ArticleVentes_Articles_ArticleId",
                        column: x => x.ArticleId,
                        principalTable: "Articles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ArticleVentes_Ventes_VenteId",
                        column: x => x.VenteId,
                        principalTable: "Ventes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ArticlePaniers_PanierId",
                table: "ArticlePaniers",
                column: "PanierId");

            migrationBuilder.CreateIndex(
                name: "IX_ArticleVentes_VenteId",
                table: "ArticleVentes",
                column: "VenteId");

            migrationBuilder.CreateIndex(
                name: "IX_Tarifs_VilleArrId",
                table: "Tarifs",
                column: "VilleArrId");

            migrationBuilder.CreateIndex(
                name: "IX_Tarifs_VilleDepId",
                table: "Tarifs",
                column: "VilleDepId");

            migrationBuilder.CreateIndex(
                name: "IX_Ventes_ClientId",
                table: "Ventes",
                column: "ClientId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ArticlePaniers");

            migrationBuilder.DropTable(
                name: "ArticleVentes");

            migrationBuilder.DropTable(
                name: "Blogs");

            migrationBuilder.DropTable(
                name: "FAQs");

            migrationBuilder.DropTable(
                name: "Tarifs");

            migrationBuilder.DropTable(
                name: "Paniers");

            migrationBuilder.DropTable(
                name: "Articles");

            migrationBuilder.DropTable(
                name: "Ventes");

            migrationBuilder.DropTable(
                name: "Villes");

            migrationBuilder.DropTable(
                name: "Clients");
        }
    }
}
