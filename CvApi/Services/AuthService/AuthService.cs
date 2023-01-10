using CvApi.Data;
using CvApi.Models;
using CvApi.Models.DTO;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace CvApi.Services.AuthService
{
    public class AuthService : IAuthService
    {

        private readonly DataContext _context;
        private readonly IConfiguration _config;

        public AuthService(DataContext context, IConfiguration config)
        {
            _context = context;
            _config = config;
        }

        const int keySize = 64;
        const int iterations = 350000;
        HashAlgorithmName hashAlgorithm = HashAlgorithmName.SHA512;

        public string LoginUser(UserLoginDTO userLogin)
        {
            User? user = _context.Users.FirstOrDefault(u => u.Email == userLogin.Email);
            if (user == null)
            {
                return null;
            }

            byte[] passwordHashBytes = Convert.FromBase64String(user.PasswordHash);
            byte[] passwordSaltBytes = Convert.FromBase64String(user.PasswordSalt);

            if (!VerifyPassword(userLogin.Password, passwordHashBytes, passwordSaltBytes))
            {
                return null;
            }
            var token = CreateJWT(user);

            return token;
        }

        private string CreateJWT(User user)
        {
            var claims = new List<Claim>()
                    {
                    new Claim(ClaimTypes.Email, $"{user.Email}"),
                    };


            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetValue<string>("Authentication:JwtKey")));
            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(Convert.ToDouble(_config.GetValue<string>("Authentication:JwtExpiresDays")));
            var token = new JwtSecurityToken(
                _config.GetValue<string>("Authentication:Issuer"),
                _config.GetValue<string>("Authentication:Audience"),
                claims,
                expires: expires,
                signingCredentials: cred
                );
            var tokenHandler = new JwtSecurityTokenHandler();
            string tokenString = tokenHandler.WriteToken(token);

            return tokenString;
        }

        private bool VerifyPassword(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            var hashToCompare = Rfc2898DeriveBytes.Pbkdf2(password, passwordSalt, iterations, hashAlgorithm, keySize);
            return hashToCompare.SequenceEqual(passwordHash);
        }
    }
}
