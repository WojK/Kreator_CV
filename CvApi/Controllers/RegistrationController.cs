using CvApi.Models.DTO;
using CvApi.Services.RegisterService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CvApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private readonly IRegisterService _registerService;

        public RegistrationController(IRegisterService registerService)
        {
            _registerService = registerService;
        }

        [HttpPost("/register")]
        public IActionResult RegisterUser(UserRegistrationDTO userDTO)
        {
            bool isAdded = _registerService.AddUser(userDTO);
            if (isAdded)
            {
                return Ok();
            }
            return BadRequest();

        }
    }
}
