using EShipment.Models;
using EShipment.Repositories;
using EShipment.UnitOfWorks;
using EShipment.ViewModels;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EShipment.Services
{
  public class OrderService : IOrderService
  {
    private const long NOTHING_SAVE = 0;
    private const long INVALID_ID = 0;
    private readonly IUnitOfWork unitOfWork = null;

    public OrderService(IUnitOfWork unitOfWork)
    {
      this.unitOfWork = unitOfWork;
    }

    public void Update(Order order)
    {
      var id = order.ID;
      unitOfWork.Repository<Order>().Delete(id);
    }

    public Order GetById(long id)
    {
      var order = unitOfWork.Repository<Order>().GetByID(id);
      
      return order;
    }

    public async Task<IList<OrderViewModel>> GetByUserId(UserInfo userInfo, bool isAdmin)
    {
      IEnumerable<Order> orders;
      if (!isAdmin) {
        orders = await unitOfWork.Repository<Order>().Get(order => order.ApplicationUser_Id == userInfo.Id);
      } else {
        orders = await unitOfWork.Repository<Order>().Get();
      }

      IList<OrderViewModel> vOrders = new List<OrderViewModel>();
      foreach(Order order in orders)
      {
        //IEnumerable<OrderStatus> orderStatuses = unitOfWork.Repository<OrderStatus>().Get(orderstatus => orderstatus.Order_Id == order.ID);
        OrderViewModel vOrder = new OrderViewModel();
        vOrder.ID = order.ID;
        vOrder.ApplicationUser_Id = order.ApplicationUser_Id;
        vOrder.CompanyName = userInfo.Companyname;
        vOrder.Number = order.Number;
        vOrder.Mark = order.Mark;
        vOrder.ContainerNumber = order.ContainerNumber;
        vOrder.Destination = order.Destination;
        vOrder.DischargedPort = order.DischargedPort;
        vOrder.BLNumber = order.BLNumber;
        vOrder.ETD = order.ETD;
        vOrder.ETD = order.ETA;
        vOrder.NumbOfGoods = order.NumbOfGoods;
        vOrder.Weight = order.Weight;
        vOrder.Measurement = order.Measurement;
        vOrder.ProductDescription = order.ProductDescription;
        vOrder.ReceiveOrderDate = order.ReceiveOrderDate;

        if (order.Statuses != null)
        {
          IList<OrderStatusViewModel> vOrderStatuses = new List<OrderStatusViewModel>();
          foreach (OrderStatus status in order.Statuses) {
            var vOrderStatus = new OrderStatusViewModel
            {
              Id = status.ID,
              date = status.date.ToString(),
              description = status.description
            };
            vOrderStatuses.Add(vOrderStatus);
          }
          vOrder.Statuses = vOrderStatuses;
        }

        vOrders.Add(vOrder);
      }

      return vOrders;
    }

    public long Save(OrderViewModel orderVM)
    {
      if (orderVM == null)
      {
        return NOTHING_SAVE;
      }

      long orderId = orderVM.ID;
      Order order;
      if (orderId != INVALID_ID)
      {
        order = GetById(orderVM.ID);
      }
      else
      {
        order = new Order();
      }

      if (order == null)
      {
        return NOTHING_SAVE;
      }

      setOrder(order, orderVM);

      long retId = order.ID;

      if (order.ID != INVALID_ID)
      {
        unitOfWork.Repository<Order>().Update(order);
      } else
      {
        EntityEntry<Order> retOrder = unitOfWork.Repository<Order>().InsertAndReturn(order);
        retId = retOrder.Entity.ID;
      }

      return retId;
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

      var newOrderStatuses = new List<OrderStatus>();
      foreach (OrderStatusViewModel orderStatusVM in orderVM.Statuses)
      {
        if (orderStatusVM.date == null && orderStatusVM.description == null)
        {
          continue;
        }
        OrderStatus orderStatus;
        if (orderStatusVM.Id == 0)
        {
          orderStatus = new OrderStatus();
        }
        else
        {
          orderStatus = getOrderStatus(orderStatusVM.Id, order.Statuses);
        }

        orderStatus.date = orderStatusVM.date == null || orderStatusVM.date.Equals("") ? (DateTime?)null : DateTime.Parse(orderStatusVM.date);
        orderStatus.description = orderStatusVM.description;
        newOrderStatuses.Add(orderStatus);
      }

      var statuses = order.Statuses;
      if (statuses != null && statuses.GetType() == typeof(List<OrderStatus>))
      {
        order.Statuses.Clear();
        ((List<OrderStatus>)statuses).AddRange(newOrderStatuses);
      }
      
      order.Weight = orderVM.Weight;
    }

    private OrderStatus getOrderStatus(long Id, IList<OrderStatus> orderStatuses)
    {
      var newStatus = new OrderStatus();
      if (Id == 0 || orderStatuses == null)
      {
        return newStatus;
      }

      for(int i = orderStatuses.Count - 1; i>=0; i--)
      {
        var status = orderStatuses[i];
        if (status.ID == Id)
        {
          return status;
        }
      }

      return newStatus;
    }

    public bool Delete(long orderId)
    {
      if (orderId > 0)
      {
        unitOfWork.Repository<Order>().Delete(orderId);
        return true;       
      }

      return false;
    }
  }
}
