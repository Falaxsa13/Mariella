namespace Mariella.Server.ExternalModels;

public class MajorModel
{
	public int Id { get; set; }

	public Guid Guid { get; set; }

	public required string Name { get; set; }

	public string? Abbreviation { get; set; }
}