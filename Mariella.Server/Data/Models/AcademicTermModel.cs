using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Mariella.Server.Data.Models;

public class AcademicTermModel
{
	[Key]
	[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
	public int Id { get; set; }

	[Required]
	public required string Name { get; set; }

	public Guid? PeruvianUniversitiesApiAcademicTermGuid { get; set; }

	[Required]
	public DateTime CreatedAt { get; set; }
}