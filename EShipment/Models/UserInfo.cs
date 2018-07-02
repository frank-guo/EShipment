using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EShipment.Models
{
    public class UserInfo
    {
      public string Id { get; set; }
      public string Email { get; set; }
      public string UserName { get; set; }
      public string Companyname { get; set; }

      public UserInfo()
      {
      }

      public UserInfo(string id, string email, string userName, string companyname)
      {
        Id = id;
        Email = email;
        UserName = userName;
        Companyname = companyname;
      }
  }
}
