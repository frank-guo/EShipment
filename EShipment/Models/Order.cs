using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EShipment.Models
{
    public class Order
    {
      public long ID { get; set; }

      [ForeignKey("ApplicationUser")]
      public String ApplicationUser_Id { get; set; }

      public virtual ApplicationUser ApplicationUser { get; set; }

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

      public List<OrderStatus> Statuses { get; set; }

      public DateTime? ReceiveOrderDate { get; set; }
  }
}
