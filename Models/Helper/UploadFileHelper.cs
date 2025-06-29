using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace ContractFarming.Models.Helper
{
    public class UploadFileHelper
    {
        public static string UploadFile(IFormFile file,string PathUpload)
        {
            if (file != null)
            {
                string fullPath = Path.Combine(PathUpload, file.FileName);
                file.CopyTo(new FileStream(fullPath, FileMode.Create));

                return file.FileName;
            }
            return null;
        }

        public static string UploadFile(IFormFile file, string PathUpload, string imageUrl)
        {
            if (file != null)
            {
                string newPath = Path.Combine(PathUpload, file.FileName);
                if (imageUrl != null){
                    string oldPath = Path.Combine(PathUpload, imageUrl);
                    if (oldPath != newPath)
                    {
                        System.IO.File.Delete(oldPath);
                        file.CopyTo(new FileStream(newPath, FileMode.Create));
                    }
                }
                else
                {
                    file.CopyTo(new FileStream(newPath, FileMode.Create));
                }
                return file.FileName;
            }

            return imageUrl;
        }
    }
}
