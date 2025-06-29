using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ContractFarming.Constants
{
    public enum Modules
    {


        [Display(Name = "واجهات المنتجات")]
        Products,
        [Display(Name = "واجهات الاعلانات")]
        Advertisments,
        [Display(Name = "واجهات العقود")]
        Contracts,
        [Display(Name = "واجهات السائقين")]
        Drivers,
        [Display(Name = "واجهات تقييم العقود")]
        ContractReview,
        [Display(Name = "واجهات الأقساط المالية")]
        Financial_installment,
        [Display(Name = "واجهات الأقساط العينية")]
        InkindInstallment,
        [Display(Name = "واجهات تقييم الأقساط")]
        InstallmentReview,
        [Display(Name = "واجهات البطائق الإستثمارية")]
        InvestmentCard,
        [Display(Name = "واجهات المناطق")]
        Location,
        [Display(Name = "واجهات الاسعار")]
        Prices,
        [Display(Name = "واجهات مستلزمات الإنتاج")]
        ProductionSupply,
        [Display(Name = "واجهات بيان الإستلام")]
        ReciptStatment,
        [Display(Name = "واجهات البلاغات")]
        Report,
        [Display(Name = "واجهات المناديب")]
        Representative,
        [Display(Name = "واجهات المواسم")]
        Season,
        [Display(Name = "واجهات إرشادات البذور")]
        SeedInstruction
    }





}
