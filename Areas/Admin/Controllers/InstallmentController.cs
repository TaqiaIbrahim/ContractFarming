using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContractFarming.Data;
using ContractFarming.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ContractFarming.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class InstallmentController : Controller
    {
   
        private readonly ApplicationDbContext _context;
        
        public InstallmentController(ApplicationDbContext context)
        {
            _context = context;
        }

        
            public IActionResult Index()
        {
            return View(_context.Installments.Include(e=>e.Contract).ToList());
        }
   
        
        public IActionResult InKindInstallment()
        {
            return View(_context.InKindInstallments.ToList());
        }
        public IActionResult Financial_Installment()
        {
            return View(_context.Financial_Installments.ToList());
        }
        
    }
}
