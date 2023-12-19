using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GradingApp.Server.ExternalModels;

public class CourseModel
{
	public int Id { get; set; }

	public Guid Guid { get; set; }

	public required string Name { get; set; }

	public string? Abbreviation { get; set; }
}