using EShipment.Models;
using EShipment.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EShipment.Services
{
  public interface IOrderService
  {
    void Update(Order order);
    Order GetById(long id);
    IList<OrderViewModel> GetByUserId(string id);
  }
}
