using CvApi.Models;
using Microsoft.EntityFrameworkCore;

namespace CvApi.Data
{
    public class DataContext : DbContext
    {


        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<UserCvData> UserCvData { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        modelBuilder.Entity<User>()
            .HasOne(a => a.UserCvData)
            .WithOne(b => b.User)
            .HasForeignKey<UserCvData>(b => b.UserId)
            .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
