using ContractFarming.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContractFarming.ViewModel
{
    public class UserViewModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string UserName{ get; set; }
        public string Email { get; set; }
        //public string Discriminator { get; set; }
        public bool IsActive { get; set; }
        public string PhoneNumber { get; set; }
        public string  Discriminator { get; set; }
        public Contract Contracts { get; set; }
      
        public IEnumerable<string> Roles { get; set; }

    }
}
