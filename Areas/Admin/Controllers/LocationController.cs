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
    public class LocationController : Controller
    {

        private readonly ApplicationDbContext _context;
        public LocationController(ApplicationDbContext context)
        {
            _context = context;
        }

            public IActionResult Index()
        {
            return View(_context.Locations.ToList());
        }

        public IActionResult AddOrEdit(int id)
        {
            if (id == 0)
                return View(new Location());
            else
                return View(_context.Locations.Find(id));

        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> AddOrEdit(Location location)
        {
            
            if (ModelState.IsValid)
            {
                if (location.Id == 0)
                    _context.Locations.Add(location);
                else
                    _context.Locations.Update(location);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(location);

        }
        
        public async Task<IActionResult>Delete(int id=0)
        {
            var location = _context.Locations.Find(id);
            _context.Locations.Remove(location);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }
       
    }
}
