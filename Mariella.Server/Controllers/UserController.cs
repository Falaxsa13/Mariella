using Mariella.Server.Models.Dtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Mariella.Server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
	public IActionResult Register([FromBody] SignupRequestDto signupModel)
	{
	}
}