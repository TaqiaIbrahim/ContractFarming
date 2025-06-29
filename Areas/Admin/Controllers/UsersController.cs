using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContractFarming.Models;
using ContractFarming.ViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ContractFarming.Areas.Admin.Controllers
{

    
    [Area("Admin")]
   
    public class UsersController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        public UsersController(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
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
                
                //Discriminator = user.Discriminator,
                Roles = _userManager.GetRolesAsync(user).Result

            }


            ).ToListAsync();
         
            return View(users);
           
        }
       

        public async Task<IActionResult> Add()
        {
            var roles = await _roleManager.Roles.Select(r=>new CheckBoxViewModel { DisplayValue=r.Name }).ToListAsync();

            var viewModel = new AddUserViewModel
            {
              
                Roles = roles,
                

            };

            return View(viewModel);


        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Add(AddUserViewModel model)
        {
            if (!ModelState.IsValid)
                return View(model);
            if (!model.Roles.Any(r => r.IsSelected))
            {
                ModelState.AddModelError("Roles", "يرجى اختيار صلاحية ");
                return View(model);
            }
            if (await _userManager.FindByEmailAsync(model.Email) != null)
            {
                ModelState.AddModelError("Email", "هذا البريد الالكتروني موجود بالفعل ");
                return View(model);
            }
            if (await _userManager.FindByNameAsync(model.UserName) != null)
            {
                ModelState.AddModelError("UserName", "اسم المستخدم موجود بالفعل ");
                return View(model);
            }


            var user = new ApplicationUser
            {
                UserName = model.UserName,
                FullName = model.Name,
                //Type = model.Type,
                ContractId=1,
                Email = model.Email,
                Discriminator = "ManagmentStructure",

            };
            var result = await _userManager.CreateAsync(user, model.Password);

            if (!result.Succeeded)
            {
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError("Roles", error.Description);
                }
                return View(model); }

            await _userManager.AddToRolesAsync(user, model.Roles.Where(r => r.IsSelected).Select(r => r.DisplayValue));
            return RedirectToAction(nameof(Index));



            
        }

        public async Task<IActionResult> Edit(string userId)
        {
            var user = await _userManager.FindByIdAsync(userId);

            if (user == null)
                return NotFound();

          

            var viewModel = new ProfileFormViewModel
            {
                Id = userId,
                Name=user.FullName,
                UserName = user.UserName,
                //Type=user.Type,
                Email=user.Email,
                IsActive=user.IsActive,
                Discriminator = " ManagmentStructure",

            };

            return View(viewModel);

        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(ProfileFormViewModel model)
        {
            if (!ModelState.IsValid)
                return View(model);

            var user = await _userManager.FindByIdAsync(model.Id);
            if (user == null)
                return NotFound();
            var userWithsameEmail = await _userManager.FindByEmailAsync(model.Email);
            if(userWithsameEmail != null && userWithsameEmail.Id != model.Id)
            {
                ModelState.AddModelError("Email", "هذا البريد الالكتروني لشخص اخر");
                return View(model);
            }

            var userWithsameUserName = await _userManager.FindByNameAsync(model.UserName);
            if (userWithsameUserName != null && userWithsameUserName.Id != model.Id)
            {
                ModelState.AddModelError("Email", " اسم المستخدم هذا لشخص اخر");
                return View(model);
            }
            user.Id = model.Id;
            user.FullName = model.Name;
            user.UserName = model.UserName;
            //user.Type = model.Type;
            user.Email = model.Email;
            user.IsActive = model.IsActive;


            await _userManager.UpdateAsync(user);

            return RedirectToAction(nameof(Index));
        }


        public async Task<IActionResult> ManageRoles(string userId)
        {
            var user = await _userManager.FindByIdAsync(userId);

            if (user == null)
                return NotFound();

            var roles = await _roleManager.Roles.ToListAsync();

            var viewModel = new UserRoleViewModel
            {
                UserId = user.Id,
                UserName = user.UserName,
                Roles = roles.Select(role => new CheckBoxViewModel
                {
                    
                    DisplayValue = role.Name,
                    IsSelected = _userManager.IsInRoleAsync(user, role.Name).Result
                }).ToList()
            };

            return View(viewModel);

        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> ManageRoles(UserRoleViewModel model)
        {
            var user = await _userManager.FindByIdAsync(model.UserId);
            if (user == null)
                return NotFound();
            var userRoles = await _userManager.GetRolesAsync(user);

            foreach (var role in model.Roles)
            {
                if (userRoles.Any(r => r == role.DisplayValue) && !role.IsSelected)
                    await _userManager.RemoveFromRoleAsync(user, role.DisplayValue);
                if (!userRoles.Any(r => r == role.DisplayValue) && role.IsSelected)
                    await _userManager.AddToRoleAsync(user, role.DisplayValue);

            }

            return RedirectToAction(nameof(Index));
        }
        public async Task<IActionResult> Delete(string userId)
        {
            var user =  await _userManager.FindByIdAsync(userId);
            if (user == null)
                return NotFound();

             await _userManager.DeleteAsync(user);
            return RedirectToAction(nameof(Index));
        }
    }
}
