using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EShipment
{
  public static class Constant
  {
    public static class String
    {
      public static class JwtClaimIdentifier
      {
          public const string Role = "role";
      }

      public static class JwtClaim
      {
        public const string Admin = "admin";
        public const string Manager = "manager";
        public const string Regular = "regular";
      }
    }
  }
}
