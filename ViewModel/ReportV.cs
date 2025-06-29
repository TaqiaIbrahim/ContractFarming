using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContractFarming.Models;

namespace ContractFarming.ViewModel
{
    public class ReportV
    {
        public IEnumerable<Contract> Contract { get; set; }
       
        public IEnumerable< Producer> producer { get; set; }
       
        public  IEnumerable<Report>  report { get; set; }
       

    }
}
