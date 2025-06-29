using ContractFarming.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContractFarming.ViewModel
{
    public class Price_Season_Product
    {
        public IEnumerable<Product> Products { get; set; }
        public IEnumerable<Price> Prices { get; set; }
        public IEnumerable<Season> Seasons { get; set; }
        public Price Price { get; set; }
        public Product  Product{ get; set; }
        public Season Season { get; set; }
        public string ProductName { get; set; }
        public decimal price { get; set; }
        public string SeasonName{ get; set; }
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int PriceId { get; set; }
        public int SeasonId { get; set; }
    }
}
