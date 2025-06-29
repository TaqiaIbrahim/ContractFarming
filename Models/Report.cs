using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace ContractFarming.Models
{
    public class Report
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = " يرجى إدخال نص البلاغ ")]

        public string  Text { get; set; }

        
        [Required(ErrorMessage = " يرجى اختيار العقد ")]
        public int ContractId { get; set; }
        public string ProducerId { get; set; }
        public Producer Producer { get; set; }
        public Contract Contract { get; set; }
        

    }
}
