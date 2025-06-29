using ContractFarming.Data;
using ContractFarming.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContractFarming.Areas.rpresentative.Controllers
{
    [Area("Representative")]
    public class ProducerReviewController : Controller
    {

        private readonly ApplicationDbContext _context;
        public ProducerReviewController(ApplicationDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {


            var reuslt = _context.Contracts.Include(e=>e.ContractRequests).ThenInclude(e=>e.Producer)
                .Include(e => e.ContractRequests).ThenInclude(e => e.Investor)
                .Include(e => e.ContractRequests).ThenInclude(e => e.product)

                .OrderByDescending(c => c.Id).
                ToList();
            return View(reuslt);

        }

        public IActionResult Add(int id)
        {
            if (id == 0)
                return View(new ProducerReview());
            else
                return View(_context.ProducerReviews.Find(id));

        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> AddOrEdit(ProducerReview producerReviewS)
        {

            if (ModelState.IsValid)
            {
                if (producerReviewS.Id == 0)
                    _context.ProducerReviews.Add(producerReviewS);
                else
                    _context.ProducerReviews.Update(producerReviewS);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(producerReviewS);

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
