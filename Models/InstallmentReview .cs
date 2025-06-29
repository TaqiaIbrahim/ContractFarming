using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ContractFarming.Models
{
    public class InstallmentReview 
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = " يرجى إدخال نص التقييم ")]
        public string Text { get; set; }
        [Required(ErrorMessage = " يرجى إدخال درجة التقييم ")]
        [MaxLength(10)]
        public string RatingScore { get; set; }

        [Required(ErrorMessage = " يرجى إدخال تاريخ التقييم ")]
        public DateTime Date { get; set; }
        public bool InstallmentType { get; set; }

        public int InstallmentId { get; set; }
        public Installment Installment { get; set; }

        public string ProducerId { get; set; }
        public Producer Producer { get; set; }









    }
}
