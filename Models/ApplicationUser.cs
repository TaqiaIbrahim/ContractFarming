using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ContractFarming.Models
{
    public class ApplicationUser : IdentityUser
    {

        [Required(ErrorMessage = " يرجى إدخال الاسم ")]
        public string FullName { get; set; }
        public bool IsActive { get; set; }

        //Type of user
        public string Discriminator { get; set; }
        public string Company { get; set; }
        public int ContractId { get; set; }

        public Contract Contract { get; set; }
        public byte[] ProfilePicture { get; set; }
      




















    }
}
