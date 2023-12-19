using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GradingApp.Server.Models;

/// <summary>
/// Represents a university in the database.
/// </summary>
public class UniversityModel
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
	public int Id { get; set; }

    [Required]
	public string Country { get; set; }

    [Required]
	public string Name { get; set; }

	public string Abbreviation { get; set; }
}