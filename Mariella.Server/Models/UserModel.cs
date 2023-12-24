using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace Mariella.Server.Models;

/// <summary>
/// Represents a user in the database.
/// </summary>
public class UserModel : IdentityUser
{
	[Required]
	public required string FirstName { get; set; }

	[Required]
	public required string LastName { get; set; }

	[Required]
	public DateTime CreatedAt { get; set; }
}