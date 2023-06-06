using AutoMapper;
using CvApi.Models;
using CvApi.Models.DTO;

namespace CvApi.Mapper
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile() {
            CreateMap< Education, EducationDTO>();
            CreateMap<Experience, ExpierienceDTO>();
            CreateMap<HobbyItem, HobbyDTO>();
            CreateMap<LanguageItem, LanguageDTO>();
            CreateMap<Project, ProjectDTO>();
            CreateMap<SkillItem, SkillDTO>();
            CreateMap<SoftSkillItem, SoftSkillDTO>();
            CreateMap<UserCvData, UserCvDataDTO>();
        }
    }
}
