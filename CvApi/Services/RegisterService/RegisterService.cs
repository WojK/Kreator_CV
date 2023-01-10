using System.Security.Cryptography;
using System.Text;
using CvApi.Data;
using CvApi.Models;
using CvApi.Models.DTO;

namespace CvApi.Services.RegisterService
{
    public class RegisterService : IRegisterService
    {

        private readonly DataContext _context;

        public RegisterService(DataContext context)
        {
            _context = context;
        }

        const int keySize = 64;
        const int iterations = 350000;
        HashAlgorithmName hashAlgorithm = HashAlgorithmName.SHA512;

        public bool AddUser(UserRegistrationDTO userDTO)
        {
            if (_context.Users.FirstOrDefault(u => u.Email == userDTO.Email) != null)
            {
                return false;
            }

            User newUser = new User()
            {
                Name = userDTO.Name,
                Surname = userDTO.Surname,
                Email = userDTO.Email,
            };

            HashPasword(userDTO.Password, out byte[] passwordHash, out byte[] passwordSalt);
            newUser.PasswordHash = Convert.ToBase64String(passwordHash);
            newUser.PasswordSalt = Convert.ToBase64String(passwordSalt);

            _context.Users.Add(newUser);
            _context.SaveChangesAsync();

            return true;
        }

        private void HashPasword(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            passwordSalt = RandomNumberGenerator.GetBytes(keySize);
            passwordHash = Rfc2898DeriveBytes.Pbkdf2(
                Encoding.UTF8.GetBytes(password),
                passwordSalt,
                iterations,
                hashAlgorithm,
                keySize);
        }

    }
}
