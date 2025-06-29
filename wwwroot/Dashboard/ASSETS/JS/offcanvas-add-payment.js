/Dashboard**
 * Add Payment Offcanvas
 */Dashboard

'use strict';

(function () {
  /Dashboard/Dashboard Invoice amount
  const paymentAmount = document.querySelector('.invoice-amount');

  /Dashboard/Dashboard Prefix
  if (paymentAmount) {
    new Cleave(paymentAmount, {
      numeral: true
    });
  }

  /Dashboard/Dashboard Datepicker
  const date = new Date(),
    invoiceDateList = document.querySelectorAll('.invoice-date');

  if (invoiceDateList) {
    invoiceDateList.forEach(function (invoiceDateEl) {
      invoiceDateEl.flatpickr({
        monthSelectorType: 'static',
        defaultDate: date
      });
    });
  }
})();
