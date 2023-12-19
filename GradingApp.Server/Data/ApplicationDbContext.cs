using Microsoft.EntityFrameworkCore;

namespace GradingApp.Server.Data;

public class ApplicationDbContext : DbContext
{
	public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
	{

	}
}