using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContractFarming.Models;
using ContractFarming.ViewModel;
using ContractFarming.Data;
using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace ContractFarming.Areas.Producer.Controllers
{
    [Area("Producer")]
    public class ReportController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        public ReportController(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }
        public IActionResult Index()
        {
            
            return View(_context.Reports.Include(e=>e.Producer).Include(e => e.Contract).ThenInclude(e => e.ContractRequests).ThenInclude(e=>e.Investor).ToList());
        
        }
        public IActionResult Add()
        {
            var ViewModel = new FormViewDataModels { Contracts = _context.Contracts.ToList() };
            ViewBag.Contract = ViewModel.Contracts;
            return View(new Report());

            
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Add(Report report)
        {
            if (ModelState.IsValid)
            {
               
                report.ProducerId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
                _context.Add(report);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(report);

        }
       
    }
}
