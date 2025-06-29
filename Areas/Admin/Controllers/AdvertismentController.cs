using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using ContractFarming.Data;
using ContractFarming.Models;
using ContractFarming.Models.Helper;
using ContractFarming.ViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ContractFarming.Areas.Admin.Controllers
{
    //[Authorize(Roles = "Admin")]
    [Area("Admin")]
    public class AdvertismentController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly IWebHostEnvironment _hosting;

        public AdvertismentController(ApplicationDbContext context, IWebHostEnvironment hosting)
        {
            _context = context;
            _hosting = hosting;
        }
        public IActionResult Index()
        {
          

                return View(_context.Advertisments.ToList());

        }


        public IActionResult Add()
        {
            var ViewModel = new FormViewDataModels()
            {
               InvestmentCards = _context.InvestmentCards.ToList()
            };
            ViewBag.InvestmentCard = ViewModel.InvestmentCards;
            return View(new Advertisment());

        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Add(Advertisment model)
        {
            

            if (Request.Form.Files.Count > 0)
            {
                var file = Request.Form.Files.FirstOrDefault();
                string pathUpload = Path.Combine(_hosting.WebRootPath, "uploads");
                model.UrlImage = UploadFileHelper.UploadFile(file, pathUpload, model.UrlImage);
            }
           
            
                if (model.Id > 0)
                {
                    _context.Update(model);
                    await _context.SaveChangesAsync();
                   
                    return RedirectToAction(nameof(Index));
                }
                else
                {
                    var entity = _context.Add(model);
                    await _context.SaveChangesAsync();
                  
                    return RedirectToAction(nameof(Index));
                }
           



        }
        public async Task<IActionResult> Delete(int id = 0)
        {

            var advertisment = _context.Advertisments.Find(id);
            _context.Advertisments.Remove(advertisment);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var advertisment = await _context.Advertisments
                .FirstOrDefaultAsync(m => m.Id == id);
            if( advertisment == null)
            {
                return NotFound();
            }

            return View(advertisment);
        }


    }
}