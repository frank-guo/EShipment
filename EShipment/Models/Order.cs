using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EShipment.Models
{
    public class Order
    {
      public int ID { get; set; }

      [ForeignKey("ApplicationUser")]
      public String ApplicationUser_Id { get; set; }

      public virtual ApplicationUser ApplicationUser { get; set; }

      public string firstName { get; set; }

      public string lastName { get; set; }

      public string dateOfBirth { get; set; }

      public bool verified { get; set; }
  }
}
