using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Mariella.Server.Models;

public class ActivityModel
{
	[Key]
	[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
	public int Id { get; set; }

	[Required]
	public required string Name { get; set; }

	public double? Grade { get; set; }

	public double? Weight { get; set; }

	[ForeignKey(nameof(GradingRubricModel))]
	public int GradingRubricId { get; set; }

	public required GradingRubricModel GradingRubric { get; set; }

	[Required]
	public bool IsTemplate { get; set; }

	[Required]
	public DateTime CreatedAt { get; set; }
}