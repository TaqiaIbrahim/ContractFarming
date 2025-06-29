using System;
using System.Collections.Generic;
using System.Text;
using ContractFarming.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace ContractFarming.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<ApplicationUser>().ToTable("Users", "security");
            modelBuilder.Entity<IdentityRole>().ToTable("Roles", "security");
            modelBuilder.Entity<IdentityUserRole<string>>().ToTable("UserRoles", "security");
            modelBuilder.Entity<IdentityUserClaim<string>>().ToTable("UserClaims", "security");
            modelBuilder.Entity<IdentityUserLogin<string>>().ToTable("UserLogins", "security");
            modelBuilder.Entity<IdentityRoleClaim<string>>().ToTable("RoleClaims", "security");
            modelBuilder.Entity<IdentityUserToken<string>>().ToTable("UserTokens", "security");

            modelBuilder.Entity<Producer_Driver>()
               .HasKey(t => new { t.DriverId, t.ProducerId });
            modelBuilder.Entity<Producer_Driver>()
                .HasOne(p => p.Producer).WithMany(p => p.Producer_Drivers).HasForeignKey(p => p.ProducerId);
            modelBuilder.Entity<Producer_Driver>()
                .HasOne(p => p.Driver).WithMany(p => p.Producer_Drivers).HasForeignKey(p => p.DriverId);

            modelBuilder.Entity<Product_Investor>()
              .HasKey(t => new { t.ProductId, t.InvestorId });
            modelBuilder.Entity<Product_Investor>()
                .HasOne(p => p.Product).WithMany(p => p.Product_Investors).HasForeignKey(p => p.ProductId);
            modelBuilder.Entity<Product_Investor>()
                .HasOne(p => p.Investor).WithMany(p => p.Product_Investors).HasForeignKey(p => p.InvestorId);

            modelBuilder.Entity<Product_Location>()
             .HasKey(t => new { t.ProductId, t.LocationId });
            modelBuilder.Entity<Product_Location>()
                .HasOne(p => p.Product).WithMany(p => p.Product_Locations).HasForeignKey(p => p.ProductId);
            modelBuilder.Entity<Product_Location>()
                .HasOne(p => p.Location).WithMany(p => p.Product_Locations).HasForeignKey(p => p.LocationId);

            modelBuilder.Entity<Product_Season>()
           .HasKey(t => new { t.ProductId, t.SeasonId });
            modelBuilder.Entity<Product_Season>()
                .HasOne(p => p.Product).WithMany(p => p.Product_Seasons).HasForeignKey(p => p.ProductId);
            modelBuilder.Entity<Product_Season>()
                .HasOne(p => p.Season).WithMany(p => p.Product_Seasons).HasForeignKey(p => p.SeasonId);

            modelBuilder.Entity<Season_Price>()
           .HasKey(t => new { t.SeasonId, t.PriceId });
            modelBuilder.Entity<Season_Price>()
                .HasOne(p => p.Season).WithMany(p => p.Season_Prices).HasForeignKey(p => p.SeasonId);
            modelBuilder.Entity<Season_Price>()
                .HasOne(p => p.Price).WithMany(p => p.Season_Prices).HasForeignKey(p => p.PriceId);

           

        }
        public DbSet<Advertisment> Advertisments { get; set; }
        public DbSet<Contract> Contracts { get; set; }
        public DbSet<ContractReview> ContractReviews { get; set; }
        public DbSet<Driver> Drivers { get; set; }
        public DbSet<Installment> Installments { get; set; }
        public DbSet<Financial_Installment> Financial_Installments { get; set; }
        public DbSet<InstallmentReview> InstallmentReviews { get; set; }
        public DbSet<InKindInstallment> InKindInstallments { get; set; }

        public DbSet<InvestmentCard> InvestmentCards { get; set; }
        public DbSet<Investor> Investors { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<ManagmentStructure> ManagmentStructures { get; set; }
        public DbSet<Price> Prices { get; set; }
        public DbSet<Producer> Producers { get; set; }
        public DbSet<Product_Season> Prodcut_Seasons { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Producer_Driver> Producer_Drivers { get; set; }
        public DbSet<Product_Location> Product_Locations { get; set; }
        public DbSet<Product_Investor> Product_Investors { get; set; }
        public DbSet<ProducerReview> ProducerReviews { get; set; }
        public DbSet<ReciptStatement> ReciptStatements { get; set; }
        public DbSet<Report> Reports { get; set; }
        public DbSet<Representative> Representatives { get; set; }
        public DbSet<Season> Seasons { get; set; }
        public DbSet<Season_Price> Season_Prices { get; set; }
        public DbSet<SeedInstructions> SeedInstructions { get; set; }
        public DbSet<Warehouse> Warehouses { get; set; }
        public DbSet<Finance> Finances { get; set; }
        public DbSet<Categories> Categories  { get; set; }
        public DbSet<ProductionSupply> ProductionSupplies { get; set; }
        public DbSet<ContractRequest> ContractRequests { get; set; }
    

    }
}
