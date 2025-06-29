using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContractFarming.Models;
using ContractFarming.ViewModel;
using Microsoft.EntityFrameworkCore;
using ContractFarming.Data;

namespace ContractFarming.Areas.Investor.Controllers
{
    [Area("investor")]
    public class ReportController : Controller
    {
        private readonly ApplicationDbContext _context;
        public ReportController(ApplicationDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            /* ReportV viewmodel = new ReportV();
              viewmodel.report = _applicationDbContext.Reports.Include(e => e.Contract)
                  .Include(e => e.Producer)
                  .OrderByDescending(a => a.Id)
                  .ToList();*/
            var result = _context.Reports
                  .Include(e => e.Contract)
                  .Include(e => e.Producer)
                  .OrderByDescending(a => a.Id)
                  .ToList();

            

            return View(result);
        }

        public async Task<IActionResult> Confirm(int id)
        {

            var result = _context.Reports.Find(id);
            if (result.Id > 0)
         //       result.InvestorConfirm = true;
            _context.Update(result);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }
    }
}
