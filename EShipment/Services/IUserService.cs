using EShipment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EShipment.Services
{
    public interface IUserService
    {
      Task<IList<UserInfo>> GetAll();
    }
}
