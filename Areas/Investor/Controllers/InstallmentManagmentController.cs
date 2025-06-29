using ContractFarming.Data;
using ContractFarming.Models;
using ContractFarming.ViewModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContractFarming.Areas.Investor.Controllers
{
    [Area("Investor")]
    public class InstallmentManagmentController : Controller
    {
        private readonly ApplicationDbContext _context;

        public InstallmentManagmentController(ApplicationDbContext context)
        {
            _context = context;

        }


        //public IActionResult Index()
        //{
        //    var resulr = _context.Installments.Include(e=>e.Contract).ToList();
        //    return View(resulr);
        //}

        public IActionResult Index()
        {
            return View(_context.Installments.Include(e=>e.Contract).ToList());
        }

        public IActionResult AddInKindInstallment(int id)
        {

            var ViewModel = new AddinstallmentVM()
            {
                Contracts = _context.Contracts.ToList()
            };
            ViewBag.Contract = ViewModel.Contracts;
            if (id == 0)
                return View(new InKindInstallment());
            else
                return View(_context.InKindInstallments.Find(id));
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> AddInKindInstallment(InKindInstallment installment)
        {

            if (ModelState.IsValid)
            {
                if (installment.Id == 0)
                    _context.Add(installment);
                else
                    _context.Update(installment);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(installment);
        }

        public IActionResult AddFin(int id)
        {

            var ViewModel = new AddinstallmentVM()
            {
                Contracts = _context.Contracts.ToList()
            };
            ViewBag.Contract = ViewModel.Contracts;
            if (id == 0)
                return View(new Financial_Installment());
            else
                return View(_context.Financial_Installments.Find(id));
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> AddFin(Financial_Installment installment)
        {

            if (ModelState.IsValid)
            {
                if (installment.Id == 0) {
                    installment.Amount = installment.Amount;
                    _context.Add(installment);
                }
                   
                else
                    _context.Update(installment);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(installment);
        }
        public IActionResult InKindInstallment()
        {
            return View(_context.InKindInstallments.ToList());
        }
        public IActionResult Financial_Installment()
        {
            return View(_context.Financial_Installments.ToList());
        }
        public async Task<IActionResult> Delete(int id = 0)
        {
            var result = _context.Installments.Find(id);

            _context.Installments.Remove(result);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }


    }
}
