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

    [Route("user/{userId}/order")]
    [HttpPost]
    public async Task<IActionResult> Save([FromBody] OrderViewModel orderVM)
    {
      var user = HttpContext.User;
      var userId = user.FindFirst(ClaimTypes.NameIdentifier).Value;

      if (userId != orderVM.ApplicationUser_Id)
      {
        return BadRequest("Could not save order");
      }

      long orderId = orderVM.ID;
      Order order;
      if ( orderId != 0)
      {
         order = orderService.GetById(orderVM.ID);
      } else
      {
        order = new Order();
      }

      setOrder(order, orderVM);
      orderId = orderService.Save(order);

      return Ok(orderId);
    }

    private void setOrder(Order order, OrderViewModel orderVM)
    {
      order.ApplicationUser_Id = orderVM.ApplicationUser_Id;
      order.BLNumber = orderVM.BLNumber;
      order.ContainerNumber = orderVM.ContainerNumber;
      order.ContainerNumber = orderVM.ContainerNumber;
      order.Destination = orderVM.Destination;
      order.DischargedPort = orderVM.DischargedPort;
      order.ETA = orderVM.ETA;
      order.ETD = orderVM.ETD;
      order.Mark = orderVM.Mark;
      order.Measurement = orderVM.Measurement;
      order.Number = orderVM.Number;
      order.NumbOfGoods = orderVM.NumbOfGoods;
      order.ProductDescription = orderVM.ProductDescription;
      order.ReceiveOrderDate = orderVM.ReceiveOrderDate;
      order.Statuses = orderVM.statuses;
      order.Weight = orderVM.Weight;
    }

    private Task<ApplicationUser> GetCurrentUserAsync() => _userManager.GetUserAsync(HttpContext.User);
  }
}
