using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EShipment.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace EShipment.Controllers
{
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Produces("application/json")]
    [Route("api/auth")]
    public class AuthAPIController : Controller
    {
      private readonly SignInManager<ApplicationUser> _signInManager;
      private readonly ILogger _logger;

      public AuthAPIController(
              SignInManager<ApplicationUser> signInManager,
              ILogger<AccountController> logger)
      {
        _signInManager = signInManager;
        _logger = logger;
      }

    [Route("logout")]
    [HttpPost]
      public async Task<IActionResult> Logout()
      {
        await _signInManager.SignOutAsync();
        _logger.LogInformation("User logged out.");
        return RedirectToAction(nameof(HomeController.Index), "Home");
      }
    }
}
