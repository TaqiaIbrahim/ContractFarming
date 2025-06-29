using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ContractFarming.Models
{
    public class Admin:ApplicationUser
    {
        //[Key]
        //public int Id { get; set; }

        public ICollection<SeedInstructions> SeedInstructions { get; set; }
        public ICollection<ApplicationUser> Users { get; set; }
    }
}
