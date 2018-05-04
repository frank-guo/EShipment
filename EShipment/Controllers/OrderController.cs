using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EShipment.Services;
using EShipment.ViewModels;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EShipment.Controllers
{
  [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
  [Produces("application/json")]
  [Route("api/Order")]
  public class OrderController : Controller
  {
    private IOrderService orderService;

    public OrderController(IOrderService orderService)
    {
      this.orderService = orderService;
    }

    [Route("{userId}")]
    [HttpGet]
    public IList<OrderViewModel> Get(string userId)
    {
      return orderService.GetByUserId(userId);
    }
  }
}
