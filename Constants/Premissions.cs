using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContractFarming.Constants
{
    public static class Premissions
    {
        public static List<string> GeneratePremissionsList(string module, string display_module)
        {
            return new List<string>()
            {
                $"Premissions.{module}.عرض.{display_module}",
                $"Premissions.{module}.إضافة.{display_module}",
                $"Premissions.{module}.تعديل.{display_module}",
                $"Premissions.{module}.حذف.{display_module}",
                //$"Premissions.{module}.AddOrEdit.{display_module}"
            };
        }

        public static List<string> GenerateAllPermissions()
        {
            var allPermissions = new List<string>();
            var modules = Enum.GetValues(typeof(Modules));

            foreach (var module in modules)
            {
                var descriptionAttributes = EnumHelper<Modules>.GetDisplayValue((Modules)module);
                allPermissions.AddRange(GeneratePremissionsList(module.ToString(), descriptionAttributes.ToString()));

            }
            return allPermissions;

        }
        public static class Driver
        {
            public const string View = "Permissions.Drivers.View";
            public const string Edit = "Permissions.Drivers.Edit";
            public const string Add = "Permissions.Drivers.Add";
            public const string Delete = "Permissions.Drivers.Delete";
        }

    }
}

