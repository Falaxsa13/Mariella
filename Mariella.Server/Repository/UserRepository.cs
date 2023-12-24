using Mariella.Server.Data;
using Mariella.Server.Repository.IRepository;
using Microsoft.AspNetCore.Identity;
using Mariella.Server.Models;
using AutoMapper;
using Mariella.Server.Models.Dtos;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;

namespace Mariella.Server.Repository;

public class UserRepository : IUserRepository
{
	private readonly ApplicationDbContext _db;
	private readonly UserManager<UserModel> _userManager;
	private readonly RoleManager<IdentityRole> _roleManager;
	private string _secretKey;
	private readonly IMapper _mapper;

	public UserRepository(
		ApplicationDbContext db,
		IConfiguration configuration,
		UserManager<UserModel> userManager,
		IMapper mapper,
		RoleManager<IdentityRole> roleManager)
	{
		_db = db;
		_userManager = userManager;
		_mapper = mapper;
		_secretKey = configuration.GetValue<string>("ApiSettings:Secret");
		_roleManager = roleManager;
	}

	public async Task<bool> IsUniqueUsername(string username)
	{
		UserModel? userModel = await _userManager.FindByNameAsync(username);
		return userModel == null;
	}

	public async Task<bool> IsUniqueEmail(string email)
	{
		UserModel? userModel = await _userManager.FindByEmailAsync(email);
		return userModel == null;
	}

	public async Task<LoginResponseDto> Login(LoginRequestDto loginRequestDto)
	{
		UserModel? userModel = await _userManager.FindByEmailAsync(loginRequestDto.Email);
		if (userModel == null) return new();

		var isValid = await _userManager.CheckPasswordAsync(userModel, loginRequestDto.Password);
		if (!isValid) return new();

		var roles = await _userManager.GetRolesAsync(userModel);
		var tokenHandler = new JwtSecurityTokenHandler();
		var key = Encoding.ASCII.GetBytes(_secretKey);

		var tokenDescriptor = new SecurityTokenDescriptor
		{
			Subject = new(new Claim[]
			{
				new(ClaimTypes.Email, userModel.Email),
				new(ClaimTypes.Role, roles.FirstOrDefault())
			}),
			Expires = DateTime.UtcNow.AddDays(7),
			SigningCredentials = new(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256)
		};

		SecurityToken token = tokenHandler.CreateToken(tokenDescriptor);

		LoginResponseDto loginResponseDto = new()
		{
			Token = tokenHandler.WriteToken(token),
			User = _mapper.Map<UserDto>(userModel)
		};

		return loginResponseDto;
	}

	public async Task<UserDto> Signup(SignupRequestDto signupRequestDto)
	{
		UserModel userModel = new()
		{
			Email = signupRequestDto.Email,
			NormalizedEmail = signupRequestDto.Email.ToLower(),
			FirstName = signupRequestDto.FirstName,
			LastName = signupRequestDto.LastName
		};

		// TODO: 

		try
		{
			
		}
		catch (Exception e)
		{
		}
	}
}