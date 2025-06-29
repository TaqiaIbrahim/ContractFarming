using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;


namespace ContractFarming.Models
{
    public class Investor :ApplicationUser
    {
      
        //[Required(ErrorMessage = " يرجى إدخال نوع التجارة  ")]
        public string CommercialType { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال اسم الشركة ")]
        //public string Company { get; set; }

        //[Required(ErrorMessage = " يرجى إدخال رقم السجل التجاري ")]
        public int CommercialRecordNo { get; set; }
        //[Required(ErrorMessage = " يرجى اختيار ملف ")]
        public string CommercialRecordUrl { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال العنوان ")]
        public string Address { get; set; }
        public ICollection<Representative> Representatives { get; set; }
        public ICollection<Warehouse> Warehouses { get; set; }
        public ICollection<Contract> Contracts { get; set; }
        public ICollection<Product_Investor> Product_Investors { get; set; }
        //public ICollection<Product> Products { get; set; }
        public ICollection<ApplicationUser> Users { get; set; }

    }
}
