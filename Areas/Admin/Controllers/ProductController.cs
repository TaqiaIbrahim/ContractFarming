using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using ContractFarming.Models;
using ContractFarming.Data;
using ContractFarming.Models.Helper;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using ContractFarming.ViewModel;
using Microsoft.EntityFrameworkCore;

namespace ContractFarming.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class ProductController : Controller
    {
        private readonly ApplicationDbContext _context;

        private readonly IWebHostEnvironment _hosting;
        public ProductController(ApplicationDbContext context, IWebHostEnvironment hosting)
        {
            _context = context;
            _hosting = hosting;
        }
        public IActionResult Index()
        {
            return View(_context.Products.Include(e=>e.Categories).ToList());
        }
        public IActionResult AddOrEdit(int id)
        {
            var ViewModel = new FormViewDataModels()
            {

                Categories = _context.Categories.ToList()
            };
            
         
            ViewBag.Category = ViewModel.Categories;
            if (id == 0)
                return View(new Product());
            else
                return View(_context.Products.Find(id));
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> AddOrEdit(Product product)
        {
            if (ModelState.IsValid) {

                if (Request.Form.Files.Count > 0)
                {
                    var file = Request.Form.Files.FirstOrDefault();
                    string pathUpload = Path.Combine(_hosting.WebRootPath, "uploads");
                    product.ImageUrl = UploadFileHelper.UploadFile(file, pathUpload, product.ImageUrl);

                }
                if (Request.Form.Files.Count > 0)
                {
                    var file2 = Request.Form.Files[1];
                    string pathUpload = Path.Combine(_hosting.WebRootPath, "uploads");
                    product.Feasibility = UploadFileHelper.UploadFile(file2, pathUpload, product.Feasibility);
                }
                if (Request.Form.Files.Count > 0)
                {
                    var file3 = Request.Form.Files[2];
                    string pathUpload = Path.Combine(_hosting.WebRootPath, "uploads");
                    product.StrategicPlan = UploadFileHelper.UploadFile(file3, pathUpload, product.StrategicPlan);
                }
                if (Request.Form.Files.Count > 0)
                {
                    var file4 = Request.Form.Files.LastOrDefault();
                    string pathUpload = Path.Combine(_hosting.WebRootPath, "uploads");
                    product.FoodValueChain = UploadFileHelper.UploadFile(file4, pathUpload, product.FoodValueChain);
                }

                if (product.Id > 0)
                {
                    _context.Update(product);
                    await _context.SaveChangesAsync();
                  
                    //return RedirectToAction(nameof(Index));
                }
                else
                {
                    var entity = _context.Add(product);
                    await _context.SaveChangesAsync();
                 
                   
                }
                
            }
            return RedirectToAction(nameof(Index));

        }
        public async Task<IActionResult>Delete(int id = 0)
        {
            var product = _context.Products.Find(id);
            _context.Products.Remove(product);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }
    }
}
