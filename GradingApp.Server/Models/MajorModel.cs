using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GradingApp.Server.Models;

///  <summary>
///  Represents a major in a university.
/// </summary>
public class MajorModel
{
	[Key]
	[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
	public int Id { get; set; }

	[Required]
	public string Name { get; set; }

	public string Abbreviation { get; set; }

	[ForeignKey(nameof(UniversityModel))]
	public int UniversityId { get; set; }

	public UniversityModel University { get; set; }
}