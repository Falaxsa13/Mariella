namespace GradingApp.Server.Models;

public class UserMajors
{
	public int Id { get; set; }

	public int UserId { get; set; }

	public UserModel User { get; set; }
}