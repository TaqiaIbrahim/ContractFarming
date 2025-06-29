using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ContractFarming.Models
{
    public class Price
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = " يرجى إدخال هذا الحقل ")]
        public decimal price { get; set; }
        [Required(ErrorMessage = " يرجى إدخال هذا الحقل ")]
        public DateTime Date { get; set; }
        public Product Product { get; set; }
        public ICollection<Season_Price> Season_Prices { get; set; }
    }
}
