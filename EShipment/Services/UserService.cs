using EShipment.Models;
using EShipment.UnitOfWorks;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EShipment.Services
{
  public class UserService : IUserService
  {
    private readonly IUnitOfWork unitOfWork = null;

    public UserService(IUnitOfWork unitOfWork)
    {
      this.unitOfWork = unitOfWork;
    }

    public async Task<IList<UserInfo>> GetAll()
    {
      var users = unitOfWork.Repository<ApplicationUser>().Get();
      IList<UserInfo> usersVM = new List<UserInfo>();
      foreach (ApplicationUser user in await users)
      {
        var userVM = new UserInfo();
        userVM.Id = user.Id;
        userVM.Email = user.Email;
        userVM.UserName = user.UserName;
        userVM.Companyname = user.CompanyName;
        usersVM.Add(userVM);
      }

      return usersVM;
    }
  }
}
