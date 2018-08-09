using EShipment.Models;
using EShipment.UnitOfWorks;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EShipment.Services
{
  public class UserService : IUserService
  {
    private readonly IUnitOfWork unitOfWork = null;
    private readonly UserManager<ApplicationUser> _userManager;

    public UserService(IUnitOfWork unitOfWork, UserManager<ApplicationUser> userManager)
    {
      this.unitOfWork = unitOfWork;
      this._userManager = userManager;
    }

    public async Task<IList<UserViewModel>> GetAll()
    {
      var users = unitOfWork.Repository<ApplicationUser>().Get();
      IList<UserViewModel> usersVM = new List<UserViewModel>();
      foreach (ApplicationUser user in await users)
      {
        var userVM = new UserViewModel();
        userVM.Id = user.Id;
        userVM.Email = user.Email;
        userVM.UserName = user.UserName;
        userVM.CompanyName = user.CompanyName;
        //ToDo: Create ApplicationRole and its controller to deal with role-related operations
        //Refer to:
        //https://stackoverflow.com/questions/51004516/net-core-2-1-identity-get-all-users-with-their-associated-roles/51005445#51005445
        //https://social.technet.microsoft.com/wiki/contents/articles/36804.asp-net-core-mvc-authentication-and-role-based-authorization-with-asp-net-core-identity.aspx#Application_Roles
        userVM.RoleNames = await _userManager.GetRolesAsync(user);
        usersVM.Add(userVM);
      }

      return usersVM;
    }

    public async Task<UserViewModel> Get(string userId)
    {
      var user = await unitOfWork.Repository<ApplicationUser>().GetByID(userId);
      var userVM = new UserViewModel();
      if (user != null)
      {
        userVM.Id = user.Id;
        userVM.Email = user.Email;
        userVM.UserName = user.UserName;
        userVM.CompanyName = user.CompanyName;
        userVM.RoleNames = await _userManager.GetRolesAsync(user);
      }

      return userVM;
    }
  }
}
