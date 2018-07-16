using EShipment.Models;
using System;
using System.Collections.Generic;
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

    public float? Weight { get; set; }

    public float? Measurement { get; set; }

    public string ProductDescription { get; set; }

    public IList<OrderStatusViewModel> statuses { get; set; }

    public DateTime? ReceiveOrderDate { get; set; }
  }
}
