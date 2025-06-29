using ContractFarming.Data;
using ContractFarming.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContractFarming.Controllers
{
    [AllowAnonymous]
    public class AddProductioSupplyController : Controller
    {
        public readonly ApplicationDbContext _context;
        public AddProductioSupplyController(ApplicationDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            var reuselt = _context.ProductionSupplies.ToList();
            return View();
        }




      

        public IActionResult Add(int id = 0)
        {
            if (id == 0)
                return View(new ProductionSupply());
            else
                return View(_context.ProductionSupplies.Find(id));

        }

        [HttpPost]
        [ValidateAntiForgeryToken]

        public async Task<IActionResult> AddProductioSupplyd(ProductionSupply productionSupply)
        {
            if (ModelState.IsValid)
            {

                if (productionSupply.Id == 0)
                    _context.Add(productionSupply);
                else
                    _context.Update(productionSupply);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));

            }
            return View(productionSupply);
        }

        public async Task<IActionResult> Delete(int id = 0)
        {
            var result = _context.ProductionSupplies.Find(id);

            _context.ProductionSupplies.Remove(result);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }
    }
}
