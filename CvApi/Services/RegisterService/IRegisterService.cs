using CvApi.Models.DTO;

namespace CvApi.Services.RegisterService
{
    public interface IRegisterService
    {
        public bool AddUser(UserRegistrationDTO userDTO);
    }
}
