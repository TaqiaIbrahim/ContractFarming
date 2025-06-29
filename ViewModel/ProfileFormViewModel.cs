using ContractFarming.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ContractFarming.ViewModel
{
    public class ProfileFormViewModel
    {
        public string Id { get; set; }
        [Required(ErrorMessage = "يرجى إدخال الاسم")]

        [Display(Name = "الاسم")]
        public string Name { get; set; }

        [Display(Name = "اسم المستخدم")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "يرجى إدخال انوع المستخدم")]

        [Display(Name = "نوع المستخدم")]
        public string Type { get; set; }

        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }
        public bool IsActive { get; set; }
        public string Discriminator { get; set; }
        public List<Contract> Contracts { get; set; }



        public int ContractId { get; set; }
        public string PhoneNumber { get; set; }

    }
}
