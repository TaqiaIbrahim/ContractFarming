using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ContractFarming.Models
{
    public class ProducerReview
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = " يرجى إدخال درجة التقييم ")]
        public string RatingScore { get; set; }
        [Required(ErrorMessage = " يرجى إدخال نص التقييم ")]
        public string Text { get; set; }
        [Required(ErrorMessage = " يرجى إدخال تاريخ التقييم ")]
        public DateTime ReviewDate { get; set; }
       
        public Representative  Representative { get; set; }
        

    }
}
