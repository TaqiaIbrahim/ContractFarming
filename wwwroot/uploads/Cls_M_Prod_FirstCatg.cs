using System;
using ProductionManagment.Models;
using ProductionManagment.ViewModel;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductionManagment.BL
{
    public class Cls_M_Prod_FirstCatg
    {

        private readonly ApplicationDBcontext _applicationDBcontext;
        public Cls_M_Prod_FirstCatg(ApplicationDBcontext applicationDBcontext)
        {
            _applicationDBcontext = applicationDBcontext;

        }
        //العرض
        public ProdFirstCatgVM Getall()
        {
            ProdFirstCatgVM viewmodel = new ProdFirstCatgVM();

            viewmodel.FirstCatginfo = _applicationDBcontext.M_Prod_FirstCatgs.OrderByDescending(a => a.FC_CatgNo).ToList();

            return viewmodel;

        }
       //الإضافة
        public bool Add(ProdFirstCatgVM FirstCatg)
        {
            try
            {
                _applicationDBcontext.M_Prod_FirstCatgs.Add(FirstCatg.FirstCatg);
                _applicationDBcontext.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }

        }

      //التعديل
        public bool Edite(M_Prod_FirstCatg firstCatg)
        {
            try
            {
                _applicationDBcontext.Entry(firstCatg).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                _applicationDBcontext.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        //الحذف
        public bool Delete(int Id)
        {
            try
            {
                ProdFirstCatgVM viewmodel = new ProdFirstCatgVM();
                viewmodel.FirstCatg = _applicationDBcontext.M_Prod_FirstCatgs.Where(a => a.FC_CatgNo == Id).FirstOrDefault();
                _applicationDBcontext.M_Prod_FirstCatgs.Remove(viewmodel.FirstCatg);
                _applicationDBcontext.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }

        }
    }
}



