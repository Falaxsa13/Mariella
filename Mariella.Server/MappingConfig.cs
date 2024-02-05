using AutoMapper;
using Mariella.Server.Data.Models;
using Mariella.Server.Models.Dtos;

namespace Mariella.Server;

public class MappingConfig : Profile
{
	public MappingConfig()
	{
		CreateMap<UserDto, UserModel>().ReverseMap();
	}
}