namespace GradingApp.Server.ExternalModels;

public class ProfessorCoursesModel
{
	public int ProfessorId { get; set; }

	public Guid ProfessorGuid { get; set; }

	public int CourseId { get; set; }

	public Guid CourseGuid { get; set; }
}