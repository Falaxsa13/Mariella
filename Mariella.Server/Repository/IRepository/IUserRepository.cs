using Mariella.Server.Models.Dtos;

namespace Mariella.Server.Repository.IRepository;

public interface IUserRepository
{
	Task<bool> IsUniqueUsername(string username);

	Task<bool> IsUniqueEmail(string email);

	Task<LoginResponseDto?> Login(LoginRequestDto loginRequestDto);

	Task<UserDto?> Signup(SignupRequestDto signupRequestDto);
}