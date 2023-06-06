using CvApi.Models.DTO;

namespace CvApi.Services.CvService
{
    public interface ICvService
    {
        public Task<bool> SaveCvUserData(string email, UserCvDataDTO request);
        public Task<UserCvDataDTO> GetCvUserData(string email);
    }
}
