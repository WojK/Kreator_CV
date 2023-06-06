namespace CvApi.Models
{
    public class UserCvData
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
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
        public string Github { get; set;}
        public bool IsLinkedin { get; set; }
        public string Linkedin { get; set; }
        public string ProfileDescription { get; set; }
        public string Aboutme { get; set; }
        public List<Experience> ExperienceList { get; set; }
        public List<Project> ProjectList { get; set; }
        public List<SkillItem> SkillList { get; set; }
        public List<SoftSkillItem> SoftSkillList { get; set; }
        public List<LanguageItem> LanguageList { get; set; }
        public string Tech { get; set; }
        public List<HobbyItem> HobbyList { get; set; }
        public List<Education> EducationList { get; set; }

    }
}
