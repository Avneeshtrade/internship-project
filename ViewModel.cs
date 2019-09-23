using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyNewWebApplication.Models
{
    public class UserModel
    {
        public string name { get; set; }
        public string email { get; set; }
        public string password { get; set; }
    }
    public class LoginModel
    {
        public string username { get; set; }
        public string password { get; set; }
    }
}
