using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ContractFarming.Models
{
    public class InKindInstallment:Installment
    {
        //[Required(ErrorMessage = " يرجى إدخال سعر الوحدة ")]
        public string UnitPrice { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال الكمية ")]

        public decimal Quantity { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال المادة ")]
        public string Substance { get; set; }
        //[Required(ErrorMessage = "   يرجى إدخال المادةالفعالة  ")]
        public string ActiveSubstance { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال الوحدة ")]
        public string Unit { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال الموديل ")]
        public string Model { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال هذا الحقل ")]
        public string Type { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال هذا الحقل ")]
        public string Category { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال اسم الشركة  ")]
        public string Company { get; set; }

        //public int InstallmentReviewId { get; set; }
        //public InstallmentReview InstallmentReview { get; set; }



    }
}
