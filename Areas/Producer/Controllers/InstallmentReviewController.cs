using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContractFarming.Models;
using Microsoft.AspNetCore.Mvc;
using ContractFarming.Data;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using ContractFarming.ViewModel;

namespace ContractFarming.Areas.Producer.Controllers
{
    [Area("Producer")]
    public class InstallmentReviewController : Controller
    {
        private readonly ApplicationDbContext _context;
        public InstallmentReviewController(ApplicationDbContext context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            return View(_context.InstallmentReviews.Include(e => e.Installment).ThenInclude(e => e.Contract).ToList());

        }
        public IActionResult Add(int id)
        {
            var ViewModel = new FormViewDataModels
            {

                Installments = _context.Installments.ToList()
            };
            ViewBag.Installment = ViewModel.Installments;

            if (id == 0)
                return View(new InstallmentReview());
            else
                return View(_context.InstallmentReviews.Find(id));
            



            
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Add(InstallmentReview review)
        {
            var ViewModel = new FormViewDataModels
            {

                Installments = _context.Installments.ToList()
            };
            ViewBag.Installment = ViewModel.Installments;

            if (ModelState.IsValid)
            {
                if (review.Id > 0)
                {
                    
                    _context.Add(review);
                    await _context.SaveChangesAsync();

                    return RedirectToAction(nameof(Index));
                }
                else {
                    
                    review.ProducerId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
                    _context.Add(review);
                    await _context.SaveChangesAsync();
                    return RedirectToAction(nameof(Index));
                }
                   
            }
            return View(review);

        }

        public async Task<IActionResult> Delete(int id = 0)
        {
            var review = _context.InstallmentReviews.Find(id);
            _context.InstallmentReviews.Remove(review);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }
    
}
}
