using Microsoft.EntityFrameworkCore.Migrations;

namespace ContractFarming.Migrations
{
    public partial class addinhertReper22 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ContractId1",
                schema: "security",
                table: "Users",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_ContractId1",
                schema: "security",
                table: "Users",
                column: "ContractId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Contracts_ContractId1",
                schema: "security",
                table: "Users",
                column: "ContractId1",
                principalTable: "Contracts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Contracts_ContractId1",
                schema: "security",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_ContractId1",
                schema: "security",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "ContractId1",
                schema: "security",
                table: "Users");
        }
    }
}
