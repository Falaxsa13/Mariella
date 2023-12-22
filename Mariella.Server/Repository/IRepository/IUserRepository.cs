namespace Mariella.Server.Repository.IRepository;

public interface IUserRepository
{
	bool IsUniqueUser(string email);
}