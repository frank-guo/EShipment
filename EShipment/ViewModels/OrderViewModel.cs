using EShipment.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace EShipment.ViewModels
{
    public class OrderViewModel
    {
    public long ID { get; set; }

    public string ApplicationUser_Id { get; set; }

    public string CompanyName { get; set; }

    public string Number { get; set; }

    public string Mark { get; set; }

    public string ContainerNumber { get; set; }

    public string Destination { get; set; }

    public string DischargedPort { get; set; }

    public string BLNumber { get; set; }

    public DateTime? ETD { get; set; }

    public DateTime? ETA { get; set; }

    public int? NumbOfGoods { get; set; }

    public string Weight { get; set; }

    public string Measurement { get; set; }

    public string ProductDescription { get; set; }

    private IList<OrderStatusViewModel> statuses = new List<OrderStatusViewModel>();
    public IList<OrderStatusViewModel> Statuses { get { return statuses; } set { statuses = value; } }

    public DateTime? ReceiveOrderDate { get; set; }
  }
}
