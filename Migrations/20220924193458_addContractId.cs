using Microsoft.EntityFrameworkCore.Migrations;

namespace ContractFarming.Migrations
{
    public partial class addContractId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ContactId",
                schema: "security",
                table: "Users",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ContactId",
                schema: "security",
                table: "Users");
        }
    }
}
