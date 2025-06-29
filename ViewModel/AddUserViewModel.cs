using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using ContractFarming.Models;

namespace ContractFarming.ViewModel
{
    public class AddUserViewModel
    {

        public string Id { get; set; }
        [Required(ErrorMessage = "يرجى إدخال الاسم")]

        [Display(Name = "الاسم")]
        public string Name { get; set; }

        [Display(Name = "اسم المستخدم")]
        public string UserName { get; set; }

        //[Required(ErrorMessage = "يرجى إدخال انوع المستخدم")]

        //[Display(Name = "نوع المستخدم")]
        //public string Type { get; set; }

      
        [EmailAddress]
        [Required(ErrorMessage = "يرجى إدخال البريد الالكتروني")]
        public string Email { get; set; }
        public bool IsActive { get; set; }
        [Required(ErrorMessage = "يرجى إدخال كلمة المرور")]
        //[StringLength(100, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }
        public string Discriminator { get; set; }
        public string Type { get; set; }
        public string PhoneNumber { get; set; }
        public int ContractId { get; set; }
        public List<Contract>Contracts { get; set; }
        public List<CheckBoxViewModel> Roles { get; set; }
        public Contract Contract { get; internal set; }
    }
}
