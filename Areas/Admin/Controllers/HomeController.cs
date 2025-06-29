using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContractFarming.Data;
using ContractFarming.Models;
using ContractFarming.ViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ContractFarming.Areas.Admin.Controllers
{
    //[Authorize(Roles = "مسؤول الموقع")]
    [Area("Admin")]
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

        


    }
}
