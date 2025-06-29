using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using ContractFarming.Models;
using ContractFarming.Models.Helper;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Logging;

namespace ContractFarming.Areas.Identity.Pages.Account
{
    [AllowAnonymous]
    public class RegisterModel : PageModel
    {
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ILogger<RegisterModel> _logger;
        private readonly IEmailSender _emailSender;
        private readonly IWebHostEnvironment _hosting;

        public RegisterModel(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            ILogger<RegisterModel> logger,
            IEmailSender emailSender, IWebHostEnvironment hosting = null)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _logger = logger;
            _emailSender = emailSender;
            _hosting = hosting;
        }

        [BindProperty]
        public InputModel Input { get; set; }

        public string ReturnUrl { get; set; }

        public IList<AuthenticationScheme> ExternalLogins { get; set; }

        public class InputModel
        {
            //[Required]
            [Display(Name = "الاسم الكامل")]
            public string FullName { get; set; }
            [Required]
            [Display(Name = "البريد الالكتروني")]
            public string Email { get; set; }

           

            [Required]
            [StringLength(100, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 6)]
            [DataType(DataType.Password)]
            [Display(Name = "كلمة المرور")]
            public string Password { get; set; }

            [DataType(DataType.Password)]
            [Display(Name = "تأكيد كلمة المرور")]
            [Compare("Password", ErrorMessage = "كلمة المرور وتأكيد كلمة المرور ليسا متطابقان")]
            public string ConfirmPassword { get; set; }

            [Display(Name = "اسم الشركة")]
            [Required(ErrorMessage = " يرجى إدخال اسم الشركة ")]
            public string Company { get; set; }
            [Required(ErrorMessage = " يرجى إدخال رقم السجل التجاري ")]
            [Display(Name = "رقم السجل التجاري")]
            public int CommercialRecordNo { get; set; }
            //[Required(ErrorMessage = " يرجى اختيار ملف ")]
            [Display(Name = "صورة السجل التجاري")]
            public byte[] CommercialRecordPhoto { get; set; }
            

            public string Discriminator { get; set; } = "Investor";

        }

        public async Task OnGetAsync(string returnUrl = null)
        {
            ReturnUrl = returnUrl;
            ExternalLogins = (await _signInManager.GetExternalAuthenticationSchemesAsync()).ToList();
        }

        public async Task<IActionResult> OnPostAsync(string returnUrl = null)
        {
            returnUrl = returnUrl ?? Url.Content("~/");
            ExternalLogins = (await _signInManager.GetExternalAuthenticationSchemesAsync()).ToList();
           

            if (ModelState.IsValid)
            {
                //IdentityUser<string> Discriminator="Investor"; 
                 var user = new ApplicationUser { Discriminator="Investor", FullName= Input.FullName , UserName = new MailAddress(Input.Email).User, Email = Input.Email ,IsActive=true,ContractId=1 /*Company=Input.Company*/
                //,CommercialRecordNo = Input.CommercialRecordNo,
                //    CommercialRecordPhoto=Input.CommercialRecordPhoto
                };
                //if (Request.Form.Files.Count > 0)
                //{
                //    var file = Request.Form.Files.FirstOrDefault();
                    //check file size and extension

                //    using (var dataStream = new MemoryStream())
                //    {
                //        await file.CopyToAsync(dataStream);
                //        user.CommercialRecordPhoto = dataStream.ToArray();
                //    }
                //    await _userManager.UpdateAsync(user);
                //}

                var result = await _userManager.CreateAsync(user, Input.Password);

                if (result.Succeeded)
                {
                    _logger.LogInformation("User created a new account with password.");

                    var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                    code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));
                    var callbackUrl = Url.Page(
                        "/Account/ConfirmEmail",
                        pageHandler: null,
                        values: new { area = "Identity", userId = user.Id, code = code, returnUrl = returnUrl },
                        protocol: Request.Scheme);

                    await _emailSender.SendEmailAsync(Input.Email, "Confirm your email",
                        $"Please confirm your account by <a href='{HtmlEncoder.Default.Encode(callbackUrl)}'>clicking here</a>.");

                    if (_userManager.Options.SignIn.RequireConfirmedAccount)
                    {
                        return RedirectToPage("RegisterConfirmation", new { email = Input.Email, returnUrl = returnUrl });
                    }
                    else
                    {
                        await _signInManager.SignInAsync(user, isPersistent: false);
                        return LocalRedirect(returnUrl);
                    }
                }
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(string.Empty, error.Description);
                }
            }

            // If we got this far, something failed, redisplay form
            return Page();
        }
    }
}
