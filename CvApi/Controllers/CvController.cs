using CvApi.Data;
using CvApi.Models.DTO;
using CvApi.Services.CvService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace CvApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CvController : ControllerBase
    {
        private readonly IHttpContextAccessor _contextAccessor;
        private readonly ICvService _cvService;
        public CvController(IHttpContextAccessor contextAccessor,ICvService cvService)
        {
            _contextAccessor = contextAccessor;
            _cvService = cvService;
        }

        [HttpGet]
        [Authorize]
        public async Task<ActionResult<UserCvDataDTO>> GetUserCvData()
        {
            var email = _contextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Email);
            var result = await _cvService.GetCvUserData(email);
            return Ok(result);
        }


        [HttpPost]
        [Authorize]
        public async Task<ActionResult<bool>> SaveUserCvData(UserCvDataDTO request)
        {
            var email = _contextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Email);
            var result = await _cvService.SaveCvUserData(email, request);
            return Ok(result);
        }


        [HttpGet("profile-info")]
        [Authorize]
        public async Task<ActionResult<bool>> GetUserInfo()
        {
            var email = _contextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Email);
            var result = await _cvService.GetUserInfo(email);
            return Ok(result);
        }

        [HttpPost("profile-update-info")]
        [Authorize]
        public async Task<ActionResult<bool>> UpdatetUserInfo(UserUpdateProfileInfoDTO userProfileInfoDTO)
        {
            var email = _contextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Email);
            var result = await _cvService.UpdateUserInfo(email, userProfileInfoDTO);
            if(result == null)
            {
                return NotFound("Something went wrong!");
            }
            return Ok(result);
        }
    }
}
