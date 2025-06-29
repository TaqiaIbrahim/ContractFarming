using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ContractFarming.Models
{
    public class InvestmentCard
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = " يرجى إدخال عنوان البطاقة الإستثمارية ")]
        public string Title { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال تاريخ بدء البطاقة الإستثمارية ")]

        public string ImageUrl { get; set; }
        public DateTime StartDate { get; set; }
        //[Required(ErrorMessage = " يرجى إدخال تاريخ إنتهاء البطاقة الإستثمارية ")]
         public DateTime ExpirationDate { get; set; }
        [Required(ErrorMessage = " يرجى اختيار ملف ")]
         public string Attachment { get; set; }

        //public int ContractId { get; set; }

        //public int ProductId { get; set; }

        public string ProducerId { get; set; }
         public Product Product { get; set; }
        //public Contract Contracts { get; set; }
         public Advertisment Advertisment { get; set; }
      //   public ICollection<InvestmentRequest>investmentRequests { get; set; }

         public Producer Producers { get; set; }
      
    }
}
