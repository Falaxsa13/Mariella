using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GradingApp.Server.Models;

public class UniversityModel
{
	[Key]
	[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
	public int Id { get; set; }

	[Required]
	public required string Name { get; set; }

	[Required]
	public required string Country { get; set; }

	public string? Abbreviation { get; set; }

	public Guid? PeruvianUniversitiesApiUniversityGuid { get; set; }

	[Required]
	public bool IsCustom { get; set; }

	[ForeignKey(nameof(UserModel))]
	public int AuthorId { get; set; }

	public required UserModel User { get; set; }

	[Required]
	public DateTime CreatedAt { get; set; }
}