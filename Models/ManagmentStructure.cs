using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ContractFarming.Models
{
    public class ManagmentStructure : ApplicationUser
    {
        
        //[Required(ErrorMessage = " يرجى إدخال هذا الحقل ")]
        public string JobTitle { get; set; }

        public Location Location { get; set; }
      
    }
}
