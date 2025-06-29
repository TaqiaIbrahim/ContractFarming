using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ContractFarming.Models
{
    public class Producer_Driver
    {
      
        public string ProducerId { get; set; }
        public string DriverId { get; set; }
        public Producer Producer { get; set; }
        public Driver Driver { get; set; }

    }
}
