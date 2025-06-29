using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContractFarming.ViewModel;
using ContractFarming.Models;
using Microsoft.EntityFrameworkCore;
using ContractFarming.Data;

namespace ContractFarming.Areas.rpresentative.Controllers
{
    [Area("Representative")]
    public class ContractReviewController : Controller
    {
        private readonly ApplicationDbContext _context;
        public ContractReviewController(ApplicationDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {


            var reuslt = _context.Contracts
                .Include(e=>e.ReciptStatement)
                .Include(e=>e.ContractRequests).ThenInclude(e=>e.product)
                .Include(e => e.ContractRequests).ThenInclude(e => e.Investor)
                .Include(e => e.ContractRequests).ThenInclude(e => e.Producer)


                .OrderByDescending(c => c.Id).
                ToList();
            return View(reuslt);
           
        }


        public IActionResult Add(int id = 0)
        {
            var viewmodel = new ContractReviewVM
            {
                reciptStatements = _context.ReciptStatements.ToList()
            };
            ViewBag.reciptStatements = viewmodel.reciptStatements;

            if (id == 0)
                return View(new ContractReview());
            else
                return View(_context.ContractReviews.Find(id));

        }

        [HttpPost]
        [ValidateAntiForgeryToken]

        public async Task<IActionResult> Add(ContractReview contractReview)
        {
            
                if (contractReview.Id == 0)
                    _context.ContractReviews.Add(contractReview);
                else
                    _context.Update(contractReview);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));

           
            return View(contractReview);
        }


        public async Task<IActionResult> Delete(int id = 0)
        {
            var representative = _context.Representatives.Find(id);
            _context.Representatives.Remove(representative);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

    }
}
