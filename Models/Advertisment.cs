using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ContractFarming.Models
{
    public class Advertisment
    {
        [Key]
        public int Id { get; set; }
      
        ////[Required(ErrorMessage = "يرجى إدخال نص الإعلان")]
        public string Text { get; set; }
        [Required(ErrorMessage = "يرجى اختيار صورة")]
        public string UrlImage { get; set; }
        [Required(ErrorMessage = "يرجى إدخال تاريخ بدء الإعلان")]
        public DateTime StartDate { get; set; }
        [Required(ErrorMessage = "يرجى إدخال تاريخ إنتهاء الإعلان")]
        public DateTime ExpirationDate { get; set; }

        [Required(ErrorMessage = "يرجى اختيار البطاقة الاستثمارية")]
        public int InvestmentCardId { get; set; }
        public InvestmentCard InvestmentCard { get; set; }
    }
}
