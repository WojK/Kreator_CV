using CvApi.Models;
using CvApi.Models.DTO;

namespace CvApi.Services.CvService
{
    public interface ICvService
    {
        public Task<bool> SaveCvUserData(string email, UserCvDataDTO request);
        public Task<UserCvDataDTO> GetCvUserData(string email);
        public Task<UserProfileInfoDTO> GetUserInfo(string email);
        public Task<UserUpdateProfileInfoDTO> UpdateUserInfo(string email, UserUpdateProfileInfoDTO userProfileInfoDTO);

    }
}
