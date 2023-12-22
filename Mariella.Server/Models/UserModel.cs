using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Mariella.Server.Models;

/// <summary>
/// Represents a user in the database.
/// </summary>
public class UserModel
{
	[Key]
	[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
	public int Id { get; set; }

	[Required]
	public required string FirstName { get; set; }

	[Required]
	public required string LastName { get; set; }

	[Required]
	public required string Username { get; set; }

	[Required]
	public required string Email { get; set; }

	[Required]
	public required string HashedPassword { get; set; }

	[Required]
	public required string Salt { get; set; }

	[Required]
	public DateTime CreatedAt { get; set; }
}