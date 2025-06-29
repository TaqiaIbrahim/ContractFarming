/Dashboard**
 *  Form Wizard
 */Dashboard

'use strict';

(function () {
  /Dashboard/Dashboard flatpickrRange
  const flatpickrRange = document.querySelector('#dealDuration');
  if (flatpickrRange) {
    flatpickrRange.flatpickr({
      mode: 'range'
    });
  }

  /Dashboard/Dashboard Init custom option check
  window.Helpers.initCustomOptionCheck();
  /Dashboard/Dashboard Vertical Wizard
  /Dashboard/Dashboard --------------------------------------------------------------------

  const wizardCreateDeal = document.querySelector('#wizard-create-deal');
  if (typeof wizardCreateDeal !== undefined && wizardCreateDeal !== null) {
    /Dashboard/Dashboard Wizard form
    const wizardCreateDealForm = wizardCreateDeal.querySelector('#wizard-create-deal-form');
    /Dashboard/Dashboard Wizard steps
    const wizardCreateDealFormStep1 = wizardCreateDealForm.querySelector('#deal-type');
    const wizardCreateDealFormStep2 = wizardCreateDealForm.querySelector('#deal-details');
    const wizardCreateDealFormStep3 = wizardCreateDealForm.querySelector('#deal-usage');
    const wizardCreateDealFormStep4 = wizardCreateDealForm.querySelector('#review-complete');
    /Dashboard/Dashboard Wizard next prev button
    const wizardCreateDealNext = [].slice.call(wizardCreateDealForm.querySelectorAll('.btn-next'));
    const wizardCreateDealPrev = [].slice.call(wizardCreateDealForm.querySelectorAll('.btn-prev'));

    let validationStepper = new Stepper(wizardCreateDeal, {
      linear: true
    });

    /Dashboard/Dashboard Deal Type
    const FormValidation1 = FormValidation.formValidation(wizardCreateDealFormStep1, {
      fields: {
        dealAmount: {
          validators: {
            notEmpty: {
              message: 'Please enter amount'
            },
            numeric: {
              message: 'The amount must be a number'
            }
          }
        },
        dealRegion: {
          validators: {
            notEmpty: {
              message: 'Please select region'
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
          rowSelector: '.col-sm-6'
        }),
        autoFocus: new FormValidation.plugins.AutoFocus(),
        submitButton: new FormValidation.plugins.SubmitButton()
      }
    }).on('core.form.valid', function () {
      /Dashboard/Dashboard Jump to the next step when all fields in the current step are valid
      validationStepper.next();
    });

    /Dashboard/Dashboard select2 (Region)
    const dealRegion = $('#dealRegion');
    if (dealRegion.length) {
      dealRegion.wrap('<div class="position-relative"></Dashboarddiv>');
      dealRegion
        .select2({
          placeholder: 'Select an region',
          dropdownParent: dealRegion.parent()
        })
        .on('change.select2', function () {
          /Dashboard/Dashboard Revalidate the region field when an option is chosen
          FormValidation1.revalidateField('dealRegion');
        });
    }

    /Dashboard/Dashboard Deal Details
    const FormValidation2 = FormValidation.formValidation(wizardCreateDealFormStep2, {
      fields: {
        /Dashboard/Dashboard * Validate the fields here based on your requirements
        dealTitle: {
          validators: {
            notEmpty: {
              message: 'Please enter deal title'
            }
          }
        },
        dealCode: {
          validators: {
            notEmpty: {
              message: 'Please enter deal code'
            },
            stringLength: {
              min: 4,
              max: 10,
              message: 'The deal code must be more than 4 and less than 10 characters long'
            },
            regexp: {
              regexp: /Dashboard^[A-Z0-9]+$/Dashboard,
              message: 'The deal code can only consist of capital alphabetical and number'
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
          rowSelector: '.col-sm-6'
        }),
        autoFocus: new FormValidation.plugins.AutoFocus(),
        submitButton: new FormValidation.plugins.SubmitButton()
      }
    }).on('core.form.valid', function () {
      /Dashboard/Dashboard Jump to the next step when all fields in the current step are valid
      validationStepper.next();
    });

    /Dashboard/Dashboard select2 (Offered Item)
    const dealOfferedItem = $('#dealOfferedItem');
    if (dealOfferedItem.length) {
      dealOfferedItem.wrap('<div class="position-relative"></Dashboarddiv>');
      dealOfferedItem
        .select2({
          placeholder: 'Select an offered item',
          dropdownParent: dealOfferedItem.parent()
        })
        .on('change.select2', function () {
          /Dashboard/Dashboard Revalidate the field if needed when an option is chosen
          /Dashboard/Dashboard FormValidation2.revalidateField('dealOfferedItem');
        });
    }

    /Dashboard/Dashboard Deal Usage
    const FormValidation3 = FormValidation.formValidation(wizardCreateDealFormStep3, {
      fields: {
        /Dashboard/Dashboard * Validate the fields here based on your requirements
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          /Dashboard/Dashboard Use this for enabling/Dashboardchanging valid/Dashboardinvalid class
          /Dashboard/Dashboard eleInvalidClass: '',
          eleValidClass: '',
          rowSelector: '.col-sm-6'
        }),
        autoFocus: new FormValidation.plugins.AutoFocus(),
        submitButton: new FormValidation.plugins.SubmitButton()
      }
    }).on('core.form.valid', function () {
      validationStepper.next();
    });

    /Dashboard/Dashboard Deal Usage
    const FormValidation4 = FormValidation.formValidation(wizardCreateDealFormStep4, {
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
      /Dashboard/Dashboard wizardCreateDealForm.submit()
      /Dashboard/Dashboard or send the form data to server via an Ajax request
      /Dashboard/Dashboard To make the demo simple, I just placed an alert
      alert('Submitted..!!');
    });

    wizardCreateDealNext.forEach(item => {
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

    wizardCreateDealPrev.forEach(item => {
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
