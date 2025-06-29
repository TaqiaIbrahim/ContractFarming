using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ContractFarming.Models
{
    public class Location
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = " يرجى إدخال اسم المحافظة ")]
        [RegularExpression(@"^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]*$", ErrorMessage = "يرجى إدخال أحرف فقط باللغة العربية أو اللغة الإنجليزية  ")]
        public string Governorate{ get; set; }
        [Required(ErrorMessage = " يرجى إدخال اسم المديرية ")]
        [RegularExpression(@"^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]*$", ErrorMessage = "يرجى إدخال أحرف فقط باللغة العربية أو اللغة الإنجليزية  ")]
        public string Dicrtorate { get; set; }
        [Required(ErrorMessage = " يرجى إدخال اسم العزلة ")]
        [RegularExpression(@"^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]*$", ErrorMessage = "يرجى إدخال أحرف فقط باللغة العربية أو اللغة الإنجليزية  ")]
        public string Isolation { get; set; }
        [Required(ErrorMessage = " يرجى إدخال اسم القرية ")]
        [RegularExpression(@"^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]*$", ErrorMessage = "يرجى إدخال أحرف فقط باللغة العربية أو اللغة الإنجليزية  ")]
        public string Village { get; set; }
        
        public ICollection<ManagmentStructure> ManagmentStructures { get; set; }
        public ICollection<Producer> Producers { get; set; }
        public ICollection<Product_Location> Product_Locations { get; set; }
        //public ICollection<Product>  Products { get; set; }
    }
}
