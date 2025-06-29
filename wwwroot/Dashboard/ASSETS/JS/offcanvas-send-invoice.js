/Dashboard**
 * Send Invoice Offcanvas
 */Dashboard

'use strict';

(function () {
  /Dashboard/Dashboard Send invoice textarea
  const invoiceMsg = document.querySelector('#invoice-message');

  const trimMsg = invoiceMsg.textContent.replace(/Dashboard^\s+|\s+$/Dashboardgm, '');

  invoiceMsg.value = trimMsg;
})();
