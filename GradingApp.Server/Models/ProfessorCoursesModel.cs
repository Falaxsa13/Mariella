using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GradingApp.Server.Models;

public class ProfessorCoursesModel
{
	[Key]
	[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
	public int Id { get; set; }

	[ForeignKey(nameof(ProfessorModel))]
	public int ProfessorId { get; set; }

	public required ProfessorModel Professor { get; set; }

	[ForeignKey(nameof(CourseModel))]
	public int CourseId { get; set; }

	public required CourseModel Course { get; set; }
}