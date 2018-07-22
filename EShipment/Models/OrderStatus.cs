using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EShipment.Models
{
    public class OrderStatus
    {
      public OrderStatus()
      {
      }

    public long ID { get; set; }

      [ForeignKey("order")]
      public long Order_Id { get; set; }

      public virtual Order order { get; set; }

      public DateTime? date { get; set; }

      public string description { get; set; }
  }
}
