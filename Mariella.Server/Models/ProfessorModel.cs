using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Mariella.Server.Models;

public class ProfessorModel
{
	[Key]
	[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
	public int Id { get; set; }

	[Required]
	public required string FullName { get; set; }

	public string? Abbreviation { get; set; }

	public Guid? PeruvianUniversitiesApiProfessorGuid { get; set; }

	[Required]
	public bool IsCustom { get; set; }

	[Required]
	public DateTime CreatedAt { get; set; }
}