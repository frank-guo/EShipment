using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EShipment.Controllers
{
  [Authorize]
  [Produces("application/json")]
  [Route("angularHome")]
  public class AngularHomeController : Controller
    {
    // GET: api/AngularHome
    [HttpGet]
    public RedirectResult Get()
    {
      String angularHome = "~/angularApp";
      if (Url.IsLocalUrl(angularHome))
      {
        return Redirect(angularHome);
      }

      return null;
    }
  }
}
