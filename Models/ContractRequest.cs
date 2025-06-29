using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContractFarming.Models
{
    public class ContractRequest
    {
        public  int Id { get; set; }
        public bool StateAdmin { get; set; }
       
        public bool ConfirmUser { get; set; }
        public string InvestmrntCardname { get; set; }
        public int ProductId{ get; set; }
        public string InvestorId { get; set; }
        public string ProducerId { get; set; }
       

        public Product product{ get; set; }

        public Producer Producer { get; set; }

        public Investor Investor { get; set; }
     
       public Contract Contracts  { get; set; }



    }
}
