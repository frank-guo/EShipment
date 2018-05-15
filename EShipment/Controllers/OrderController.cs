using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using EShipment.Models;
using EShipment.Services;
using EShipment.ViewModels;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace EShipment.Controllers
{
  [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
  [Produces("application/json")]
  [Route("api")]
  public class OrderController : Controller
  {
    private IOrderService orderService;
    private readonly UserManager<ApplicationUser> _userManager;

    public OrderController(IOrderService orderService, UserManager<ApplicationUser> userManager)
    {
      this.orderService = orderService;
      this._userManager = userManager;
    }

    [Route("user/{userId}/orders")]
    [HttpGet]
    public async Task<IList<OrderViewModel>> Get(string userId)
    {
      var user = HttpContext.User;
      var userInfo = new UserInfo(
        user.FindFirst(ClaimTypes.NameIdentifier).Value,
        //By default the JWT authentication handler in .NET will map the JwtRegisteredClaimNames.Email claim of a JWT access token
        //to the System.Security.Claims.ClaimTypes.Email claim type
        user.FindFirst(ClaimTypes.Email).Value,
        user.FindFirst(ClaimTypes.Name).Value,
        user.FindFirst("companyName").Value
        );

      return orderService.GetByUserId(userInfo);
    }

    private Task<ApplicationUser> GetCurrentUserAsync() => _userManager.GetUserAsync(HttpContext.User);
  }
}
