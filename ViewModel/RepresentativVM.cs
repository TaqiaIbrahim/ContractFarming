using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContractFarming.Models;

namespace ContractFarming.ViewModel
{
    public class RepresentativVM
    {
       public IEnumerable<Representative> representatives { get; set; }
      
       public IEnumerable<Contract>Contract{ get; set; }
    }
}
