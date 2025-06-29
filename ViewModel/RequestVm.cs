using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContractFarming.Models;

namespace ContractFarming.ViewModel
{
    public class RequestVm
    {
        public Contract contract { get; set; }
        public List<Contract> contract1 { get; set; }
        public Producer producer { get; set; }
        public List<Producer> producer1 { get; set; }
        public Investor investor { get; set; }
        public List<Investor> investors { get; set; }
       

        
    }
}
