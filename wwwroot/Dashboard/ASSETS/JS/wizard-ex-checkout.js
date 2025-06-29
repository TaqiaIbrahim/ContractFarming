/Dashboard**
 *  Form Wizard
 */Dashboard

'use strict';

/Dashboard/Dashboard rateyo (jquery)
$(function () {
  var readOnlyRating = $('.read-only-ratings');

  /Dashboard/Dashboard Star rating
  if (readOnlyRating) {
    readOnlyRating.rateYo({
      rtl: isRtl,
      rating: 4,
      starWidth: '20px'
    });
  }
});

(function () {
  /Dashboard/Dashboard Init custom option check
  window.Helpers.initCustomOptionCheck();

  /Dashboard/Dashboard libs
  const creditCardMask = document.querySelector('.credit-card-mask'),
    expiryDateMask = document.querySelector('.expiry-date-mask'),
    cvvMask = document.querySelector('.cvv-code-mask');

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
      numeral: true,
      numeralPositiveOnly: true
    });
  }

  /Dashboard/Dashboard Wizard Checkout
  /Dashboard/Dashboard --------------------------------------------------------------------

  const wizardCheckout = document.querySelector('#wizard-checkout');
  if (typeof wizardCheckout !== undefined && wizardCheckout !== null) {
    /Dashboard/Dashboard Wizard form
    const wizardCheckoutForm = wizardCheckout.querySelector('#wizard-checkout-form');
    /Dashboard/Dashboard Wizard steps
    const wizardCheckoutFormStep1 = wizardCheckoutForm.querySelector('#checkout-cart');
    const wizardCheckoutFormStep2 = wizardCheckoutForm.querySelector('#checkout-address');
    const wizardCheckoutFormStep3 = wizardCheckoutForm.querySelector('#checkout-payment');
    const wizardCheckoutFormStep4 = wizardCheckoutForm.querySelector('#checkout-confirmation');
    /Dashboard/Dashboard Wizard next prev button
    const wizardCheckoutNext = [].slice.call(wizardCheckoutForm.querySelectorAll('.btn-next'));
    const wizardCheckoutPrev = [].slice.call(wizardCheckoutForm.querySelectorAll('.btn-prev'));

    let validationStepper = new Stepper(wizardCheckout, {
      linear: false
    });

    /Dashboard/Dashboard Cart
    const FormValidation1 = FormValidation.formValidation(wizardCheckoutFormStep1, {
      fields: {
        /Dashboard/Dashboard * Validate the fields here based on your requirements
      },

      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          /Dashboard/Dashboard Use this for enabling/Dashboardchanging valid/Dashboardinvalid class
          /Dashboard/Dashboard eleInvalidClass: '',
          eleValidClass: ''
          /Dashboard/Dashboard rowSelector: '.col-lg-6'
        }),
        autoFocus: new FormValidation.plugins.AutoFocus(),
        submitButton: new FormValidation.plugins.SubmitButton()
      }
    }).on('core.form.valid', function () {
      /Dashboard/Dashboard Jump to the next step when all fields in the current step are valid
      validationStepper.next();
    });

    /Dashboard/Dashboard Address
    const FormValidation2 = FormValidation.formValidation(wizardCheckoutFormStep2, {
      fields: {
        /Dashboard/Dashboard * Validate the fields here based on your requirements
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          /Dashboard/Dashboard Use this for enabling/Dashboardchanging valid/Dashboardinvalid class
          /Dashboard/Dashboard eleInvalidClass: '',
          eleValidClass: ''
          /Dashboard/Dashboard rowSelector: '.col-lg-6'
        }),
        autoFocus: new FormValidation.plugins.AutoFocus(),
        submitButton: new FormValidation.plugins.SubmitButton()
      }
    }).on('core.form.valid', function () {
      /Dashboard/Dashboard Jump to the next step when all fields in the current step are valid
      validationStepper.next();
    });

    /Dashboard/Dashboard Payment
    const FormValidation3 = FormValidation.formValidation(wizardCheckoutFormStep3, {
      fields: {
        /Dashboard/Dashboard * Validate the fields here based on your requirements
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          /Dashboard/Dashboard Use this for enabling/Dashboardchanging valid/Dashboardinvalid class
          /Dashboard/Dashboard eleInvalidClass: '',
          eleValidClass: ''
          /Dashboard/Dashboard rowSelector: '.col-lg-6'
        }),
        autoFocus: new FormValidation.plugins.AutoFocus(),
        submitButton: new FormValidation.plugins.SubmitButton()
      }
    }).on('core.form.valid', function () {
      validationStepper.next();
    });

    /Dashboard/Dashboard Confirmation
    const FormValidation4 = FormValidation.formValidation(wizardCheckoutFormStep4, {
      fields: {
        /Dashboard/Dashboard * Validate the fields here based on your requirements
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          /Dashboard/Dashboard Use this for enabling/Dashboardchanging valid/Dashboardinvalid class
          /Dashboard/Dashboard eleInvalidClass: '',
          eleValidClass: '',
          rowSelector: '.col-md-12'
        }),
        autoFocus: new FormValidation.plugins.AutoFocus(),
        submitButton: new FormValidation.plugins.SubmitButton()
      }
    }).on('core.form.valid', function () {
      /Dashboard/Dashboard You can submit the form
      /Dashboard/Dashboard wizardCheckoutForm.submit()
      /Dashboard/Dashboard or send the form data to server via an Ajax request
      /Dashboard/Dashboard To make the demo simple, I just placed an alert
      alert('Submitted..!!');
    });

    wizardCheckoutNext.forEach(item => {
      item.addEventListener('click', event => {
        /Dashboard/Dashboard When click the Next button, we will validate the current step
        switch (validationStepper._currentIndex) {
          case 0:
            FormValidation1.validate();
            break;

          case 1:
            FormValidation2.validate();
            break;

          case 2:
            FormValidation3.validate();
            break;

          case 3:
            FormValidation4.validate();
            break;

          default:
            break;
        }
      });
    });

    wizardCheckoutPrev.forEach(item => {
      item.addEventListener('click', event => {
        switch (validationStepper._currentIndex) {
          case 3:
            validationStepper.previous();
            break;

          case 2:
            validationStepper.previous();
            break;

          case 1:
            validationStepper.previous();
            break;

          case 0:

          default:
            break;
        }
      });
    });
  }
})();
