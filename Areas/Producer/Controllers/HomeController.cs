using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ContractFarming.Areas.Producer.Controllers
{
    [Authorize(Roles = "منتج")]
    [Area("Producer")]
    public class HomeController : Controller
    {
   
        public IActionResult Index()
        {
            return View();
        }
    }
}
