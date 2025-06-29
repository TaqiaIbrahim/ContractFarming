using Microsoft.EntityFrameworkCore.Migrations;

namespace ContractFarming.Migrations
{
    public partial class addContractId3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Contracts_ContractId",
                schema: "security",
                table: "Users");

            migrationBuilder.AlterColumn<int>(
                name: "ContractId",
                schema: "security",
                table: "Users",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "ContracId",
                schema: "security",
                table: "Users",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Contracts_ContractId",
                schema: "security",
                table: "Users",
                column: "ContractId",
                principalTable: "Contracts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Contracts_ContractId",
                schema: "security",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "ContracId",
                schema: "security",
                table: "Users");

            migrationBuilder.AlterColumn<int>(
                name: "ContractId",
                schema: "security",
                table: "Users",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Contracts_ContractId",
                schema: "security",
                table: "Users",
                column: "ContractId",
                principalTable: "Contracts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
