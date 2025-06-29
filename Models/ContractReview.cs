using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ContractFarming.Models
{
    public class ContractReview
    {
        [Key]
        public int Id { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال درجة التقييم ")]
        
        public string RatingScore { get; set; }
        [Required(ErrorMessage = " يرجى إدخال نص التقييم ")]
        public string Text { get; set; }
        [Required(ErrorMessage = "يرجى إدخال تاريخ التقييم ")]
        public DateTime ReviewDate { get; set; }
        public int ReciptStatementId { get; set; }
        public Representative  Representative { get; set; }
        public ReciptStatement ReciptStatement { get; set; }

    }
}
