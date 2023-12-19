using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GradingApp.Server.Models;

public class CourseModel
{
	[Key]
	[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
	public int Id { get; set; }

	[Required]
	public required string Name { get; set; }

	public string? Abbreviation { get; set; }

	public Guid? PeruvianUniversitiesApiCourseGuid { get; set; }

	[Required]
	public bool IsCustom { get; set; }

	[ForeignKey(nameof(MajorModel))]
	public int MajorId { get; set; }

	public required MajorModel Major { get; set; }

	[ForeignKey(nameof(UserModel))]
	public int AuthorId { get; set; }

	public required UserModel User { get; set; }

	[Required]
	public DateTime CreatedAt { get; set; }
}