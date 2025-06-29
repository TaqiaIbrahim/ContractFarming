using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContractFarming.Models;

namespace ContractFarming.ViewModel
{
    public class ProductView
    {

        public IEnumerable<Product> products { get; set; }

        public IEnumerable<Location> locations { get; set; }

    }
}
