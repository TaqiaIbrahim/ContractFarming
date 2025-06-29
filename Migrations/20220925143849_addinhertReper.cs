using Microsoft.EntityFrameworkCore.Migrations;

namespace ContractFarming.Migrations
{
    public partial class addinhertReper : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ContractReviews_Representatives_RepresentativeId",
                table: "ContractReviews");

            migrationBuilder.DropForeignKey(
                name: "FK_Contracts_Representatives_RepresentativeId",
                table: "Contracts");

            migrationBuilder.DropForeignKey(
                name: "FK_ProducerReviews_Representatives_RepresentativeId",
                table: "ProducerReviews");

            migrationBuilder.DropForeignKey(
                name: "FK_Users_Representatives_RepresentativeId",
                schema: "security",
                table: "Users");

            migrationBuilder.DropTable(
                name: "Representatives");

            migrationBuilder.DropIndex(
                name: "IX_Contracts_RepresentativeId",
                table: "Contracts");

            migrationBuilder.DropColumn(
                name: "ContracId",
                schema: "security",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "RepresentativeId",
                table: "Contracts");

            migrationBuilder.AlterColumn<string>(
                name: "RepresentativeId",
                schema: "security",
                table: "Users",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InvestorId1",
                schema: "security",
                table: "Users",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "RepresentativeId",
                table: "ProducerReviews",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "RepresentativeId",
                table: "ContractReviews",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_InvestorId1",
                schema: "security",
                table: "Users",
                column: "InvestorId1");

            migrationBuilder.AddForeignKey(
                name: "FK_ContractReviews_Users_RepresentativeId",
                table: "ContractReviews",
                column: "RepresentativeId",
                principalSchema: "security",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ProducerReviews_Users_RepresentativeId",
                table: "ProducerReviews",
                column: "RepresentativeId",
                principalSchema: "security",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Users_InvestorId1",
                schema: "security",
                table: "Users",
                column: "InvestorId1",
                principalSchema: "security",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Users_RepresentativeId",
                schema: "security",
                table: "Users",
                column: "RepresentativeId",
                principalSchema: "security",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ContractReviews_Users_RepresentativeId",
                table: "ContractReviews");

            migrationBuilder.DropForeignKey(
                name: "FK_ProducerReviews_Users_RepresentativeId",
                table: "ProducerReviews");

            migrationBuilder.DropForeignKey(
                name: "FK_Users_Users_InvestorId1",
                schema: "security",
                table: "Users");

            migrationBuilder.DropForeignKey(
                name: "FK_Users_Users_RepresentativeId",
                schema: "security",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_InvestorId1",
                schema: "security",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "InvestorId1",
                schema: "security",
                table: "Users");

            migrationBuilder.AlterColumn<int>(
                name: "RepresentativeId",
                schema: "security",
                table: "Users",
                type: "int",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ContracId",
                schema: "security",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "RepresentativeId",
                table: "ProducerReviews",
                type: "int",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "RepresentativeId",
                table: "Contracts",
                type: "int",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "RepresentativeId",
                table: "ContractReviews",
                type: "int",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.CreateTable(
                name: "Representatives",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ContractId = table.Column<int>(type: "int", nullable: false),
                    InvestorId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Representatives", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Representatives_Contracts_ContractId",
                        column: x => x.ContractId,
                        principalTable: "Contracts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Representatives_Users_InvestorId",
                        column: x => x.InvestorId,
                        principalSchema: "security",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Contracts_RepresentativeId",
                table: "Contracts",
                column: "RepresentativeId");

            migrationBuilder.CreateIndex(
                name: "IX_Representatives_ContractId",
                table: "Representatives",
                column: "ContractId");

            migrationBuilder.CreateIndex(
                name: "IX_Representatives_InvestorId",
                table: "Representatives",
                column: "InvestorId");

            migrationBuilder.AddForeignKey(
                name: "FK_ContractReviews_Representatives_RepresentativeId",
                table: "ContractReviews",
                column: "RepresentativeId",
                principalTable: "Representatives",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Contracts_Representatives_RepresentativeId",
                table: "Contracts",
                column: "RepresentativeId",
                principalTable: "Representatives",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ProducerReviews_Representatives_RepresentativeId",
                table: "ProducerReviews",
                column: "RepresentativeId",
                principalTable: "Representatives",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Representatives_RepresentativeId",
                schema: "security",
                table: "Users",
                column: "RepresentativeId",
                principalTable: "Representatives",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
