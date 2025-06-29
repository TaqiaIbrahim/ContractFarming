using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ContractFarming.Models
{
    //مستلزمات الانتاج
    public class ProductionSupply
    {
        [Key]
        public int Id { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال هذا الحقل ")]
        //public string Text { get; set; }
        [Required(ErrorMessage = " يرجى إدخال المادة ")]
        public string Substance { get; set; }
        [Required(ErrorMessage = " يرجى إدخال الكمية ")]
        public decimal Quntity { get; set; }
        [Required(ErrorMessage = " يرجى إدخال سعر الوحدة ")]
        public decimal UnitPrice { get; set; }
        [Required(ErrorMessage = " يرجى إدخال حجم الوحدة ")]
        public string UnitSize  { get; set; }
        [Required(ErrorMessage = " يرجى إدخال المادة الفعالة ")]
        public string ActiveSubstance { get; set; }
        [Required(ErrorMessage = " يرجى إدخال اسم الشركة ")]

        public string Company { get; set; }
        [Required(ErrorMessage = " يرجى إدخال الإجمالي ")]
        public decimal Total{ get; set; }
        public string ProducerId { get; set; }
        public int ContractId { get; set; }
        public Contract Contract{ get; set; }
        public Producer Producer { get; set; }
    }
}
