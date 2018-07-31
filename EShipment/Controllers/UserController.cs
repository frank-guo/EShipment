using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using EShipment.Models;
using EShipment.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EShipment.Controllers
{
  [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
  [Produces("application/json")]
  [Route("api")]
  public class UserController : Controller
  {
    private IUserService userService;
    private IAuthorizationService _authorization;

    public UserController(IUserService userService, IAuthorizationService authorizationService)
    {
      this.userService = userService;
      this._authorization = authorizationService;
    }

    [Authorize(Policy = "adminOrRegularUser")]
    //[Authorize(Policy = "regularUser")]
    [Route("user/{userId}/users")]
    [HttpGet]
    public async Task<IList<UserInfo>> GetAll()
    {
      // The statement below can be used to do the authorization manually
      //var allowed = await _authorization.AuthorizeAsync(User, "adminUser");
      var users =  userService.GetAll();

      return await users;
    }
  }
}
