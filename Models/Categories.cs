using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ContractFarming.Models
{
    public class Categories
    {
        [Key]
        public int Id { get; set; }

        
        [Required(ErrorMessage = "يرجى إدخال نوع المنتج ")]
        [RegularExpression(@"^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]*$", ErrorMessage = "يرجى إدخال حروف فقط باللغة العربية أو اللغة الإنجليزية  ")]
        public string ProductType { get; set; }
     
       public ICollection<Product> Products { get; set; }
       public ICollection<Finance> Finances { get; set; }
    }
}
