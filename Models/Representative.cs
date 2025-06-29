using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ContractFarming.Models
{
    public class Representative:ApplicationUser
    {
        [Key]
        //public int Id { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال الاسم ")]
        //[RegularExpression(@"^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]*$", ErrorMessage = "يرجى إدخال أحرف فقط باللغة العربية أو اللغة الإنجليزية  ")]
        //public string Name { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال رقم الهاتف ")]
        //public string Phone { get; set; }
        //public string InvestorId { get; set; }
        //public Investor Investor { get; set; }
        public ICollection<ContractReview> ContractReviews { get; set; }
        public ICollection<ProducerReview> ProducerReviews { get; set; }
        public ICollection<Contract> Contracts { get; set; }
        //public int ContractId { get; set; }
        //public Contract Contract { get; set; }
        public ICollection<ApplicationUser> Users { get; set; }
    }

}
