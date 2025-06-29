using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using ContractFarming.Data;
using ContractFarming.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ContractFarming.Areas.Producer.Controllers
{
    [Area("Producer")]
    public class InstallmentController : Controller
    {
        private readonly ApplicationDbContext _context;
        public InstallmentController(ApplicationDbContext context)
        {
            _context = context;

        }
        public IActionResult Index()
        {
            return View(_context.Installments.Include(e=>e.Contract).ToList());
        }
        
        public IActionResult InKindInstallment()
        {
            return View(_context.InKindInstallments.ToList());
        }
        public IActionResult Financial_Installment()
        {
            return View(_context.Financial_Installments.ToList());
        }
        public async Task<IActionResult> Confirm(int id)
        {
            var installment = _context.Installments.Find(id);
            if(installment.Id>0)
            installment.ProducerConfirm = 1;
            _context.Update(installment);
            await  _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));



        }
        public async Task<IActionResult> Refuse(int id)
        {
            var installment = _context.Installments.Find(id);
            if (installment.Id > 0)
                installment.ProducerConfirm = 2;
            _context.Update(installment);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));



        }


    }
}
