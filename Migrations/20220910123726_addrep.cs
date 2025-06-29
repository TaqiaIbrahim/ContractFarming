using Microsoft.EntityFrameworkCore.Migrations;

namespace ContractFarming.Migrations
{
    public partial class addrep : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "RepresentativeId",
                schema: "security",
                table: "Users",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_RepresentativeId",
                schema: "security",
                table: "Users",
                column: "RepresentativeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Representatives_RepresentativeId",
                schema: "security",
                table: "Users",
                column: "RepresentativeId",
                principalTable: "Representatives",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Representatives_RepresentativeId",
                schema: "security",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_RepresentativeId",
                schema: "security",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "RepresentativeId",
                schema: "security",
                table: "Users");
        }
    }
}
