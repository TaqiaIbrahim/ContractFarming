using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContractFarming.Models;

namespace ContractFarming.ViewModel
{
    public class FinanceVm
    {

    
        public IEnumerable<Finance> finances { get; set; }
         
        public IEnumerable<Product> products { get;set; }

        public IEnumerable<Categories> Category1 { get; set; }
       
    }
}
