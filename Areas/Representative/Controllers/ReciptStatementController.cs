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
    public class ReciptStatementController : Controller
    {
        private readonly ApplicationDbContext _context;
       public ReciptStatementController(ApplicationDbContext context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            var result = _context.ReciptStatements
                .Include(e=>e.Contract)
                .OrderByDescending(a=>a.Id)
                .ToList();
            return View(result);
        }

        public async Task<IActionResult>ConfirmAction(int id)
        {
            var result = _context.ReciptStatements.Find(id);
            if(result.Id>0)
                result.InvestorConfirm = true;
                _context.Update(result);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            
        }

    }
}
