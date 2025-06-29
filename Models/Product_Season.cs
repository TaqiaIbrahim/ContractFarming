using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContractFarming.Models
{
    public class Product_Season
    {
        public double Price{ get; set; }
        public int ProductId { get; set; }
        public int Id { get; set; }
        public int SeasonId { get; set; }
        public Product Product { get; set; }
        public Season Season { get; set; }
    }
}
