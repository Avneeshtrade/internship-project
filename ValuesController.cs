using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyNewWebApplication.Models;
using Npgsql;

namespace MyNewWebApplication.Controllers
{
    [Route("api/values/")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        [AllowAnonymous]
        [HttpPost]
        public bool Post([FromBody] UserModel user)
            {


            string connetionString;
            connetionString = "Server=localhost;Port=5432;Database=MyApplication;User ID=postgres;Password=9200163022@";
            NpgsqlConnection con = new NpgsqlConnection(connetionString);
            con.Open();
            NpgsqlCommand com;
            NpgsqlDataReader data;
            String sql1;
            sql1 = "INSERT INTO public.users( name  ,  password  ,  email  ) VALUES('" + user.name + "','" + user.password + "','" + user.email + "');";
            bool response = false;
            //string[] output;
            //sql = "select * from users where email='" + user.email + "'";
            com = new NpgsqlCommand(sql1, con);
            data = com.ExecuteReader();
            int x = data.RecordsAffected;   
            if(x != 0)
            {


                //    obj = new NpgsqlCommand(sql1,con);
                //   data1 = obj.ExecuteReader();

                response = true;

            }
            
            con.Close();
            return response;

        }


    }
}
