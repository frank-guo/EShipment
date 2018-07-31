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
    //ToDo: Verify user
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

      return await orderService.GetByUserId(userInfo, user.IsInRole(Constant.String.JwtClaim.Admin));
    }

    [Route("user/{userId}/order")]
    [HttpPost]
    //ToDo: Create a BaseController which contains a property of SecurityAccessVerifier to verify user
    //ToDo: Make this method a real async one.
    public async Task<IActionResult> Save([FromBody] OrderViewModel orderVM)
    {
      var user = HttpContext.User;
      var userId = user.FindFirst(ClaimTypes.NameIdentifier).Value;

      if (userId != orderVM.ApplicationUser_Id)
      {
        return BadRequest("Could not save order");
      }

      var orderId = orderService.Save(orderVM);

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

      IList<OrderStatus> orderStatuses = new List<OrderStatus>();
      foreach(OrderStatusViewModel orderStatusVM in orderVM.Statuses) {
        if (orderStatusVM.date == null && orderStatusVM.description == null)
        {
          continue;
        }
        OrderStatus orderStatus;
        if (orderStatusVM.Id == 0)
        {
          orderStatus = new OrderStatus();
        } else
        {
          orderStatus = getOrderStatus(orderStatusVM.Id, order.Statuses);
        }

        if (orderStatus == null)
        {
          continue;
        }
        orderStatus.date = orderStatusVM.date == null ? (DateTime?)null : DateTime.Parse(orderStatusVM.date);
        orderStatus.description = orderStatus.description;
        orderStatuses.Add(orderStatus);
      }
      order.Statuses = orderStatuses;

      order.Weight = orderVM.Weight;
    }

    private OrderStatus getOrderStatus(long? Id, IList<OrderStatus> orderStatuses)
    {
      if (Id == null || orderStatuses == null)
      {
        return null;
      }

      foreach(OrderStatus status in orderStatuses)
      {
        if (status.ID == Id)
        {
          return status;
        }
      }

      return null;
    }

    private Task<ApplicationUser> GetCurrentUserAsync() => _userManager.GetUserAsync(HttpContext.User);

    [Route("user/{userId}/order/{orderId}")]
    [HttpDelete]
    public async Task<IActionResult> Delete(long orderId)
    {
      bool deleted = orderService.Delete(orderId);
      if (deleted)
      {
        return Ok();
      } else
      {
        return BadRequest("Could not delete the order.");
      }
    }
  }
}
