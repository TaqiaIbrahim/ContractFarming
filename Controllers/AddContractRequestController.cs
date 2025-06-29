using ContractFarming.Models;
using ContractFarming.Models.Helper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContractFarming.ViewModel;
using Microsoft.AspNetCore.Hosting;
using System.IO;
using ContractFarming.Data;
using Microsoft.AspNetCore.Authorization;

namespace ContractFarming.Controllers
{
    [AllowAnonymous]
    public class AddContractRequestController : Controller
    {
     


        private readonly ApplicationDbContext _context;
     
        public AddContractRequestController(ApplicationDbContext context)
        {
            _context = context;
            
        }

        public IActionResult Index()
        {

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



       /* private readonly ApplicationDbContext _context;
        private readonly IWebHostEnvironment _hosting;
        public AddContractRequestController(ApplicationDbContext context,IWebHostEnvironment hosting)
        {
            _context = context;
            _hosting = hosting;
        }

      public IActionResult Index()
        {
           
            return View();
        }

        public IActionResult Add(int id = 0)
        {
            
            var viewmodel = new AddContractRequestVM
            {
                Investors = _context.Investors.ToList(),
                Producers = _context.Producers.ToList(),    
                locations=_context.Locations.ToList()
            };
            ViewBag.Investor = viewmodel.Investors;
            ViewBag.Producer = viewmodel.Producers;
            ViewBag.location = viewmodel.locations;

            if (id == 0)
                return View(new Contract());
            else
                return View(_context.Contracts.Find(id));

        }
        

     


        [HttpPost]
        [ValidateAntiForgeryToken]

        

     


          public async Task<IActionResult> Add(Contract contract)
          {
              if (Request.Form.Files.Count > 0)
              {
                  var file = Request.Form.Files.FirstOrDefault();
                  string pathUpload = Path.Combine(_hosting.WebRootPath, "uploads");
                  contract.WarrantyType = UploadFileHelper.UploadFile(file, pathUpload, contract.WarrantyType);
              }

              if (contract.Id > 0)
              {
                  _context.Update(contract);
                  await _context.SaveChangesAsync();
                  TempData["success"] = "Employee Edit successfully";
                  return RedirectToAction(nameof(Index));
              }
              else
              {
                  var entity = _context.Add(contract);
                  await _context.SaveChangesAsync();
                  TempData["success"] = "Employee created successfully";
                  return RedirectToAction(nameof(Index));
              }
          }
          public async Task<IActionResult> Delete(int id = 0)
          {
              var contract = _context.Contracts.Find(id);
              _context.Contracts.Remove(contract);
              await _context.SaveChangesAsync();
              return RedirectToAction(nameof(Index));
          }*/

