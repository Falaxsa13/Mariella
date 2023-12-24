using System.Net;

namespace Mariella.Server.Models;

public class ApiResponseModel
{
	public HttpStatusCode HttpStatusCode { get; set; }
	public bool IsSuccess { get; set; }
	public List<string> ErrorMessages { get; set; }
	public object Result { get; set; }

	public ApiResponseModel()
	{
		ErrorMessages = [];
	}
}