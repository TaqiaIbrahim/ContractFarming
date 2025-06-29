using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContractFarming.Filters
{
    public class PermissionRequirment:IAuthorizationRequirement
    {
        public string Permission { get; private set; }
        public PermissionRequirment(string permission)
        {
            Permission = permission;
        }

    }
}
