using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContractFarming.Data;
using ContractFarming.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ContractFarming.Areas.Producer.Controllers
{
    [Area("Producer")]
    public class InvestmentRequestsController : Controller
    {
        private readonly ApplicationDbContext _context;
        public InvestmentRequestsController( ApplicationDbContext context)
        {
            _context = context;
        }
        public IActionResult Index()
        {


            var reslt = _context.ContractRequests.
                Include(e => e.Contracts).
                Include(e => e.product).
                Include(e => e.Producer)
               .Include(e => e.Investor)
               .Where(r => r.StateAdmin)
               .ToList();
            return View(reslt);
        }
        public async Task<IActionResult> Confirm(int id)
        {

            var result = _context.ContractRequests.Find(id);
            if (result.Id > 0)

                result.ConfirmUser = true;
            _context.Update(result);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        public async Task<IActionResult> Details(int? id)
        {

            ViewBag.ProducSuplly = await GetProductionSupplies((int)id);

            if (id == null)
            {
                return NotFound();
            }

            var result = await _context.ContractRequests
                .Include(e => e.Contracts).ThenInclude(e => e.ProductionSupplies)
                .Include(e => e.product)
                .Include(e => e.Producer)
                .Include(e => e.Investor)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (result == null)
            {
                return View("Index");
            }

            return View(result);
        }

        public async Task<List<ProductionSupply>> GetProductionSupplies(int id)
        {
            var result = await _context.ProductionSupplies
                .Where(e => e.Id == id)
                .ToListAsync();
            return result;
        }

    }

}