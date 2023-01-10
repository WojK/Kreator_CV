namespace CvApi.Models.DTO
{
    public class UserLoginDTO
    {
        //[RegularExpression(@"^[a-zA-Z0-9_.]*$", ErrorMessage = "Allowed only leters, numbers and _ .")]
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
}
