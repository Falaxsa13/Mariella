namespace Mariella.Server.ExternalModels;

public class AcademicTermModel
{
	public int Id { get; set; }

	public Guid Guid { get; set; }

	public required string Name { get; set; }
}