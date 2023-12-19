using GradingApp.Server.Models;

namespace GradingApp.Server.Data;

public class UserMajors
{
	public int Id { get; set; }

	public int UserId { get; set; }

	public UserModel User { get; set; }
}