using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ContractFarming.Models
{
    public class Product_Investor
    {
        
        public int ProductId { get; set; }
        public string InvestorId { get; set; }
        public Product Product { get; set; }
        public Investor Investor { get; set; }
    }
}
