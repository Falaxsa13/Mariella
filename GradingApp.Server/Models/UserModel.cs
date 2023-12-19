using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GradingApp.Server.Models;

/// <summary>
/// Represents a user in the database.
/// </summary>
public class UserModel
{
	[Key]
	[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
	public int Id { get; set; }

	[Required]
	public string FirstName { get; set; }

	[Required]
	public string LastName { get; set; }

	[Required]
	public string Email { get; set; }

	[Required]
	public DateTime CreatedAt { get; set; }
}