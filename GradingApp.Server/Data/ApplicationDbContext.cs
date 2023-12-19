using GradingApp.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace GradingApp.Server.Data;

public class ApplicationDbContext : DbContext
{
	public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
	{
	}

	public DbSet<UserModel> Users { get; set; }

	public DbSet<MajorModel> Majors { get; set; }

	public DbSet<CourseModel> Courses { get; set; }

	public DbSet<UniversityModel> Universities { get; set; }

	public DbSet<UserMajorsModel> UserMajors { get; set; }

	public DbSet<UserUniversitiesModel> UserUniversities { get; set; }
}