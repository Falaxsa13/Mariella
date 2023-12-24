using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Mariella.Server.Data.Models;

public class UserMajorsModel
{
	[Key]
	[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
	public int Id { get; set; }

	[ForeignKey(nameof(UserModel))]
	public int UserId { get; set; }

	public required UserModel User { get; set; }

	[ForeignKey(nameof(MajorModel))]
	public int MajorId { get; set; }

	public required MajorModel Major { get; set; }
}