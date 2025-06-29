using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ContractFarming.Models
{
    public class Season_Price
    {
        public int SeasonId { get; set; }
        public int PriceId { get; set; }
        public Season Season { get; set; }
        public Price Price { get; set; }
    }
}
