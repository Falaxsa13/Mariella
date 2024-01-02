using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Mariella.Server.Data.Models;

public class GradingRubricModel
{
	[Key]
	[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
	public int Id { get; set; }

	[ForeignKey(nameof(CourseModel))]
	public int CourseId { get; set; }

	public required CourseModel Course { get; set; }

	[ForeignKey(nameof(UserModel))]
	public int UserId { get; set; }

	public required UserModel User { get; set; }

	[ForeignKey(nameof(AcademicTermModel))]
	public int AcademicTermId { get; set; }

	public required AcademicTermModel AcademicTerm { get; set; }

	[Required]
	public bool IsTemplate { get; set; }

	[Required]
	public DateTime ModificatedAt { get; set; }

	[Required]
	public DateTime CreatedAt { get; set; }
}