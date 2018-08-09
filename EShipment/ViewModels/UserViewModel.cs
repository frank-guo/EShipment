using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EShipment.Models
{
  public class UserViewModel
  {
    public string Id { get; set; }
    public string Email { get; set; }
    public string UserName { get; set; }
    public string CompanyName { get; set; }
    public IList<String> RoleNames { get; set; } = new List<String>();

    public UserViewModel()
    {
    }

    public UserViewModel(string id, string email, string userName, string companyName)
    {
      Id = id;
      Email = email;
      UserName = userName;
      CompanyName = companyName;
    }
  }
}
