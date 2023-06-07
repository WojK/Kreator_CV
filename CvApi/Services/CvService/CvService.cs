using AutoMapper;
using CvApi.Data;
using CvApi.Models;
using CvApi.Models.DTO;
using Microsoft.EntityFrameworkCore;

namespace CvApi.Services.CvService
{
    public class CvService : ICvService
    {
        private readonly DataContext _dataContext;
        private readonly IMapper _mapper;
        public CvService(DataContext dataContext,IMapper mapper) {
            _dataContext = dataContext;
            _mapper = mapper;
        }

        public async Task<bool> SaveCvUserData(string email, UserCvDataDTO request)
        {
            var user = await _dataContext.Users.Include(u => u.UserCvData)
                .ThenInclude(x => x.EducationList)
                .Include(u => u.UserCvData)
                .ThenInclude(x => x.ExperienceList)
                .Include(u => u.UserCvData)
                .ThenInclude(x => x.SkillList)
                .Include(u => u.UserCvData)
                .ThenInclude(x => x.SoftSkillList)
                .Include(u => u.UserCvData)
                .ThenInclude(x => x.ProjectList)
                .Include(u => u.UserCvData)
                .ThenInclude(x => x.LanguageList)
                .Include(u => u.UserCvData)
                .ThenInclude(x => x.HobbyList)
            .FirstOrDefaultAsync(x => x.Email == email);
            if(user.UserCvData != null)
            {
                _dataContext.UserCvData.Remove(user.UserCvData);                
                await _dataContext.SaveChangesAsync();
            }
            var cvData = new UserCvData
            {
                UserId= user.Id,
                Color = request.Color,
                Name= request.Name,
                Surname= request.Surname,
                IsPhoneNumber = request.IsPhoneNumber,
                PhoneNumber= request.PhoneNumber,
                IsEmail = request.IsEmail,
                Email = request.Email,
                IsLocation = request.IsLocation,
                Location = request.Location,
                IsGithub = request.IsGithub,
                Github = request.Github,
                IsLinkedin = request.IsLinkedin,
                Linkedin = request.Linkedin,
                ProfileDescription = request.ProfileDescription,
                Aboutme = request.Aboutme,
                ExperienceList = request.ExperienceList
                    .Select(e => new Experience {
                        CompanyName = e.CompanyName,
                        CompanyCity = e.CompanyCity,
                        ExperienceFrom = e.ExperienceFrom,
                        ExperienceTo = e.ExperienceTo,
                        ExperienceDesc = e.ExperienceDesc,
                        JobDescription = e.JobDescription,
                    }).ToList(),
               ProjectList = request.ProjectList
                   .Select(e => new Project
                   {
                        ProjectName = e.ProjectName,
                        ProjectLink = e.ProjectLink,
                        ProjectDescription = e.ProjectDescription,
                    }).ToList(),
               SkillList = request.SkillList.Select(s => new SkillItem { Skill = s.Skill}).ToList(),
               SoftSkillList = request.SoftSkillList.Select(s => new SoftSkillItem { SoftSkill = s.SoftSkill }).ToList(),
               Tech = request.Tech,
               LanguageList = request.LanguageList.Select(l => new LanguageItem { Language = l.Language}).ToList(),
               HobbyList = request.HobbyList.Select(h => new HobbyItem { Hobby = h.Hobby}).ToList(),
               EducationList = request.EducationList.Select(e => new Education
                   {
                       SchoolName = e.SchoolName,
                       SchoolCity = e.SchoolCity,
                       SchoolStartYear = e.SchoolStartYear,
                       SchoolFinishYear = e.SchoolFinishYear,
                       SchoolFaculty = e.SchoolFaculty,
                       SchoolSubject = e.SchoolSubject,
                       SchoolSpecialization = e.SchoolSpecialization,
                       SchoolDesc = e.SchoolDesc
                   }).ToList()
            };
            user.UserCvData = cvData;
            await _dataContext.SaveChangesAsync();
            return true;
        }

        public async Task<UserCvDataDTO> GetCvUserData(string email)
        {
            var user = await _dataContext.Users.Include(u => u.UserCvData)
                .ThenInclude(x => x.EducationList)
                .Include(u => u.UserCvData)
                .ThenInclude(x => x.ExperienceList)
                .Include(u => u.UserCvData)
                .ThenInclude(x => x.SkillList)
                .Include(u => u.UserCvData)
                .ThenInclude(x => x.SoftSkillList)
                .Include(u => u.UserCvData)
                .ThenInclude(x => x.ProjectList)
                .Include(u => u.UserCvData)
                .ThenInclude(x => x.LanguageList)
                .Include(u => u.UserCvData)
                .ThenInclude(x => x.HobbyList)
            .FirstOrDefaultAsync(x => x.Email == email);

            //var educations = user.UserCvData.EducationList.Select(e => _mapper.Map<EducationDTO>(e)).ToList();
            if(user.UserCvData != null)
            {
                var result = new UserCvDataDTO
                {
                    Color = user.UserCvData.Color,
                    Name = user.UserCvData.Name,
                    Surname = user.UserCvData.Surname,
                    IsPhoneNumber = user.UserCvData.IsPhoneNumber,
                    PhoneNumber = user.UserCvData.PhoneNumber,
                    IsEmail = user.UserCvData.IsEmail,
                    Email = user.UserCvData.Email,
                    IsLocation = user.UserCvData.IsLocation,
                    Location = user.UserCvData.Location,
                    IsGithub = user.UserCvData.IsGithub,
                    Github = user.UserCvData.Github,
                    IsLinkedin = user.UserCvData.IsLinkedin,
                    Linkedin = user.UserCvData.Linkedin,
                    ProfileDescription = user.UserCvData.ProfileDescription,
                    Aboutme = user.UserCvData.Aboutme,
                    ExperienceList = user.UserCvData.ExperienceList.Select(e => _mapper.Map<ExpierienceDTO>(e)).ToList(),
                    ProjectList = user.UserCvData.ProjectList.Select(e => _mapper.Map<ProjectDTO>(e)).ToList(),
                    SkillList = user.UserCvData.SkillList.Select(e => _mapper.Map<SkillDTO>(e)).ToList(),
                    SoftSkillList = user.UserCvData.SoftSkillList.Select(e => _mapper.Map<SoftSkillDTO>(e)).ToList(),
                    Tech = user.UserCvData.Tech,
                    LanguageList = user.UserCvData.LanguageList.Select(e => _mapper.Map<LanguageDTO>(e)).ToList(),
                    HobbyList = user.UserCvData.HobbyList.Select(e => _mapper.Map<HobbyDTO>(e)).ToList(),
                    EducationList = user.UserCvData.EducationList.Select(e => _mapper.Map<EducationDTO>(e)).ToList(),
                };
                return result;
            }

            return new UserCvDataDTO();
        }
        }
}
