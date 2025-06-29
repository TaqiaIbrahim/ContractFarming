using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using ContractFarming.Data;
using ContractFarming.Models;
using ContractFarming.Models.Helper;
using ContractFarming.ViewModel;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ContractFarming.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class ContractRequestsController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly IWebHostEnvironment _hosting;
        public ContractRequestsController(ApplicationDbContext context, IWebHostEnvironment hosting)
        {
            _context = context;
            _hosting = hosting;
        }
        public IActionResult Index()
        {

            var reslt = _context.ContractRequests
                .Include(e => e.Contracts)
                .Include(e => e.product)
                .Include(e => e.Producer)
                .Include(e => e.Investor)
                .ToList();
            //   var reslt = _context.ContractRequests.FromSqlRaw("select * from ContractRequests").ToList();
            return View(reslt);
        }


        public async Task<IActionResult> Confirm(int id)
        {

            var result = _context.ContractRequests.Find(id);
            if (result.Id > 0)

                result.StateAdmin = true;
            _context.Update(result);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));



            /*   var result = _context.ContractRequests.Find(id);
               if (result.Id > 0)
               {
                   if (state == "true")
                   {
                       contractRequest.State = true;
                       _context.Update(result);
                       await _context.SaveChangesAsync();
                   }
                   else
                   {
                       contractRequest.State = false;
                       _context.Update(result);
                       await _context.SaveChangesAsync();
                   }
                   _context.Entry(contractRequest).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                   await _context.SaveChangesAsync();

               }
               return RedirectToAction(nameof(Index));
            */

        }
        public IActionResult Index1()
        {
            /*var result = _context.Contracts
                .Include(e=>e.ContractRequests)
              
               .OrderByDescending(e=>e.Id)
               .ToList();
            return View(result);*/
            var result = _context.Contracts.
                Include(e => e.ContractRequests).ThenInclude(e => e.product).
                Include(e => e.ContractRequests).ThenInclude(e => e.Producer).
                Include(e => e.ContractRequests).ThenInclude(e => e.Investor).


                ToList();
            return View(result);
        }

        public IActionResult Add(int id)
        {
            //var resl = _context.Contracts.Include(e => e.ContractRequests).Where(x => x.Id == id && x.ContractRequests.State == true && x.ContractRequests.InvestorState == true).ToList();

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
                contract.ContractForm = UploadFileHelper.UploadFile(file, pathUpload, contract.ContractForm);
            }



            if (contract.Id == 0)
                _context.Add(contract);
            else
                _context.Update(contract);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index1));

        }


        public async Task<IActionResult> Details(int? id)
        {

            ViewBag.ProducSuplly = await GetProductionSupplies((int)id);

            if (id == null)
            {
                return NotFound();
            }

            var result = await _context.Contracts
                  .Include(e => e.ProductionSupplies).
                Include(e => e.ContractRequests).ThenInclude(e => e.product).
                Include(e => e.ContractRequests).ThenInclude(e => e.Producer).
                Include(e => e.ContractRequests).ThenInclude(e => e.Investor)
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

            var contract = _context.ContractRequests.Find(id);
            _context.ContractRequests.Remove(contract);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }
    }
}
