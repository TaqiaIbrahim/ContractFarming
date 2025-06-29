using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContractFarming.Models;
using ContractFarming.ViewModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authorization;
using ContractFarming.Data;

namespace ContractFarming.Areas.Producer.Controllers
{
    [Area("Producer")]
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

             .ToList();

            return View(reslt);

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

        public async Task<IActionResult> Delete(int id = 0)
        {
            var product = _context.ContractRequests.Find(id);
            _context.ContractRequests.Remove(product);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }


    }
}