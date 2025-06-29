using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ContractFarming.Models
{
    public class ReciptStatement
    {
        [Key]
        public int Id { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال هذا الحقل ")]
        public int Degree { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال هذا الحقل ")]
        public string Weight { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال هذا الحقل ")]
        public string Category { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال هذا الحقل ")]
        public decimal Quantity { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال هذا الحقل ")]
        public string Unit { get; set; }
        public int ContractId { get; set; }
        public bool InvestorConfirm { get; set; }

        public Warehouse Warehouse { get; set; }
        public Contract Contract { get; set; }
        public ContractReview ContractReview { get; set; }

    }
    
}
