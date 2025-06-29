using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ContractFarming.Models
{
    public class Product_Location
    {

        public int ProductId { get; set; }
        public int LocationId { get; set; }
        public Product Product { get; set; }
        public Location Location { get; set; }
    }
}
