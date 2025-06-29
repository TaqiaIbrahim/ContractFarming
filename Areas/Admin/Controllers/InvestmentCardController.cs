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
    public class InvestmentCardController : Controller
    {
        private readonly ApplicationDbContext _context;

        private readonly IWebHostEnvironment _hosting;

        public InvestmentCardController(ApplicationDbContext context, IWebHostEnvironment hosting)
        {
            _context = context;
            _hosting = hosting;
        }
        public IActionResult Index()
        {
           
            var result = _context.InvestmentCards.Include(e=>e.Producers).ToList();
          
            return View(result);
        }
        public IActionResult AddOrEdit(int id)
        {
          
            var ViewModel = new InvestmentCardVM()
            {
               
                
               Producers = _context.Producers.ToList(),
               products= _context.Products.ToList()
            };
           
            ViewBag.producer = ViewModel.Producers;
            ViewBag.product = ViewModel.products;
            if (id == 0)
                return View(new InvestmentCard());
            else
                return View(_context.InvestmentCards.Find(id));
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> AddOrEdit(InvestmentCard investmentCard)
        {
            if (Request.Form.Files.Count > 0)
            {
                var file = Request.Form.Files.FirstOrDefault();
                string pathUpload = Path.Combine(_hosting.WebRootPath, "uploads");
                investmentCard.ImageUrl= UploadFileHelper.UploadFile(file, pathUpload, investmentCard.ImageUrl);
            }
            if (Request.Form.Files.Count > 0)
            {
                var file2 = Request.Form.Files[1];
                string pathUpload = Path.Combine(_hosting.WebRootPath, "uploads");
                investmentCard.Attachment = UploadFileHelper.UploadFile(file2, pathUpload, investmentCard.Attachment);
            }

            if (investmentCard.Id > 0)
            {
                _context.Update(investmentCard);
                await _context.SaveChangesAsync();
               
                return RedirectToAction(nameof(Index));
            }
            else
            {
                investmentCard.ProducerId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
                var entity = _context.Add(investmentCard);
                await _context.SaveChangesAsync();
               
                return RedirectToAction(nameof(Index));
            }

        }

        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var investmentCard = await _context.InvestmentCards
                .FirstOrDefaultAsync(m => m.Id == id);
            if (investmentCard == null)
            {
                return NotFound();
            }

            return View(investmentCard);
        }
        public async Task<IActionResult> Delete(int id = 0)
        {

            var investmentCard = _context.InvestmentCards.Find(id);
            _context.InvestmentCards.Remove(investmentCard);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }
        public ActionResult GetPdf(string pdf)
        {
            string path = "~/uploads/" + pdf;
            Response.Headers.Add("Content-Disposition", "inline:pdf=" + pdf);
            return File(path, "application/pdf");
        }

    }
}
