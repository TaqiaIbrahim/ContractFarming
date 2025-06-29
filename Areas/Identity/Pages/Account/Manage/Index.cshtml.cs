using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using ContractFarming.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ContractFarming.Areas.Identity.Pages.Account.Manage
{
    public partial class IndexModel : PageModel
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;

        public IndexModel(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [Display(Name = "اسم المستخدم")]
        public string Username { get; set; }

        [TempData]
        public string StatusMessage {   get; set; }

        [BindProperty]
        public InputModel Input { get; set; }

        public class InputModel
        {
            [Display(Name = "الاسم الكامل")]
            public string FullName { get; set; }
            [Phone]
            [Display(Name = "رقم الهاتف")]
            public string PhoneNumber { get; set; }
            [Display(Name = "اسم الشركة")]
            public string Company { get; set; }
            [Display(Name = "رقم السجل التجاري")]
            public int CommercialRecordNo { get; set; }
            [Display(Name = "صورة السجل التجاري ")]
            public byte[] CommercialRecordPhoto { get; set; }
            [Display(Name = "الصورة الشخصية")]
            public byte[] ProfilePicture{ get; set; }
        }

        private async Task LoadAsync(ApplicationUser user)
        {
            var userName = await _userManager.GetUserNameAsync(user);
            var phoneNumber = await _userManager.GetPhoneNumberAsync(user);

            Username = userName;

            Input = new InputModel
            {
                FullName = user.FullName,

                PhoneNumber = phoneNumber,
                ProfilePicture=user.ProfilePicture,
                Company = user.Company,
              
               



            };

        }

        public async Task<IActionResult> OnGetAsync()
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null)
            {
                return NotFound($"Unable to load user with ID '{_userManager.GetUserId(User)}'.");
            }

            await LoadAsync(user);
            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null)
            {
                return NotFound($"Unable to load user with ID '{_userManager.GetUserId(User)}'.");
            }

            if (!ModelState.IsValid)
            {
                await LoadAsync(user);
                return Page();
            }

            var phoneNumber = await _userManager.GetPhoneNumberAsync(user);
            var FullName = user.FullName;
            if(Input.FullName!= FullName)
            {
                user.FullName = Input.FullName;
                await _userManager.UpdateAsync(user);
            }
            var Company = user.Company;
            if (Input.Company != Company)
            {
                user.Company = Input.Company;
                await _userManager.UpdateAsync(user);
            }
          
            if (Input.PhoneNumber != phoneNumber)
            {
                var setPhoneResult = await _userManager.SetPhoneNumberAsync(user, Input.PhoneNumber);
                if (!setPhoneResult.Succeeded)
                {
                    StatusMessage = "Unexpected error when trying to set phone number.";
                    return RedirectToPage();
                }
            }
            if (Request.Form.Files.Count > 0)
            {
                var file = Request.Form.Files.FirstOrDefault();
                //check file size and extension

                using(var  dataStream=new MemoryStream() )
                {
                    await file.CopyToAsync(dataStream);
                    user.ProfilePicture = dataStream.ToArray();
                }
                await _userManager.UpdateAsync(user);
            }

            await _signInManager.RefreshSignInAsync(user);
            StatusMessage = "تم تعديل الملف الشخصي بنجاح";
            return RedirectToPage();
        }
    }
}
