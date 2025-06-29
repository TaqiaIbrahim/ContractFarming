/Dashboard**
 * Enable OTP
 */Dashboard

'use strict';

document.addEventListener('DOMContentLoaded', function (e) {
  (function () {
    const phoneMask = document.querySelector('.phone-number-otp-mask');

    /Dashboard/Dashboard Phone Number Input Mask
    if (phoneMask) {
      new Cleave(phoneMask, {
        phone: true,
        phoneRegionCode: 'US'
      });
    }

    /Dashboard/Dashboard Enable OTP form validation
    FormValidation.formValidation(document.getElementById('enableOTPForm'), {
      fields: {
        modalEnableOTPPhone: {
          validators: {
            notEmpty: {
              message: 'Please enter your mobile number'
            }
          }
        }
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          /Dashboard/Dashboard Use this for enabling/Dashboardchanging valid/Dashboardinvalid class
          /Dashboard/Dashboard eleInvalidClass: '',
          eleValidClass: '',
          rowSelector: '.col-12'
        }),
        submitButton: new FormValidation.plugins.SubmitButton(),
        /Dashboard/Dashboard Submit the form when all fields are valid
        /Dashboard/Dashboard defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
        autoFocus: new FormValidation.plugins.AutoFocus()
      },
      init: instance => {
        instance.on('plugins.message.placed', function (e) {
          /Dashboard/Dashboard* Move the error message out of the `input-group` element
          if (e.element.parentElement.classList.contains('input-group')) {
            e.element.parentElement.insertAdjacentElement('afterend', e.messageElement);
          }
        });
      }
    });
  })();
});
