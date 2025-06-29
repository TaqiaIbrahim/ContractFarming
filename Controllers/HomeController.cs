using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ContractFarming.Models;
using Microsoft.AspNetCore.Authorization;
using ContractFarming.Data;

namespace ContractFarming.Controllers
{
    [AllowAnonymous]
    public class HomeController : Controller
    {
     
        private readonly ApplicationDbContext _context;

     

        public HomeController(ApplicationDbContext context)
        {
            _context = context;
        }
      

      
        public IActionResult Index()
        {
            return View(_context.Advertisments.ToList());
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
