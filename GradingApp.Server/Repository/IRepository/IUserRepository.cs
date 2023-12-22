namespace GradingApp.Server.Repository.IRepository;

public interface IUserRepository
{
	bool IsUniqueUser(string email);
}