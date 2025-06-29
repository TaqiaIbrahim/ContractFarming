using ContractFarming.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContractFarming.Areas.Investor.Controllers
{
    [Area("Investor")]
    public class HomeController : Controller
    {
       

            private readonly ApplicationDbContext _context;

            public HomeController(ApplicationDbContext context)
            {
                _context = context;

            }

            public IActionResult Index()
        {
            return View();
        }

        public IActionResult Count()
        {
            return View(_context.InvestmentCards.Count());
        }
    }
}
