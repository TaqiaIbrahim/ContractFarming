using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContractFarming.Models;
using ContractFarming.Data;
using Microsoft.AspNetCore.Authorization;

namespace ContractFarming.Controllers
{
    [AllowAnonymous]
    public class SeedInstructionController : Controller
    {
       

        private readonly ApplicationDbContext _context;

        public SeedInstructionController(ApplicationDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            return View(_context.SeedInstructions.ToList());
        }
    }
}
