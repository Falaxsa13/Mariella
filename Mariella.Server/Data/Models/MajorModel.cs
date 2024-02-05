using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Mariella.Server.Data.Models;

public class MajorModel
{
	[Key]
	[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
	public int Id { get; set; }

	[Required]
	public required string Name { get; set; }

	public string? Abbreviation { get; set; }

	public Guid? PeruvianUniversitiesApiMajorGuid { get; set; }

	[Required]
	public bool IsCustom { get; set; }

	[ForeignKey(nameof(UserModel))]
	public int AuthorId { get; set; }

	public required UserModel User { get; set; }

	[Required]
	public DateTime CreatedAt { get; set; }
}