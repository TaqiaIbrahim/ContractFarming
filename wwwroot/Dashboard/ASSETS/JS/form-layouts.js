/Dashboard**
 * Form Layout Vertical
 */Dashboard
'use strict';

(function () {
  const phoneMaskList = document.querySelectorAll('.phone-mask'),
    creditCardMask = document.querySelector('.credit-card-mask'),
    expiryDateMask = document.querySelector('.expiry-date-mask'),
    cvvMask = document.querySelector('.cvv-code-mask'),
    datepickerList = document.querySelectorAll('.dob-picker');

  /Dashboard/Dashboard Phone Number
  if (phoneMaskList) {
    phoneMaskList.forEach(function (phoneMask) {
      new Cleave(phoneMask, {
        phone: true,
        phoneRegionCode: 'US'
      });
    });
  }

  /Dashboard/Dashboard Credit Card
  if (creditCardMask) {
    new Cleave(creditCardMask, {
      creditCard: true,
      onCreditCardTypeChanged: function (type) {
        if (type != '' && type != 'unknown') {
          document.querySelector('.card-type').innerHTML =
            '<img src="' + assetsPath + 'img/Dashboardicons/Dashboardpayments/Dashboard' + type + '-cc.png" height="28"/Dashboard>';
        } else {
          document.querySelector('.card-type').innerHTML = '';
        }
      }
    });
  }

  /Dashboard/Dashboard Expiry Date Mask
  if (expiryDateMask) {
    new Cleave(expiryDateMask, {
      date: true,
      delimiter: '/Dashboard',
      datePattern: ['m', 'y']
    });
  }

  /Dashboard/Dashboard CVV
  if (cvvMask.length) {
    new Cleave(cvvMask, {
      numeral: true
    });
  }

  /Dashboard/Dashboard Flat Picker Birth Date
  if (datepickerList) {
    datepickerList.forEach(function (datepicker) {
      datepicker.flatpickr({
        monthSelectorType: 'static'
      });
    });
  }
})();

/Dashboard/Dashboard select2 (jquery)
$(function () {
  /Dashboard/Dashboard Form sticky actions
  var topSpacing;
  const stickyEl = $('.sticky-element');

  /Dashboard/Dashboard Init custom option check
  window.Helpers.initCustomOptionCheck();

  /Dashboard/Dashboard Set topSpacing if the navbar is fixed
  if (Helpers.isNavbarFixed()) {
    topSpacing = $('.layout-navbar').height() + 7;
  } else {
    topSpacing = 0;
  }

  /Dashboard/Dashboard sticky element init (Sticky Layout)
  if (stickyEl.length) {
    stickyEl.sticky({
      topSpacing: topSpacing,
      zIndex: 9
    });
  }

  /Dashboard/Dashboard Select2 Country
  var select2 = $('.select2');
  if (select2.length) {
    select2.each(function () {
      var $this = $(this);
      $this.wrap('<div class="position-relative"></Dashboarddiv>').select2({
        placeholder: 'Select value',
        dropdownParent: $this.parent()
      });
    });
  }
});
