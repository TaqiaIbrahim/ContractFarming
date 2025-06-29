using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContractFarming.Models;
using ContractFarming.Data;
using ContractFarming.Constants;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace ContractFarming.Areas.Producer.Controllers
{
    [Area("Producer")]
    public class DriverController :Controller
    {
        private readonly ApplicationDbContext _context;
     
        public DriverController(ApplicationDbContext context)
        {
            _context = context;
        }
        
        public IActionResult Index()
        {
            
            return View(_context.Drivers.ToList());

        }
        //[Authorize(Premissions.Driver.Add)]
        //[Authorize(Premissions.Driver.Edit)]
        public IActionResult AddOrEdit(string id)
        {
            if (id == null)
                return View(new Driver());

            else
                return View(_context.Drivers.Find(id));


        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        //[Authorize(Premissions.Driver.Add)]
        //[Authorize(Premissions.Driver.Edit)]
        public async Task<IActionResult> AddOrEdit(Driver driver)
        {
            if (ModelState.IsValid)

            {
               
                if (driver.Id == null)
                {
                    driver.Id = Guid.NewGuid().ToString();
                    _context.Add(driver);
                }
                 
                else
                    _context.Update(driver);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(driver);

        }
        //[Authorize(Premissions.Driver.Delete)]
        public async Task<IActionResult> Delete(string id = null)
        {
            var driver = _context.Drivers.Find(id);
            _context.Drivers.Remove(driver);
            await _context.SaveChangesAsync();


            return RedirectToAction(nameof(Index));
        }
        
    }

}
