using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContractFarming.Models
{
    public class Finance
    {
        public int Id { get; set; }

       
        public int ProductId { get; set; }
        public int CategoryId { get; set; }
        public Investor investor { get; set; }
        public Product product { get; set; }
        public Categories Categories { get; set; }


        public string InvestorId { get; set; }

    }
}
