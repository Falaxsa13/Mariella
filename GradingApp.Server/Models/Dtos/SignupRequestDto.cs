namespace GradingApp.Server.Models.Dtos;

public class SignupRequestDto
{
	public string FirstName { get; set; }

	public string LastName { get; set; }

	public string Email { get; set; }

	public string Password { get; set; }
}