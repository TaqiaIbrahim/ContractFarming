using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ContractFarming.Models
{
    public class Installment
    {
        [Key]
        public int Id { get; set; }
        //public int ContactId { get; set; }
        public string Discriminator { get; set; }

        //[Required(ErrorMessage = " يرجى إدخال هذا الحقل ")]
        public string Invoice { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال تاريخ الإستلام ")]
        public DateTime DeliveryDate { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال هذا الحقل ")]
        public decimal Total { get; set; }
        public int ProducerConfirm { get; set; }
        public int ContractId { get; set; }
        public Contract Contract { get; set; }
        //public int InstallmentReviewId { get; set; }
        public InstallmentReview InstallmentReview { get; set; }

    }
}
