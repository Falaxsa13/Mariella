namespace GradingApp.Server.ExternalModels;

public class UniversityModel
{
	public int Id { get; set; }

	public Guid Guid { get; set; }

	public required string Name { get; set; }

	public string? Abbreviation { get; set; }
}