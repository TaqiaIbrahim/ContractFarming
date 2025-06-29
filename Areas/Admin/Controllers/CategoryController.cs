using ContractFarming.Data;
using ContractFarming.Models;
using Microsoft.AspNetCore.Mvc;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContractFarming.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class CategoryController : Controller
    {
        private readonly ApplicationDbContext _context;
      

        public CategoryController(ApplicationDbContext context)
        {
            _context = context;
        }


        public IActionResult Index(string searchtext)
        {
            List<Categories> result;

            if (searchtext != null && searchtext != null)
            {
                result = _context.Categories
                        .Where(p => p.ProductType.Contains(searchtext))
                        .ToList();
            }
            else
                result = _context.Categories.ToList();
            return View(result);



        }

        public IActionResult AddOrEdit(int id)
        {
            if (id == 0)
                return View(new Categories());
            else
                return View(_context.Categories.Find(id));

        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> AddOrEdit(Categories categories)
        {

            if (ModelState.IsValid)
            {
                if (categories.Id == 0)
                    _context.Categories.Add(categories);
                else
                    _context.Categories.Update(categories);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(categories);

        }

        public async Task<IActionResult> Delete(int id = 0)
        {
            var location = _context.Categories.Find(id);
            _context.Categories.Remove(location);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

    }
}

