using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OzonExpress.Migrations
{
    /// <inheritdoc />
    public partial class UpdateTarifColumn : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<float>(
                name: "Cout",
                table: "Tarifs",
                type: "real",
                nullable: false,
                defaultValue: 0f);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Cout",
                table: "Tarifs");
        }
    }
}
