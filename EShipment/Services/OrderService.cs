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

    public IList<OrderViewModel> GetByUserId (UserInfo userInfo)
    {
      IEnumerable<Order> orders = unitOfWork.Repository<Order>().Get(order => order.ApplicationUser_Id == userInfo.Id);

      IList<OrderViewModel> vOrders = new List<OrderViewModel>();
      foreach(Order order in orders)
      {
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
        vOrders.Add(vOrder);
      }

      return vOrders;
    }

    public long Save(Order order)
    {
      if (order == null)
      {
        return 0;
      }

      long retId = order.ID;

      if (order.ID != 0)
      {
        unitOfWork.Repository<Order>().Update(order);
      } else
      {
        EntityEntry<Order> retOrder = unitOfWork.Repository<Order>().InsertAndReturn(order);
        retId = retOrder.Entity.ID;
      }

      return retId;
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
