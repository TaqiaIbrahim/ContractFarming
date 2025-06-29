using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ContractFarming.Models
{
    public class Contract
    {
        [Key]
        public int Id{ get; set; }
        [Required(ErrorMessage = "يرجى إدخال عنوان العقد")]
        public string ContractTitle { get; set; }
        [Required(ErrorMessage = "يرجى اختيار ملف  ")]
        public string ContractForm { get; set; }
        public bool RequestStatus { get; set; }
        ////[Required(ErrorMessage = "يرجى إدخال تاريخ الإستلام")]
        public DateTime DeliveryDate { get; set; }
        ////[Required(ErrorMessage = "يرجى إدخال طريقة الإستلام")]
        public string DeleiveryWay { get; set; }
        ////[Required(ErrorMessage = "يرجى إدخال الكمية")]
        public decimal Quentity { get; set; }
        // //[Required(ErrorMessage = "يرجى إدخال نوع الضمانة ")]
        public string WarrantyType { get; set; }
        ////[Required(ErrorMessage = "يرجى إدخال تاريخ التوقيع")]

        public DateTime SignatureDate { get; set; }
        ////[Required(ErrorMessage = "يرجى إدخال هذا الحقل")]
        public string QuantityUnit { get; set; }
        ////[Required(ErrorMessage = " يرجى إدخال هذا الحقل ")]
        public bool AdminConfirm { get; set; }
        ////[Required(ErrorMessage = " يرجى إدخال هذا الحقل ")]
        public bool InvestorConfirm { get; set; }


        public Producer Producer { get; set; }
        public Investor Investor { get; set; }
        public Product Product { get; set; }

        //public InvestmentCard InvestmentCard { get; set; }
        public ReciptStatement ReciptStatement { get; set; }
        public ICollection<Report> Reports { get; set; }
        public  ICollection<ProductionSupply>ProductionSupplies { get; set; }
        public ICollection<Installment> Installments { get; set; }
        public Representative Representative { get; set; }
        //public ICollection<Representative> Representatives{ get; set; }
        public ICollection<ApplicationUser> Users { get; set; }
        public ContractRequest ContractRequests { get; set; }
        public int ContractRequestId { get; set; }




    }

}
