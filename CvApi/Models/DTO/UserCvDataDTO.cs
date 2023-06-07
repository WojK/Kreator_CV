using Microsoft.EntityFrameworkCore.Query.SqlExpressions;

namespace CvApi.Models.DTO
{
    public class UserCvDataDTO
    {
        public string Color { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string Surname { get; set; } = string.Empty;
        public bool IsPhoneNumber { get; set; }
        public string PhoneNumber { get; set; } = string.Empty;
        public bool IsEmail { get; set; }
        public string Email { get; set; } = string.Empty;
        public bool IsLocation { get; set; }
        public string Location { get; set; } = string.Empty;
        public bool IsGithub { get; set; }
        public string Github { get; set; } = string.Empty;
        public bool IsLinkedin { get; set; }
        public string Linkedin { get; set; } = string.Empty;
        public string ProfileDescription { get; set; } = string.Empty;
        public string Aboutme { get; set; } = string.Empty;
        public List<ExpierienceDTO> ExperienceList { get; set; } = new List<ExpierienceDTO>();
        public List<ProjectDTO> ProjectList { get; set; } = new List<ProjectDTO> ();
        public List<SkillDTO> SkillList { get; set; } = new List<SkillDTO>();
        public List<SoftSkillDTO> SoftSkillList { get; set; } = new List<SoftSkillDTO>();
        public List<LanguageDTO> LanguageList { get; set; } = new List<LanguageDTO>();
        public string Tech { get; set; } = string.Empty;
        public List<HobbyDTO> HobbyList { get; set; } = new List<HobbyDTO>();
        public List<EducationDTO> EducationList { get; set; } = new List<EducationDTO>();
    }
}
