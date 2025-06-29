using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContractFarming.Models;

namespace ContractFarming.ViewModel
{
    public class InvestmentCardVM
    {
        public IEnumerable<ApplicationUser> users { get; set; }
        public IEnumerable<Product> products { get; set; }
        public IEnumerable<Producer> Producers { get; set; }
        public IEnumerable<Contract> Contracts { get; set; }
    }
}
