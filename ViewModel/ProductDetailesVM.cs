using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContractFarming.Models;

namespace ContractFarming.ViewModel
{
    public class ProductDetailesVM
    {

        public List<Product> Products;  
        public List<Investor> Investors;
        public List<Location> locations;
        public int ProductId;
        public int InvestorId;
        public int LocationId;
     
    }
}
