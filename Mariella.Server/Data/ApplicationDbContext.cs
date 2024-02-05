using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Mariella.Server.Data.Models;

namespace Mariella.Server.Data;

public class ApplicationDbContext : IdentityDbContext
{
	public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
	{
	}

	public DbSet<AcademicTermModel> AcademicTerms { get; set; }

	public DbSet<ActivityModel> Activities { get; set; }

	public DbSet<CourseModel> Courses { get; set; }

	public DbSet<GradingRubricModel> GradingRubrics { get; set; }

	public DbSet<MajorModel> Majors { get; set; }

	public DbSet<ProfessorCoursesModel> ProfessorCourses { get; set; }

	public DbSet<ProfessorModel> Professors { get; set; }

	public DbSet<UniversityModel> Universities { get; set; }

	public DbSet<UserMajorsModel> UserMajors { get; set; }

	public DbSet<UserUniversitiesModel> UserUniversities { get; set; }

	protected override void OnModelCreating(ModelBuilder modelBuilder)
	{
		base.OnModelCreating(modelBuilder);

		modelBuilder.Entity<IdentityRole>().HasData(
			new IdentityRole { Name = "admin", NormalizedName = "ADMIN" },
			new IdentityRole { Name = "user", NormalizedName = "USER" }
		);
	}
}