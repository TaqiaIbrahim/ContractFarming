using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContractFarming.Areas.rpresentative.Controllers
{
    public class HomeController : Controller
    {
        [Area("Representative")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
