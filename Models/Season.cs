using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ContractFarming.Models
{
    public class Season
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = " يرجى إدخال اسم الموسم ")]
        [RegularExpression(@"^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]*$", ErrorMessage = "يرجى إدخال أحرف فقط باللغة العربية أو اللغة الإنجليزية  ")]
        public string SeasonName { get; set; }
        [Required(ErrorMessage = " يرجى إدخال تاريخ بدء الموسم ")]
        public DateTime Start_date { get; set; }
        [Required(ErrorMessage = " يرجى إدخال تاريخ إنتهاء الموسم ")]
        public DateTime End_date { get; set; }
        public ICollection<Product_Season>  Product_Seasons { get; set; }
        public ICollection<Season_Price> Season_Prices { get; set; }
      
    }
}
