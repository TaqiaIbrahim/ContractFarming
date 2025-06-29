using ContractFarming.Data;
using ContractFarming.Models;
using ContractFarming.ViewModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContractFarming.Areas.Producer.Controllers
{
    [Area("Producer")]
    public class AddProductioSupplyController : Controller
    {
        public readonly ApplicationDbContext _context;
        public AddProductioSupplyController(ApplicationDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            var result = _context.ProductionSupplies
                .Include(e=>e.Contract)
                .ToList();
            return View(result);
        }


        public IActionResult Add(int id)
        {
            var ViewModel = new FormViewDataModels { Contracts = _context.Contracts.ToList() };
            ViewBag.Contract = ViewModel.Contracts;
            if (id == 0)
                return View(new ProductionSupply());
            else
                return View(_context.ProductionSupplies.Find(id));

        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Add(ProductionSupply productionSupply)
        {

            if (ModelState.IsValid)
            {
                if (productionSupply.Id == 0)
                    _context.ProductionSupplies.Add(productionSupply);
                else
                    _context.ProductionSupplies.Update(productionSupply);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(productionSupply);

        }

        public async Task<IActionResult> Delete(int id = 0)
        {
            var result= _context.ProductionSupplies.Find(id);
            _context.ProductionSupplies.Remove(result);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

    }
}
