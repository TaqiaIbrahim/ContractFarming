using Microsoft.AspNetCore.Identity.UI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace ContractFarming.Service
{
    public class EmailSender 
    {
        //public  async Task SendEmailAsync(string email, string subject, string htmlMessage)
        //{
        //    var fromMail = "TaqiaEbrahim@gmail.com";
        //    var fromPassword = "";
        //    var message = new MailMessage();
        //    message.From = new MailAddress(fromMail);
        //    message.Subject = subject;
        //    message.To.Add(email);
        //    message.Body = $"<html><body>{htmlMessage}</body></html>";
        //    message.IsBodyHtml = true;

        //    var smtpClient = new SmtpClient("smtp-mail.outlook.com")
        //    {
        //        Port = 587,
        //        Credentials = new NetworkCredential(fromMail, fromPassword),
        //        EnableSsl = true
        //    };

        //    smtpClient.Send(message);
        //}
    }
    
}
