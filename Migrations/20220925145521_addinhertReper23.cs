using Microsoft.EntityFrameworkCore.Migrations;

namespace ContractFarming.Migrations
{
    public partial class addinhertReper23 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<string>(
                name: "RepresentativeId",
                table: "Contracts",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Contracts_RepresentativeId",
                table: "Contracts",
                column: "RepresentativeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Contracts_Users_RepresentativeId",
                table: "Contracts",
                column: "RepresentativeId",
                principalSchema: "security",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Contracts_Users_RepresentativeId",
                table: "Contracts");

            migrationBuilder.DropIndex(
                name: "IX_Contracts_RepresentativeId",
                table: "Contracts");

            migrationBuilder.DropColumn(
                name: "RepresentativeId",
                table: "Contracts");

            migrationBuilder.AddColumn<int>(
                name: "ContractId1",
                schema: "security",
                table: "Users",
                type: "int",
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
    }
}
