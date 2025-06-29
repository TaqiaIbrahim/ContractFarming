using ContractFarming.Models;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace ContractFarming.Service
{
    public class NotiService 
    {
        //List<Notification> _oNotifications = new List<Notification>();
        //public List<Notification> GetNotifications(int nToUserId, bool bIsGetOnlyUnread)
        //{
        //    _oNotifications = new List<Notification>();
        //    using (IDbConnection con = new SqlConnection(Configuration))
        //    {
        //        if (con.State == ConnectionState.Closed) con.Open();
        //        var oNotis = con.Query<Notification>("Select *from View_Notification where ToUserId =" + nToUserId).ToList();
        //        if (oNotis != null && oNotis.Count() > 0)
        //        {
        //            _oNotifications = oNotis;
        //        }
        //        return _oNotifications;
        //    }
        //}
    }
}
