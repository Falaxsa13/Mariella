using Mariella.Server.Models.Dtos;
using Mariella.Server.Repository.IRepository;
using Microsoft.AspNetCore.Mvc;
using Mariella.Server.Models;
using System.Net;

namespace Mariella.Server.Controllers;

[Route("api/UsersAuth")]
[ApiController]
public class UserController : Controller
{
	private readonly IUserRepository _userRepository;
	protected ApiResponseModel _apiResponseModel;

	public UserController(IUserRepository userRepository)
	{
		_userRepository = userRepository;
		_apiResponseModel = new();
	}

	[HttpPost("login")]
	public async Task<IActionResult> Login([FromBody] LoginRequestDto loginRequestDto)
	{
		LoginResponseDto? loginResponse = await _userRepository.Login(loginRequestDto);

		if (loginResponse == null)
		{
			_apiResponseModel.HttpStatusCode = HttpStatusCode.BadRequest;
			_apiResponseModel.IsSuccess = false;
			_apiResponseModel.ErrorMessages.Add("Email o contraseña incorrectos");
			return BadRequest(_apiResponseModel);
		}

		_apiResponseModel.HttpStatusCode = HttpStatusCode.OK;
		_apiResponseModel.IsSuccess = true;
		_apiResponseModel.Result = loginResponse;
		return Ok(_apiResponseModel);
	}

	[HttpPost("signup")]
	public async Task<IActionResult> Signup([FromBody] SignupRequestDto signupRequestDto)
	{
		var isUnique = _userRepository.IsUniqueEmail(signupRequestDto.Email);

		if (!isUnique.Result)
		{
			_apiResponseModel.HttpStatusCode = HttpStatusCode.BadRequest;
			_apiResponseModel.IsSuccess = false;
			_apiResponseModel.ErrorMessages.Add("El email ya existe");
			return BadRequest(_apiResponseModel);
		}

		UserDto? user = await _userRepository.Signup(signupRequestDto);

		if (user == null)
		{
			_apiResponseModel.HttpStatusCode = HttpStatusCode.BadRequest;
			_apiResponseModel.IsSuccess = false;
			_apiResponseModel.ErrorMessages.Add("Error al registrar");
			return BadRequest(_apiResponseModel);
		}

		return Ok(_apiResponseModel);
	}
}