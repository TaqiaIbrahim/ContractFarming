using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ContractFarming.Models
{
    public class Financial_Installment:Installment
    {
       
        //[Required(ErrorMessage = " يرجى إدخال هذا الحقل ")]
        public double Amount { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال هذا الحقل ")]
        public string Currency { get; set; }


        public int InstallmentReviewId { get; set; }
        public InstallmentReview InstallmentReview { get; set; }




    }
}
