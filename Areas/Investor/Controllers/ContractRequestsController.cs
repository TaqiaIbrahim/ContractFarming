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
    [Area("Investor")]
    public class ContractRequestsController : Controller
    {

        private readonly ApplicationDbContext _context;

        public ContractRequestsController(ApplicationDbContext context)
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

            //var result = _context.ContractRequests.Where(r => !r.State)
            //        .ToList();
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

        public IActionResult Add(int id, bool st)
        {
            if (id == 0 && st == true)
                return View(new ContractRequest());
            else
                return View(_context.ContractRequests.Find(id));

        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Add(ContractRequest contractRequest)
        {

            if (ModelState.IsValid)
            {
                if (contractRequest.Id == 0)
                    _context.ContractRequests.Add(contractRequest);
                else
                    _context.ContractRequests.Update(contractRequest);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(contractRequest);

        }


        public async Task<IActionResult> Details(int id = 0)
        {

            ViewBag.ProducSuplly = await GetProductionSupplies((int)id);

            if (id == null)
            {
                return NotFound();
            }

            /*   var result = await _context.Contracts
                   .Include(e => e.ProductionSupplies).
                   Include(e => e.ContractRequests).ThenInclude(e => e.product).
                   Include(e => e.ContractRequests).ThenInclude(e => e.Producer).
                   Include(e => e.ContractRequests).ThenInclude(e => e.Investor)
                   .FirstOrDefaultAsync(m => m.Id == id);*/


            var result = await _context.ContractRequests
                .Include(e => e.Contracts).ThenInclude(e => e.ProductionSupplies)
                .Include(e => e.product)
                .Include(e => e.Producer)
                .Include(e => e.Investor)
                .FirstOrDefaultAsync(m => m.Id == id);

            if (result == null)
            {

                return NotFound();
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

