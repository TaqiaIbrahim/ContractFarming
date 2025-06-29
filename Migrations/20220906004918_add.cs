using Microsoft.EntityFrameworkCore.Migrations;

namespace ContractFarming.Migrations
{
    public partial class add : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "ProducerConfirm",
                table: "Installments",
                nullable: false,
                oldClrType: typeof(bool),
                oldType: "bit");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<bool>(
                name: "ProducerConfirm",
                table: "Installments",
                type: "bit",
                nullable: false,
                oldClrType: typeof(int));
        }
    }
}
