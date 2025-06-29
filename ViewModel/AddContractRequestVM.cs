using ContractFarming.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContractFarming.ViewModel
{
    public class AddContractRequestVM
    {
        public IEnumerable<Contract> Contracts { get; set; }
        public IEnumerable<Investor> Investors { get; set; }
        public IEnumerable<Producer> Producers { get; set; }
        public IEnumerable<Location> locations { get; set; }
       
    }
}
