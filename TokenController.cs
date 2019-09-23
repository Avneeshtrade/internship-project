using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MyNewWebApplication.Models;
using System.Data.SqlClient;
using Npgsql;

namespace MyNewWebApplication.Controllers
{
    [Route("api/token")]
    public class TokenController : Controller
    {


        private IConfiguration _config;

        public TokenController(IConfiguration config)
        {
            _config = config;
        }
        [AllowAnonymous]
        [HttpPost]
        public string CreateToken([FromBody]LoginModel login)
        { 
            string response = null;
            var user = Authenticate(login);

            if (user != null)
            {
                var tokenString = BuildToken(user);
                response = tokenString;
            }

            return response;
        }

        //private bool Unauthorized()
        //{
        //    return false;

        //}

        private string BuildToken(UserModel user)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Issuer"],
              expires: DateTime.Now.AddMinutes(30),
              signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
        private UserModel Authenticate(LoginModel login)
        {
            UserModel user = null;
            string connetionString;
            connetionString = "Server=localhost;Port=5432;Database=MyApplication;User ID=postgres;Password=9200163022@";
            NpgsqlConnection con = new NpgsqlConnection(connetionString);
            con.Open();
            NpgsqlCommand com;
            NpgsqlDataReader data;
            String sql;
            //string[] output;
            sql = "select * from users where name='" + login.username + "' and password='" + login.password + "';";
            com = new NpgsqlCommand(sql, con);
            data = com.ExecuteReader();
            while (data.Read())
            {
               
                user = new UserModel
                {
                    name = data.GetString(0),
                    email = data.GetString(2),
                    password = data.GetString(1)

                };
                


            }
            return user;
        }





    }
}
