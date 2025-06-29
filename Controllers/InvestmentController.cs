using ContractFarming.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContractFarming.ViewModel;
using Microsoft.AspNetCore.Hosting;
using ContractFarming.Models.Helper;
using ContractFarming.Data;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace ContractFarming.Controllers
{
    [AllowAnonymous]
    public class InvestmentController : Controller
    {



        private readonly ApplicationDbContext _context;
        private static int contractrequestCount = 0;

        public InvestmentController(ApplicationDbContext context)
        {
            _context = context;
            contractrequestCount = _context.ContractRequests.Count();
        }


        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Products()
        {


            var result = _context.Categories.ToList();

            return View(result);

        }

        public IActionResult ProductDetails(int? id)
        {



            if (id == null)
            {
                return NotFound();
            }
            var result = _context.Products.Include(e => e.Finances).ThenInclude(e => e.investor).AsNoTracking().FirstOrDefault(e => e.Id == id);

            if (result == null)
            {
                return NotFound();
            }
            return View(result);








        }


        public IActionResult ProductName(int id)
        {


            var resl = _context.Products.Where(x => x.CategoryId == id).ToList();
            return View(resl);
        }


        public IActionResult Prices()
        {
            return View();
        }
        public async Task<IActionResult> AddAddOrEdit(int? id)
        {
            var invetmentcard = _context.Products.Include(e => e.Finances).ThenInclude(e => e.investor).AsNoTracking().FirstOrDefaultAsync(e => e.Id == id);
            return View(invetmentcard);
        }


        [HttpPost]
        [ValidateAntiForgeryToken]


        public async Task<IActionResult> AddAddOrEdit(int producteId, string InvestorId)
        {
            ContractRequest contractRequest = new ContractRequest();
            contractRequest.ProductId = producteId;
            contractRequest.InvestorId = InvestorId;

            /*  string id = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
             if(id==null)
             {
                 ViewBag["msg"] = "انت غير مسجل";
                 return RedirectToAction("InvestmentCard", new { id = InvestmentCardId});
             }*/
            //or this way

            /* investmentRequest.InvestorId = Convert.ToInt32(HttpContext.Session.GetString("InvestorId"));*/

            contractRequest.ProducerId= User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
           

            _context.Add(contractRequest);
            await _context.SaveChangesAsync();
            return RedirectToAction("ProductDetails", new { id = producteId });
        }




    }
}
