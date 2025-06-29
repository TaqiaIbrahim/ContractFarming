using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ContractFarming.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "security");

            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductType = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Drivers",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    IDCard = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    CarOwnerName = table.Column<string>(nullable: false),
                    CarNo = table.Column<int>(nullable: false),
                    Phone = table.Column<string>(nullable: false),
                    Address = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Drivers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Notifications",
                columns: table => new
                {
                    NotiId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NotiHeader = table.Column<string>(nullable: true),
                    NotiStatue = table.Column<bool>(nullable: false),
                    NotiDescription = table.Column<string>(nullable: true),
                    Close = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Notifications", x => x.NotiId);
                });

            migrationBuilder.CreateTable(
                name: "Roles",
                schema: "security",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: false),
                    Climate = table.Column<string>(nullable: true),
                    HarvestDate = table.Column<DateTime>(nullable: false),
                    GrowingTime = table.Column<string>(nullable: true),
                    ProductType = table.Column<string>(nullable: true),
                    ImageUrl = table.Column<string>(nullable: true),
                    Feasibility = table.Column<string>(nullable: true),
                    ArgiculturalLandMarks = table.Column<string>(nullable: true),
                    ProductQuality = table.Column<string>(nullable: true),
                    StrategicPlan = table.Column<string>(nullable: true),
                    CostsPerKilo = table.Column<double>(nullable: false),
                    FoodValueChain = table.Column<string>(nullable: true),
                    Classification = table.Column<string>(nullable: true),
                    CategoriesId = table.Column<int>(nullable: true),
                    CategoryId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Products_Categories_CategoriesId",
                        column: x => x.CategoriesId,
                        principalTable: "Categories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "RoleClaims",
                schema: "security",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RoleClaims_Roles_RoleId",
                        column: x => x.RoleId,
                        principalSchema: "security",
                        principalTable: "Roles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Locations",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Governorate = table.Column<string>(nullable: false),
                    Dicrtorate = table.Column<string>(nullable: false),
                    Isolation = table.Column<string>(nullable: false),
                    Village = table.Column<string>(nullable: false),
                    ProductId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Locations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Locations_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Prices",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    price = table.Column<decimal>(nullable: false),
                    Date = table.Column<DateTime>(nullable: false),
                    ProductId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Prices", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Prices_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Seasons",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SeasonName = table.Column<string>(nullable: false),
                    Start_date = table.Column<DateTime>(nullable: false),
                    End_date = table.Column<DateTime>(nullable: false),
                    ProductId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Seasons", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Seasons_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Product_Locations",
                columns: table => new
                {
                    ProductId = table.Column<int>(nullable: false),
                    LocationId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Product_Locations", x => new { x.ProductId, x.LocationId });
                    table.ForeignKey(
                        name: "FK_Product_Locations_Locations_LocationId",
                        column: x => x.LocationId,
                        principalTable: "Locations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Product_Locations_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Prodcut_Seasons",
                columns: table => new
                {
                    ProductId = table.Column<int>(nullable: false),
                    SeasonId = table.Column<int>(nullable: false),
                    Price = table.Column<double>(nullable: false),
                    Id = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Prodcut_Seasons", x => new { x.ProductId, x.SeasonId });
                    table.ForeignKey(
                        name: "FK_Prodcut_Seasons_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Prodcut_Seasons_Seasons_SeasonId",
                        column: x => x.SeasonId,
                        principalTable: "Seasons",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Season_Prices",
                columns: table => new
                {
                    SeasonId = table.Column<int>(nullable: false),
                    PriceId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Season_Prices", x => new { x.SeasonId, x.PriceId });
                    table.ForeignKey(
                        name: "FK_Season_Prices_Prices_PriceId",
                        column: x => x.PriceId,
                        principalTable: "Prices",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Season_Prices_Seasons_SeasonId",
                        column: x => x.SeasonId,
                        principalTable: "Seasons",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Finances",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductId = table.Column<int>(nullable: false),
                    CategoryId = table.Column<int>(nullable: false),
                    CategoriesId = table.Column<int>(nullable: true),
                    InvestorId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Finances", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Finances_Categories_CategoriesId",
                        column: x => x.CategoriesId,
                        principalTable: "Categories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Finances_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Contracts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ContractTitle = table.Column<string>(nullable: false),
                    ContractForm = table.Column<string>(nullable: false),
                    RequestStatus = table.Column<bool>(nullable: false),
                    DeliveryDate = table.Column<DateTime>(nullable: false),
                    DeleiveryWay = table.Column<string>(nullable: true),
                    Quentity = table.Column<decimal>(nullable: false),
                    WarrantyType = table.Column<string>(nullable: true),
                    SignatureDate = table.Column<DateTime>(nullable: false),
                    QuantityUnit = table.Column<string>(nullable: true),
                    AdminConfirm = table.Column<bool>(nullable: false),
                    InvestorConfirm = table.Column<bool>(nullable: false),
                    ProducerId = table.Column<string>(nullable: true),
                    InvestorId = table.Column<string>(nullable: true),
                    ProductId = table.Column<int>(nullable: true),
                    ContractRequestId = table.Column<int>(nullable: false),
                    RepresentativeId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contracts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Contracts_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Installments",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Discriminator = table.Column<string>(nullable: false),
                    Invoice = table.Column<string>(nullable: true),
                    DeliveryDate = table.Column<DateTime>(nullable: false),
                    Total = table.Column<decimal>(nullable: false),
                    ProducerConfirm = table.Column<bool>(nullable: false),
                    ContractId = table.Column<int>(nullable: true),
                    Amount = table.Column<int>(nullable: true),
                    Currency = table.Column<string>(nullable: true),
                    InstallmentReviewId = table.Column<int>(nullable: true),
                    UnitPrice = table.Column<string>(nullable: true),
                    Quantity = table.Column<decimal>(nullable: true),
                    Substance = table.Column<string>(nullable: true),
                    ActiveSubstance = table.Column<string>(nullable: true),
                    Unit = table.Column<string>(nullable: true),
                    Model = table.Column<string>(nullable: true),
                    Type = table.Column<string>(nullable: true),
                    Category = table.Column<string>(nullable: true),
                    Company = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Installments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Installments_Contracts_ContractId",
                        column: x => x.ContractId,
                        principalTable: "Contracts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                schema: "security",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    UserName = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(maxLength: 256, nullable: true),
                    Email = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(nullable: false),
                    PasswordHash = table.Column<string>(nullable: true),
                    SecurityStamp = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(nullable: false),
                    TwoFactorEnabled = table.Column<bool>(nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(nullable: true),
                    LockoutEnabled = table.Column<bool>(nullable: false),
                    AccessFailedCount = table.Column<int>(nullable: false),
                    FullName = table.Column<string>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    Discriminator = table.Column<string>(nullable: false),
                    Company = table.Column<string>(nullable: true),
                    ProfilePicture = table.Column<byte[]>(nullable: true),
                    ContractId = table.Column<int>(nullable: true),
                    InvestorId = table.Column<string>(nullable: true),
                    ProducerId = table.Column<string>(nullable: true),
                    CommercialType = table.Column<string>(nullable: true),
                    CommercialRecordNo = table.Column<int>(nullable: true),
                    CommercialRecordUrl = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    JobTitle = table.Column<string>(nullable: true),
                    LocationId = table.Column<int>(nullable: true),
                    Production_Input = table.Column<string>(nullable: true),
                    NumberOfMember = table.Column<int>(nullable: true),
                    LandArea = table.Column<decimal>(nullable: true),
                    ProductionCapacity = table.Column<decimal>(nullable: true),
                    FarmingType = table.Column<string>(nullable: true),
                    Producer_LocationId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Users_Contracts_ContractId",
                        column: x => x.ContractId,
                        principalTable: "Contracts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Users_Users_InvestorId",
                        column: x => x.InvestorId,
                        principalSchema: "security",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Users_Users_ProducerId",
                        column: x => x.ProducerId,
                        principalSchema: "security",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Users_Locations_LocationId",
                        column: x => x.LocationId,
                        principalTable: "Locations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Users_Locations_Producer_LocationId",
                        column: x => x.Producer_LocationId,
                        principalTable: "Locations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ContractRequests",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StateAdmin = table.Column<bool>(nullable: false),
                    ConfirmUser = table.Column<bool>(nullable: false),
                    InvestmrntCardname = table.Column<string>(nullable: true),
                    ProductId = table.Column<int>(nullable: false),
                    InvestorId = table.Column<string>(nullable: true),
                    ProducerId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContractRequests", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ContractRequests_Users_InvestorId",
                        column: x => x.InvestorId,
                        principalSchema: "security",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ContractRequests_Users_ProducerId",
                        column: x => x.ProducerId,
                        principalSchema: "security",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ContractRequests_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "InstallmentReviews",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Text = table.Column<string>(nullable: false),
                    RatingScore = table.Column<string>(maxLength: 10, nullable: false),
                    Date = table.Column<DateTime>(nullable: false),
                    InstallmentType = table.Column<bool>(nullable: false),
                    InstallmentId = table.Column<int>(nullable: false),
                    ProducerId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InstallmentReviews", x => x.Id);
                    table.ForeignKey(
                        name: "FK_InstallmentReviews_Installments_InstallmentId",
                        column: x => x.InstallmentId,
                        principalTable: "Installments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_InstallmentReviews_Users_ProducerId",
                        column: x => x.ProducerId,
                        principalSchema: "security",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "InvestmentCards",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(nullable: false),
                    ImageUrl = table.Column<string>(nullable: true),
                    StartDate = table.Column<DateTime>(nullable: false),
                    ExpirationDate = table.Column<DateTime>(nullable: false),
                    Attachment = table.Column<string>(nullable: false),
                    ProducerId = table.Column<string>(nullable: true),
                    ProductId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InvestmentCards", x => x.Id);
                    table.ForeignKey(
                        name: "FK_InvestmentCards_Users_ProducerId",
                        column: x => x.ProducerId,
                        principalSchema: "security",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_InvestmentCards_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "NotiUsers",
                columns: table => new
                {
                    NotiId = table.Column<int>(nullable: false),
                    UserId = table.Column<string>(nullable: false),
                    Id = table.Column<int>(nullable: false),
                    ReadState = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NotiUsers", x => new { x.NotiId, x.UserId });
                    table.ForeignKey(
                        name: "FK_NotiUsers_Notifications_NotiId",
                        column: x => x.NotiId,
                        principalTable: "Notifications",
                        principalColumn: "NotiId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_NotiUsers_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "security",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Producer_Drivers",
                columns: table => new
                {
                    ProducerId = table.Column<string>(nullable: false),
                    DriverId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Producer_Drivers", x => new { x.DriverId, x.ProducerId });
                    table.ForeignKey(
                        name: "FK_Producer_Drivers_Drivers_DriverId",
                        column: x => x.DriverId,
                        principalTable: "Drivers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Producer_Drivers_Users_ProducerId",
                        column: x => x.ProducerId,
                        principalSchema: "security",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Product_Investors",
                columns: table => new
                {
                    ProductId = table.Column<int>(nullable: false),
                    InvestorId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Product_Investors", x => new { x.ProductId, x.InvestorId });
                    table.ForeignKey(
                        name: "FK_Product_Investors_Users_InvestorId",
                        column: x => x.InvestorId,
                        principalSchema: "security",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Product_Investors_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ProductionSupplies",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Substance = table.Column<string>(nullable: false),
                    Quntity = table.Column<decimal>(nullable: false),
                    UnitPrice = table.Column<decimal>(nullable: false),
                    UnitSize = table.Column<string>(nullable: false),
                    ActiveSubstance = table.Column<string>(nullable: false),
                    Company = table.Column<string>(nullable: false),
                    Total = table.Column<decimal>(nullable: false),
                    ProducerId = table.Column<string>(nullable: true),
                    ContractId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductionSupplies", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProductionSupplies_Contracts_ContractId",
                        column: x => x.ContractId,
                        principalTable: "Contracts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ProductionSupplies_Users_ProducerId",
                        column: x => x.ProducerId,
                        principalSchema: "security",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Reports",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Text = table.Column<string>(nullable: false),
                    ContractId = table.Column<int>(nullable: false),
                    ProducerId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reports", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Reports_Contracts_ContractId",
                        column: x => x.ContractId,
                        principalTable: "Contracts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Reports_Users_ProducerId",
                        column: x => x.ProducerId,
                        principalSchema: "security",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Representatives",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: false),
                    Phone = table.Column<string>(nullable: false),
                    InvestorId = table.Column<string>(nullable: true),
                    ContractId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Representatives", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Representatives_Contracts_ContractId",
                        column: x => x.ContractId,
                        principalTable: "Contracts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Representatives_Users_InvestorId",
                        column: x => x.InvestorId,
                        principalSchema: "security",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "SeedInstructions",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SeedName = table.Column<string>(nullable: false),
                    Type = table.Column<string>(nullable: false),
                    Classification = table.Column<string>(nullable: false),
                    AvailablePlace = table.Column<string>(nullable: false),
                    RangeOfPurity = table.Column<string>(nullable: false),
                    UsersId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SeedInstructions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SeedInstructions_Users_UsersId",
                        column: x => x.UsersId,
                        principalSchema: "security",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Warehouses",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    InvestorId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Warehouses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Warehouses_Users_InvestorId",
                        column: x => x.InvestorId,
                        principalSchema: "security",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "UserClaims",
                schema: "security",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserClaims_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "security",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "UserLogins",
                schema: "security",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(nullable: false),
                    ProviderKey = table.Column<string>(nullable: false),
                    ProviderDisplayName = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_UserLogins_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "security",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "UserRoles",
                schema: "security",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    RoleId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_UserRoles_Roles_RoleId",
                        column: x => x.RoleId,
                        principalSchema: "security",
                        principalTable: "Roles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_UserRoles_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "security",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "UserTokens",
                schema: "security",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    LoginProvider = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_UserTokens_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "security",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Advertisments",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Text = table.Column<string>(nullable: true),
                    UrlImage = table.Column<string>(nullable: false),
                    StartDate = table.Column<DateTime>(nullable: false),
                    ExpirationDate = table.Column<DateTime>(nullable: false),
                    InvestmentCardId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Advertisments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Advertisments_InvestmentCards_InvestmentCardId",
                        column: x => x.InvestmentCardId,
                        principalTable: "InvestmentCards",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ProducerReviews",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RatingScore = table.Column<string>(nullable: false),
                    Text = table.Column<string>(nullable: false),
                    ReviewDate = table.Column<DateTime>(nullable: false),
                    RepresentativeId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProducerReviews", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProducerReviews_Representatives_RepresentativeId",
                        column: x => x.RepresentativeId,
                        principalTable: "Representatives",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ReciptStatements",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Degree = table.Column<int>(nullable: false),
                    Weight = table.Column<string>(nullable: true),
                    Category = table.Column<string>(nullable: true),
                    Quantity = table.Column<decimal>(nullable: false),
                    Unit = table.Column<string>(nullable: true),
                    ContractId = table.Column<int>(nullable: false),
                    InvestorConfirm = table.Column<bool>(nullable: false),
                    WarehouseId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReciptStatements", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ReciptStatements_Contracts_ContractId",
                        column: x => x.ContractId,
                        principalTable: "Contracts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ReciptStatements_Warehouses_WarehouseId",
                        column: x => x.WarehouseId,
                        principalTable: "Warehouses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ContractReviews",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RatingScore = table.Column<string>(nullable: true),
                    Text = table.Column<string>(nullable: false),
                    ReviewDate = table.Column<DateTime>(nullable: false),
                    ReciptStatementId = table.Column<int>(nullable: false),
                    RepresentativeId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContractReviews", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ContractReviews_ReciptStatements_ReciptStatementId",
                        column: x => x.ReciptStatementId,
                        principalTable: "ReciptStatements",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ContractReviews_Representatives_RepresentativeId",
                        column: x => x.RepresentativeId,
                        principalTable: "Representatives",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Advertisments_InvestmentCardId",
                table: "Advertisments",
                column: "InvestmentCardId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ContractRequests_InvestorId",
                table: "ContractRequests",
                column: "InvestorId");

            migrationBuilder.CreateIndex(
                name: "IX_ContractRequests_ProducerId",
                table: "ContractRequests",
                column: "ProducerId");

            migrationBuilder.CreateIndex(
                name: "IX_ContractRequests_ProductId",
                table: "ContractRequests",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_ContractReviews_ReciptStatementId",
                table: "ContractReviews",
                column: "ReciptStatementId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ContractReviews_RepresentativeId",
                table: "ContractReviews",
                column: "RepresentativeId");

            migrationBuilder.CreateIndex(
                name: "IX_Contracts_ContractRequestId",
                table: "Contracts",
                column: "ContractRequestId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Contracts_InvestorId",
                table: "Contracts",
                column: "InvestorId");

            migrationBuilder.CreateIndex(
                name: "IX_Contracts_ProducerId",
                table: "Contracts",
                column: "ProducerId");

            migrationBuilder.CreateIndex(
                name: "IX_Contracts_ProductId",
                table: "Contracts",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_Contracts_RepresentativeId",
                table: "Contracts",
                column: "RepresentativeId");

            migrationBuilder.CreateIndex(
                name: "IX_Finances_CategoriesId",
                table: "Finances",
                column: "CategoriesId");

            migrationBuilder.CreateIndex(
                name: "IX_Finances_InvestorId",
                table: "Finances",
                column: "InvestorId");

            migrationBuilder.CreateIndex(
                name: "IX_Finances_ProductId",
                table: "Finances",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_InstallmentReviews_InstallmentId",
                table: "InstallmentReviews",
                column: "InstallmentId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_InstallmentReviews_ProducerId",
                table: "InstallmentReviews",
                column: "ProducerId");

            migrationBuilder.CreateIndex(
                name: "IX_Installments_ContractId",
                table: "Installments",
                column: "ContractId");

            migrationBuilder.CreateIndex(
                name: "IX_InvestmentCards_ProducerId",
                table: "InvestmentCards",
                column: "ProducerId");

            migrationBuilder.CreateIndex(
                name: "IX_InvestmentCards_ProductId",
                table: "InvestmentCards",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_Locations_ProductId",
                table: "Locations",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_NotiUsers_UserId",
                table: "NotiUsers",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Prices_ProductId",
                table: "Prices",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_Prodcut_Seasons_SeasonId",
                table: "Prodcut_Seasons",
                column: "SeasonId");

            migrationBuilder.CreateIndex(
                name: "IX_Producer_Drivers_ProducerId",
                table: "Producer_Drivers",
                column: "ProducerId");

            migrationBuilder.CreateIndex(
                name: "IX_ProducerReviews_RepresentativeId",
                table: "ProducerReviews",
                column: "RepresentativeId");

            migrationBuilder.CreateIndex(
                name: "IX_Product_Investors_InvestorId",
                table: "Product_Investors",
                column: "InvestorId");

            migrationBuilder.CreateIndex(
                name: "IX_Product_Locations_LocationId",
                table: "Product_Locations",
                column: "LocationId");

            migrationBuilder.CreateIndex(
                name: "IX_ProductionSupplies_ContractId",
                table: "ProductionSupplies",
                column: "ContractId");

            migrationBuilder.CreateIndex(
                name: "IX_ProductionSupplies_ProducerId",
                table: "ProductionSupplies",
                column: "ProducerId");

            migrationBuilder.CreateIndex(
                name: "IX_Products_CategoriesId",
                table: "Products",
                column: "CategoriesId");

            migrationBuilder.CreateIndex(
                name: "IX_ReciptStatements_ContractId",
                table: "ReciptStatements",
                column: "ContractId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ReciptStatements_WarehouseId",
                table: "ReciptStatements",
                column: "WarehouseId");

            migrationBuilder.CreateIndex(
                name: "IX_Reports_ContractId",
                table: "Reports",
                column: "ContractId");

            migrationBuilder.CreateIndex(
                name: "IX_Reports_ProducerId",
                table: "Reports",
                column: "ProducerId");

            migrationBuilder.CreateIndex(
                name: "IX_Representatives_ContractId",
                table: "Representatives",
                column: "ContractId");

            migrationBuilder.CreateIndex(
                name: "IX_Representatives_InvestorId",
                table: "Representatives",
                column: "InvestorId");

            migrationBuilder.CreateIndex(
                name: "IX_Season_Prices_PriceId",
                table: "Season_Prices",
                column: "PriceId");

            migrationBuilder.CreateIndex(
                name: "IX_Seasons_ProductId",
                table: "Seasons",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_SeedInstructions_UsersId",
                table: "SeedInstructions",
                column: "UsersId");

            migrationBuilder.CreateIndex(
                name: "IX_Warehouses_InvestorId",
                table: "Warehouses",
                column: "InvestorId");

            migrationBuilder.CreateIndex(
                name: "IX_RoleClaims_RoleId",
                schema: "security",
                table: "RoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                schema: "security",
                table: "Roles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_UserClaims_UserId",
                schema: "security",
                table: "UserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_UserLogins_UserId",
                schema: "security",
                table: "UserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_UserRoles_RoleId",
                schema: "security",
                table: "UserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "IX_Users_ContractId",
                schema: "security",
                table: "Users",
                column: "ContractId");

            migrationBuilder.CreateIndex(
                name: "IX_Users_InvestorId",
                schema: "security",
                table: "Users",
                column: "InvestorId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                schema: "security",
                table: "Users",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                schema: "security",
                table: "Users",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Users_ProducerId",
                schema: "security",
                table: "Users",
                column: "ProducerId");

            migrationBuilder.CreateIndex(
                name: "IX_Users_LocationId",
                schema: "security",
                table: "Users",
                column: "LocationId");

            migrationBuilder.CreateIndex(
                name: "IX_Users_Producer_LocationId",
                schema: "security",
                table: "Users",
                column: "Producer_LocationId");

            migrationBuilder.AddForeignKey(
                name: "FK_Finances_Users_InvestorId",
                table: "Finances",
                column: "InvestorId",
                principalSchema: "security",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Contracts_Users_InvestorId",
                table: "Contracts",
                column: "InvestorId",
                principalSchema: "security",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Contracts_Users_ProducerId",
                table: "Contracts",
                column: "ProducerId",
                principalSchema: "security",
                principalTable: "Users",
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
                name: "FK_Contracts_ContractRequests_ContractRequestId",
                table: "Contracts",
                column: "ContractRequestId",
                principalTable: "ContractRequests",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ContractRequests_Users_InvestorId",
                table: "ContractRequests");

            migrationBuilder.DropForeignKey(
                name: "FK_ContractRequests_Users_ProducerId",
                table: "ContractRequests");

            migrationBuilder.DropForeignKey(
                name: "FK_Contracts_Users_InvestorId",
                table: "Contracts");

            migrationBuilder.DropForeignKey(
                name: "FK_Contracts_Users_ProducerId",
                table: "Contracts");

            migrationBuilder.DropForeignKey(
                name: "FK_Representatives_Users_InvestorId",
                table: "Representatives");

            migrationBuilder.DropForeignKey(
                name: "FK_ContractRequests_Products_ProductId",
                table: "ContractRequests");

            migrationBuilder.DropForeignKey(
                name: "FK_Contracts_Products_ProductId",
                table: "Contracts");

            migrationBuilder.DropForeignKey(
                name: "FK_Contracts_Representatives_RepresentativeId",
                table: "Contracts");

            migrationBuilder.DropTable(
                name: "Advertisments");

            migrationBuilder.DropTable(
                name: "ContractReviews");

            migrationBuilder.DropTable(
                name: "Finances");

            migrationBuilder.DropTable(
                name: "InstallmentReviews");

            migrationBuilder.DropTable(
                name: "NotiUsers");

            migrationBuilder.DropTable(
                name: "Prodcut_Seasons");

            migrationBuilder.DropTable(
                name: "Producer_Drivers");

            migrationBuilder.DropTable(
                name: "ProducerReviews");

            migrationBuilder.DropTable(
                name: "Product_Investors");

            migrationBuilder.DropTable(
                name: "Product_Locations");

            migrationBuilder.DropTable(
                name: "ProductionSupplies");

            migrationBuilder.DropTable(
                name: "Reports");

            migrationBuilder.DropTable(
                name: "Season_Prices");

            migrationBuilder.DropTable(
                name: "SeedInstructions");

            migrationBuilder.DropTable(
                name: "RoleClaims",
                schema: "security");

            migrationBuilder.DropTable(
                name: "UserClaims",
                schema: "security");

            migrationBuilder.DropTable(
                name: "UserLogins",
                schema: "security");

            migrationBuilder.DropTable(
                name: "UserRoles",
                schema: "security");

            migrationBuilder.DropTable(
                name: "UserTokens",
                schema: "security");

            migrationBuilder.DropTable(
                name: "InvestmentCards");

            migrationBuilder.DropTable(
                name: "ReciptStatements");

            migrationBuilder.DropTable(
                name: "Installments");

            migrationBuilder.DropTable(
                name: "Notifications");

            migrationBuilder.DropTable(
                name: "Drivers");

            migrationBuilder.DropTable(
                name: "Prices");

            migrationBuilder.DropTable(
                name: "Seasons");

            migrationBuilder.DropTable(
                name: "Roles",
                schema: "security");

            migrationBuilder.DropTable(
                name: "Warehouses");

            migrationBuilder.DropTable(
                name: "Users",
                schema: "security");

            migrationBuilder.DropTable(
                name: "Locations");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "Categories");

            migrationBuilder.DropTable(
                name: "Representatives");

            migrationBuilder.DropTable(
                name: "Contracts");

            migrationBuilder.DropTable(
                name: "ContractRequests");
        }
    }
}
