using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ContractFarming.Models
{
    public class Producer : ApplicationUser
    {
        //[Required(ErrorMessage = " يرجى إدخال مدخلات الإنتاج ")]
        public string Production_Input { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال عددالاعضاء ")]
        public int NumberOfMember { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال مساحة الاراضي الزراعية ")]
        public decimal LandArea { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال القدرة الإنتاجية ")]
        public decimal ProductionCapacity { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال نوع الزراعة ")]
        public string FarmingType { get; set; }
        public Location Location { get; set; }
        public ICollection<Report> Reports { get; set; }
        public ICollection<Producer_Driver> Producer_Drivers { get; set; }
        public ICollection<ProductionSupply> ProductionSupplies { get; set; }
        public ICollection<Contract> Contracts { get; set; }
        public ICollection<InstallmentReview> InstallmentReviews { get; set; }
        public ICollection<ApplicationUser> Users { get; set; }

    }
}
