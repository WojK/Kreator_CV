using Microsoft.EntityFrameworkCore.Query.SqlExpressions;

namespace CvApi.Models.DTO
{
    public class UserCvDataDTO
    {
        public string Color { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public bool IsPhoneNumber { get; set; }
        public string PhoneNumber { get; set; }
        public bool IsEmail { get; set; }
        public string Email { get; set; }
        public bool IsLocation { get; set; }
        public string Location { get; set; }
        public bool IsGithub { get; set; }
        public string Github { get; set; }
        public bool IsLinkedin { get; set; }
        public string Linkedin { get; set; }
        public string ProfileDescription { get; set; }
        public string Aboutme { get; set; }
        public List<ExpierienceDTO> ExperienceList { get; set; }
        public List<ProjectDTO> ProjectList { get; set; }
        public List<SkillDTO> SkillList { get; set; }
        public List<SoftSkillDTO> SoftSkillList { get; set; }
        public List<LanguageDTO> LanguageList { get; set; }
        public string Tech { get; set; }
        public List<HobbyDTO> HobbyList { get; set; }
        public List<EducationDTO> EducationList { get; set; }
    }
}
