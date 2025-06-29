using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ContractFarming.Models
{
    public class Driver
    {
        [Key]
        public string Id { get; set; }
        [Required(ErrorMessage = "يرجى إدخال رقم البطاقة الشخصية ")]
        [RegularExpression(@"^\d{12}$", ErrorMessage = "يرجى إدخال رقم البطاقة الشخصية مكون من 12 رقم ")]
        public string IDCard { get; set; }

        [Required(ErrorMessage = "يرجى إدخال اسم السائق ")]
        [RegularExpression(@"^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]*$", ErrorMessage = "يرجى إدخال اسم السائق باللغة العربية أو اللغة الإنجليزية  ")]
        public string Name { get; set; }
        [Required(ErrorMessage = "يرجى إدخال اسم مالك السيارة ")]
        [DataType(DataType.Text)]
        [RegularExpression(@"^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]*$", ErrorMessage = "يرجى إدخال اسم مالك السيارة باللغة العربية أو اللغة الإنجليزية  ")]
        public string CarOwnerName { get; set; }
        [Required(ErrorMessage = "يرجى إدخال رقم السيارة ")]
        [Range(000000, 999999, ErrorMessage = "يرجى إدخال رقم السيارة مكون من 6 ارقام ")]
        public int CarNo { get; set; }
        [Required(ErrorMessage = "يرجى إدخال رقم الهاتف ")]
        [RegularExpression(@"^\d{9}$", ErrorMessage = "يرجى إدخال رقم التلفون مكون من 9 رقم ")]
        [DataType(DataType.PhoneNumber)]
        public string Phone { get; set; }
        [Required(ErrorMessage = "يرجى إدخال العنوان ")]
        [DataType(DataType.Text)]
        public string Address { get; set; }
        public ICollection<Producer_Driver> Producer_Drivers { get; set; }
    }
}
