using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContractFarming.Models;
using ContractFarming.ViewModel;
using ContractFarming.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ContractFarming.Areas.Producer.Controllers
{
    [Area("Producer")]
    public class ReciptStatementController : Controller
    {

        private readonly ApplicationDbContext _context;
        public ReciptStatementController(ApplicationDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            return View(_context.ReciptStatements.Include(e => e.Contract).ToList());

        }
        public IActionResult AddOrEdit(int id)
        {

            var ViewModel = new FormViewDataModels {

                Contracts = _context.Contracts.ToList() 
            };
            ViewBag.Contract = ViewModel.Contracts;
            if (id == 0)
                return View(new ReciptStatement());
            else
                return View(_context.ReciptStatements.Find(id));
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> AddOrEdit(ReciptStatement reciptStatement)
        {

            if (ModelState.IsValid)
            {
                if (reciptStatement.Id == 0)
                    _context.Add(reciptStatement);
                else
                    _context.Update(reciptStatement);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));

            }
            return View(reciptStatement);

        }
        public async Task<IActionResult> Delete(int id = 0)
        {
            var reciptStatement = _context.ReciptStatements.Find(id);
            _context.ReciptStatements.Remove(reciptStatement);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));

        }
    
}
}
