using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContractFarming.Models;
using Microsoft.EntityFrameworkCore;
using ContractFarming.ViewModel;
using ContractFarming.Data;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;

namespace ContractFarming.Areas.Investor.Controllers

{
    [Area("Investor")]
    public class RepresentativeManagmentController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly ApplicationDbContext _context;

        public ApplicationDbContext Context { get; }

        public RepresentativeManagmentController(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager, ApplicationDbContext context)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _context = context;
        }
        public async Task<IActionResult> Index()
        {
            var users = await _userManager.Users.Select(user => new UserViewModel
            {
                Id = user.Id,
                Name = user.FullName,
                UserName = user.UserName,
                Email = user.Email,
                IsActive = user.IsActive,
                PhoneNumber=user.PhoneNumber,
            
                Contracts = user.Contract,
              

                Discriminator = user.Discriminator,
                Roles = _userManager.GetRolesAsync(user).Result

            }


            ).ToListAsync();
           
            return View(users);

        }


        //    public IActionResult Add(int id = 0)
        //    {
        //        var viewmodel = new RepresentativVM
        //        {
        //            Contract = _context.Contracts.ToList()
        //        };
        //        ViewBag.Contract = viewmodel.Contract;

        //        if (id == 0)
        //            return View(new Representative());
        //        else
        //            return View(_context.Representatives.Find(id));

        //    }

        //[HttpPost]
        //[ValidateAntiForgeryToken]

        //public async Task<IActionResult>Add(Representative representative)
        //    {
        //        if(ModelState.IsValid)
        //        {
        //            if (representative.Id == 0)
        //            {
        //                representative.InvestorId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
        //                _context.Representatives.Add(representative);
        //            }

        //            else
        //                _context.Update(representative);
        //          await  _context.SaveChangesAsync();
        //            return RedirectToAction(nameof(Index));

        //        }
        //        return View(representative);
        //    }


        //public async Task<IActionResult> Delete(int id=0)
        //{
        //    var representative = _context.Representatives.Find(id);
        //    _context.Representatives.Remove(representative);
        //    await _context.SaveChangesAsync();
        //    return RedirectToAction(nameof(Index));
        //}













        public async Task<IActionResult> Add()
        {

            var roles = await _roleManager.Roles.Select(r => new CheckBoxViewModel { DisplayValue = r.Name }).ToListAsync();

            var viewModel = new AddUserViewModel
            {

                Roles = roles,

                Contracts=_context.Contracts.ToList()


            };
            ViewBag.Contract = viewModel.Contracts;

           
                return View(viewModel);
            

        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Add(AddUserViewModel model)
        {
           //= User.FindFirst(ClaimTypes.NameIdentifier).Value;
            if (!ModelState.IsValid)
                return View(model);
            //if (!model.Roles.Any(r => r.IsSelected))
            //{
            //    ModelState.AddModelError("Roles", "يرجى اختيار صلاحية ");
            //    return View(model);
            //}
            //if (await _userManager.FindByEmailAsync(model.Email) != null)
            //{
            //    ModelState.AddModelError("Email", "هذا البريد الالكتروني موجود بالفعل ");
            //    return View(model);
            //}
            //if (await _userManager.FindByNameAsync(model.UserName) != null)
            //{
            //    ModelState.AddModelError("UserName", "اسم المستخدم موجود بالفعل ");
            //    return View(model);
            //}


            var user = new ApplicationUser
            {
                UserName = model.UserName,
                FullName = model.Name,
                //Type = model.Type,
                Email = model.Email,
                Discriminator = "Representative",
              ContractId=model.ContractId,
                Contract =model.Contract,
                PhoneNumber=model.PhoneNumber,
      

            };
            var result = await _userManager.CreateAsync(user, model.Password);
          


            if (!result.Succeeded)
            {
                //foreach (var error in result.Errors)
                //{
                //    ModelState.AddModelError("Roles", error.Description);
                //}
                return View(model);
            }

            //await _userManager.AddToRolesAsync(user, model.Roles.Where(r => r.IsSelected).Select(r => r.DisplayValue));
            return RedirectToAction(nameof(Index));




        }

        //public async Task<IActionResult> AddOrEdit(string userId)
        //{
        //    var user = await _userManager.FindByIdAsync(userId);

        //    if (user == null)
        //        return NotFound();



        //    var viewModel = new AddUserViewModel
        //    {
        //        Id = userId,
        //        Name = user.FullName,
        //        UserName = user.UserName,
        //        //Type=user.Type,
        //        Email = user.Email,
        //        IsActive = user.IsActive,
        //        Discriminator = "Representative",
        //        Contract = user.Contract,
        //        Contracts =_context.Contracts.ToList()
                

        //    };
        //    ViewBag.Contract = viewModel.Contracts;

        //    return View(viewModel);

        //}

        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> AddOrEdit(AddUserViewModel model)
        //{
        //    if (!ModelState.IsValid)
        //        return View(model);

        //    var user = await _userManager.FindByIdAsync(model.Id);
        //    if (user == null)
        //        return NotFound();
        //    var userWithsameEmail = await _userManager.FindByEmailAsync(model.Email);
        //    if (userWithsameEmail != null && userWithsameEmail.Id != model.Id)
        //    {
        //        ModelState.AddModelError("Email", "هذا البريد الالكتروني لشخص اخر");
        //        return View(model);
        //    }

        //    var userWithsameUserName = await _userManager.FindByNameAsync(model.UserName);
        //    if (userWithsameUserName != null && userWithsameUserName.Id != model.Id)
        //    {
        //        ModelState.AddModelError("Email", " اسم المستخدم هذا لشخص اخر");
        //        return View(model);
        //    }
        //    user.Id = model.Id;
        //    user.FullName = model.Name;
        //    user.UserName = model.UserName;
        //    //user.Type = model.Type;
        //    user.Email = model.Email;
        //    user.PhoneNumber = model.PhoneNumber;
        //    user.ContractId = model.ContractId;
        //    user.Contract = model.Contract;
           
        //    user.IsActive = model.IsActive;


        //    await _userManager.UpdateAsync(user);

        //    return RedirectToAction(nameof(Index));
        //}


        
        public async Task<IActionResult> Delete(string userId)
        {
            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
                return NotFound();

            await _userManager.DeleteAsync(user);
            return RedirectToAction(nameof(Index));
        }

    }

}
