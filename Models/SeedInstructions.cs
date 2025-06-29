using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ContractFarming.Models
{
    public class SeedInstructions
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = " يرجى إدخال اسم البذرة ")]
        [RegularExpression(@"^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]*$", ErrorMessage = "يرجى إدخال أحرف فقط باللغة العربية أو اللغة الإنجليزية  ")]
        public string SeedName { get; set; }
        [Required(ErrorMessage = " يرجى إدخال نوع البذرة ")]
        [RegularExpression(@"^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]*$", ErrorMessage = "يرجى إدخال أحرف فقط باللغة العربية أو اللغة الإنجليزية  ")]
        public string Type { get; set; }
        [Required(ErrorMessage = " يرجى إدخال التصنيف ")]
        [RegularExpression(@"^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]*$", ErrorMessage = "يرجى إدخال أحرف فقط باللغة العربية أو اللغة الإنجليزية  ")]
        public string Classification { get; set; }
        [Required(ErrorMessage = "يرجى إدخال اماكن توافرها ")]
        [RegularExpression(@"^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]*$", ErrorMessage = "يرجى إدخال أحرف فقط باللغة العربية أو اللغة الإنجليزية  ")]
        public string AvailablePlace { get; set; }
        [Required(ErrorMessage = " يرجى إدخال مدى النقاوة ")]
        public string RangeOfPurity { get; set; }
        public ApplicationUser Users{ get; set; }

    }
}
