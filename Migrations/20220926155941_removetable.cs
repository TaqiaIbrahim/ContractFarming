using Microsoft.EntityFrameworkCore.Migrations;

namespace ContractFarming.Migrations
{
    public partial class removetable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Contracts_ContractId",
                schema: "security",
                table: "Users");

            migrationBuilder.DropTable(
                name: "NotiUsers");

            migrationBuilder.DropTable(
                name: "Notifications");

            migrationBuilder.AlterColumn<int>(
                name: "ContractId",
                schema: "security",
                table: "Users",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Contracts_ContractId",
                schema: "security",
                table: "Users");

            migrationBuilder.AlterColumn<int>(
                name: "ContractId",
                schema: "security",
                table: "Users",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.CreateTable(
                name: "Notifications",
                columns: table => new
                {
                    NotiId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Close = table.Column<int>(type: "int", nullable: false),
                    NotiDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NotiHeader = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NotiStatue = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Notifications", x => x.NotiId);
                });

            migrationBuilder.CreateTable(
                name: "NotiUsers",
                columns: table => new
                {
                    NotiId = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Id = table.Column<int>(type: "int", nullable: false),
                    ReadState = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NotiUsers", x => new { x.NotiId, x.UserId });
                    table.ForeignKey(
                        name: "FK_NotiUsers_Notifications_NotiId",
                        column: x => x.NotiId,
                        principalTable: "Notifications",
                        principalColumn: "NotiId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_NotiUsers_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "security",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_NotiUsers_UserId",
                table: "NotiUsers",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Contracts_ContractId",
                schema: "security",
                table: "Users",
                column: "ContractId",
                principalTable: "Contracts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
