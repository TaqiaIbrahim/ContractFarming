using ContractFarming.Data;
using ContractFarming.Models;
using ContractFarming.ViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace ContractFarming.Controllers
{
    [AllowAnonymous]
    public class InvestmentInvestorController : Controller
    {
        private readonly ApplicationDbContext _context;
        public InvestmentInvestorController(ApplicationDbContext context)
        {
            _context=context;
        }
        public IActionResult Index()
        {
            return View();
        }
        //.OrderByDescending(p => p.Id)
        public IActionResult InvestmentCard(int? id)
        {
            var viewModel = new InvestmentCardVM
            {
                Producers = _context.Producers.ToList()
            };
            ViewBag.Producer = viewModel.Producers;
            if (id == null)
                return NotFound();

            var result1 = _context.InvestmentCards.Include(e => e.Product).Include(e => e.Producers).AsNoTracking().FirstOrDefault(e => e.Id == id);
            if (result1 == null)
                return NotFound();
            return View(result1);
        }

        public IActionResult InvestmentCardName()
        {
            var result = _context.InvestmentCards.ToList();

            return View(result);
        }

        public async Task<IActionResult> AddAddOrEdit(int? id)
        {
            var invetmentcard = _context.InvestmentCards.Include(e=>e.Product).Include(e => e.Producers).AsNoTracking().FirstOrDefaultAsync(e => e.Id == id);
            return View(invetmentcard);
        }


        [HttpPost]
        [ValidateAntiForgeryToken]


        public async Task<IActionResult> AddAddOrEdit(string producerId, int productId, string investmentCN)
        {
            ContractRequest contractrequest = new ContractRequest();
            contractrequest.ProducerId = producerId;
            contractrequest.ProductId = productId;
            contractrequest.InvestmrntCardname = investmentCN;
            //ViewBag.Message = string.Format("Hello {0}.\\nCurrent Date and Time: {1}", producerId, DateTime.Now.ToString());

            /*  string id = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
             if(id==null)
             {
                 ViewBag["msg"] = "انت غير مسجل";
                 return RedirectToAction("InvestmentCard", new { id = InvestmentCardId});
             }*/
            //or this way

            /* investmentRequest.InvestorId = Convert.ToInt32(HttpContext.Session.GetString("InvestorId"));*/


            // _context.Add(investmentRequest);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(InvestmentCardName) );
        }
        //public ActionResult Download(string filePath, string fileName)
        //{
        //    string fullName = Path.Combine(GetBaseDir(), filePath, fileName);

        //    byte[] fileBytes = GetFile(fullName);
        //    return File(
        //        fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, fileName);
        //}

        //byte[] GetFile(string s)
        //{
        //    System.IO.FileStream fs = System.IO.File.OpenRead(s);
        //    byte[] data = new byte[fs.Length];
        //    int br = fs.Read(data, 0, data.Length);
        //    if (br != fs.Length)
        //        throw new System.IO.IOException(s);
        //    return data;
        //}








    }
}
