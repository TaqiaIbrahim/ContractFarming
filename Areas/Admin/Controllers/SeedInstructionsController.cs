using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContractFarming.Models;
using ContractFarming.Data;
using Microsoft.AspNetCore.Mvc;

namespace ContractFarming.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class SeedInstructionsController : Controller
    {
        private readonly ApplicationDbContext _context;
        public SeedInstructionsController(ApplicationDbContext context)
        {
            _context = context;
        }
        public IActionResult Index(string search)
      {
            return View(_context.SeedInstructions.ToList());
             
        }
        public IActionResult AddOrEdit(int id)
        {
            if (id == 0)
                return View(new SeedInstructions());
            else
                return View(_context.SeedInstructions.Find(id));
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> AddOrEdit(SeedInstructions seed)
        {
            if (ModelState.IsValid)
            {
                if (seed.Id == 0)
                    _context.Add(seed);
                else
                    _context.Update(seed);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(seed);

        }

      
        
        public async Task<IActionResult> Delete(int id=0)
        {
            var seedInstruction = _context.SeedInstructions.Find(id);
            _context.SeedInstructions.Remove(seedInstruction);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }
    }
}
