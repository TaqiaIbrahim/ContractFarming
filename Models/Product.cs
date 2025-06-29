using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;


namespace ContractFarming.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = " يرجى إدخال اسم المنتَج   ")]
        [RegularExpression(@"^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]*$", ErrorMessage = "يرجى إدخال أحرف فقط باللغة العربية أو اللغة الإنجليزية  ")]
        public string Name { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال هذا الحقل ")]
        [RegularExpression(@"^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]*$", ErrorMessage = "يرجى إدخال أحرف فقط باللغة العربية أو اللغة الإنجليزية  ")]
        public string Climate { get; set; }
        ////[Required(ErrorMessage = " يرجى إدخال تاريخ الحصاد ")]
        public DateTime HarvestDate { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال هذا الحقل ")]
        [Range(1,12,ErrorMessage ="يرجى إدخال ارقام")]
        public string GrowingTime { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال نوع المنتًج ")]
        [RegularExpression(@"^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]*$", ErrorMessage = "يرجى إدخال أحرف فقط باللغة العربية أو اللغة الإنجليزية  ")]
        public string ProductType { get; set; }
        //[Required(ErrorMessage = " يرجى اختيار ملف ")]
        public string ImageUrl { get; set; }
        ////[Required(ErrorMessage = " يرجى اختيار ملف ")]
        public string Feasibility { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال هذا الحقل ")]
        public string ArgiculturalLandMarks { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال جودة المنتج ")]
        public string ProductQuality { get; set; }
        //[Required(ErrorMessage = " يرجى اختيار ملف ")]
        public string StrategicPlan { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال هذا الحقل ")]
        public double CostsPerKilo { get; set; }
        //[Required(ErrorMessage = " يرجى اختيار ملف ")]
        public string FoodValueChain { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال التصنيف ")]
        [RegularExpression(@"^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]*$", ErrorMessage = "يرجى إدخال أحرف فقط باللغة العربية أو اللغة الإنجليزية  ")]
        public string Classification { get; set; }
        public Categories Categories { get; set; }
        public int CategoryId { get; set; }
        public ICollection<Price> Prices { get; set; }
        public ICollection<InvestmentCard> InvestmentCards { get; set; }
        public ICollection<Product_Investor> Product_Investors { get; set; }
        public ICollection<Product_Location> Product_Locations { get; set; }
        public ICollection<Product_Season> Product_Seasons { get; set; } = new HashSet<Product_Season>();
        //public Contract Contract { get; set; }
        //public ICollection<Investor> Investors { get; set; }
        public ICollection<Location> Locations { get; set; }
        public ICollection<Season> Seasons { get; set; }

        
        public ICollection<Finance> Finances { get; set; }
        public ICollection<ContractRequest> contractRequests { get; set; }

    }
}
