using ContractFarming.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContractFarming.ViewModel;
using Microsoft.EntityFrameworkCore;
using ContractFarming.Data;
using System.Security.Claims;

namespace ContractFarming.Areas.Investor.Controllers
{
    [Area("Investor")]
    public class AddFinanceController : Controller
    {

        private readonly ApplicationDbContext _context;

        public AddFinanceController(ApplicationDbContext context)
        {
            _context = context;

        }

        public IActionResult Index(string searchtext=" ")
        {
            List<Finance> result;
                ;
                if(searchtext !=null && searchtext !=null)
            {
                result = _context.Finances
                  .Include(e => e.product)
                  .Include(e => e.Categories)
                  .Where(p => p.Categories.ProductType.Contains(searchtext))
                  .OrderByDescending(f => f.Id)
                  .ToList();
            }
            result = _context.Finances
              .Include(e => e.product)
             // .Include(e => e.Categories)
              .OrderByDescending(f => f.Id)
              .ToList();
            return View(result);
        }

        public IActionResult Add(int id=0)
        {

            var ViewModel = new FinanceVm 
            { products = _context.Products.ToList(),
         //    Category1=_context.categories.ToList()
            
            };
            ViewBag.Product = ViewModel.products.ToList();
          //  ViewBag.Category = ViewModel.Category1.ToList();


            if (id == 0)
                return View(new Finance());
            else
                return View(_context.Finances.Find(id));

        }

        [HttpPost]
        [ValidateAntiForgeryToken]
       public async Task<IActionResult> Add(Finance finance)
        {
           
            if (ModelState.IsValid)
            {
                finance.InvestorId = User.FindFirst(ClaimTypes.NameIdentifier).Value;

                if (finance.Id == 0)

                    
                _context.Add(finance);
                else
                    _context.Update(finance);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(finance);
        }


        public async Task<IActionResult> Delete(int id = 0)
        {
            var result = _context.Finances.Find(id);

            _context.Finances.Remove(result); 
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }



    }
}





