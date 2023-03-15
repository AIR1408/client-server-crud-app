using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;
using test_webapi.Models;

namespace test_webapi.Models
{
    public class TodoContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options)
            : base(options)
        {
        }


        public DbSet<test_webapi.Models.Subject>? Subject { get; set; }

        public DbSet<test_webapi.Models.Teacher>? Teacher { get; set; }

        public DbSet<test_webapi.Models.Grade>? Grade { get; set; }

        public DbSet<test_webapi.Models.Pupil>? Pupil { get; set; }

    }
}