using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContractFarming.Models;
using ContractFarming.Data;
using Microsoft.AspNetCore.Mvc;

namespace ContractFarming.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class SeasonController : Controller
    {
        
        private readonly ApplicationDbContext _context;
            public SeasonController(ApplicationDbContext context)
            {
                _context = context;
            }

            public IActionResult Index( string search)
            {
          
            return View(_context.Seasons.ToList());
            }
            public IActionResult AddOrEdit(int id)
            {
                if (id == 0)
                    return View(new Season());
                else
                    return View(_context.Seasons.Find(id));
            }
            [HttpPost]
            [ValidateAntiForgeryToken]
            public async Task<IActionResult> AddOrEdit(Season season)
            {
                if (ModelState.IsValid)
                {
                    if (season.Id == 0)
                        _context.Add(season);
                    else
                        _context.Update(season);
                    await _context.SaveChangesAsync();
                    return RedirectToAction(nameof(Index));

                }
                return View(season);

            }
            public async Task<IActionResult> Delete(int id = 0)
            {
                var season = _context.Seasons.Find(id);
                _context.Seasons.Remove(season);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));

            }
        //public List<Season> Search(string search)
        //{
        //    return _context.Seasons.Where(s => s.SeasonName.Contains(search)).ToList();

        //}
        }
    }

    

