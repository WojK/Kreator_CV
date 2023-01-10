using CvApi.Models.DTO;

namespace CvApi.Services.AuthService
{
    public interface IAuthService
    {
        public string LoginUser(UserLoginDTO userLogin);
    }
}
