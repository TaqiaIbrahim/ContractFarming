using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContractFarming.Models;
using ContractFarming.ViewModel;
using ContractFarming.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace ContractFarming.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class Product_SeasonController : Controller
    {
        private readonly ApplicationDbContext _context;
        public Product_SeasonController(ApplicationDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            return View(_context.Prodcut_Seasons.Include(e => e.Product).Include(e => e.Season).ToList());
        }

        public IActionResult AddOrEdit()
        {



            var ViewModel = new FormViewDataModels()
            {
                Seasons = _context.Seasons.ToList(),
                Products = _context.Products.ToList()

            };
            ViewBag.Season = ViewModel.Seasons;
            ViewBag.Product = ViewModel.Products;




            return View(new Product_Season());

        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> AddOrEdit(Product_Season product_Season)
        {

            if (ModelState.IsValid)
            {


                _context.Prodcut_Seasons.Add(product_Season);


                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));

            }
            return View(product_Season);
        }
        public async Task<IActionResult> Delete(int ProductId, int SeasonId)
        {
            var Prodcut_Season = _context.Prodcut_Seasons.Find(ProductId,SeasonId);
            _context.Remove(Prodcut_Season);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }
        //private bool Product_SeasonExists(int SeasonId,int ProductId)
        //{
        //    return _context.Prodcut_Seasons.Any(e => e.SeasonId == SeasonId && e.ProductId == ProductId);
        //}
    }
}
