using ContractFarming.Models;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContractFarming.ViewModel
{
    public class FormViewDataModels
    {
  
        public IEnumerable<Contract> Contracts { get; set; }
        public IEnumerable<InvestmentCard> InvestmentCards { get; set; }
        public IEnumerable<Product> Products{ get; set; }
        public IEnumerable<Producer> Producers{ get; set; }
        public IEnumerable<Location> Locations { get; set; }
        public IEnumerable<Season> Seasons { get; set; }
        public IEnumerable<Investor> Investors { get; set; }
        public IEnumerable<Installment> Installments{ get; set; }
        public IEnumerable<Categories>  Categories { get; set; }
    }
}