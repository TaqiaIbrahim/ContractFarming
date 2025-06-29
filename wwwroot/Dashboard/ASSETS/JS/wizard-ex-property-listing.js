/Dashboard**
 *  Form Wizard
 */Dashboard

'use strict';

(function () {
  /Dashboard/Dashboard Init custom option check
  window.Helpers.initCustomOptionCheck();

  const flatpickrRange = document.querySelector('.flatpickr'),
    phoneMask = document.querySelector('.contact-number-mask'),
    plCountry = $('#plCountry'),
    plFurnishingDetailsSuggestionEl = document.querySelector('#plFurnishingDetails');

  /Dashboard/Dashboard Phone Number Input Mask
  if (phoneMask) {
    new Cleave(phoneMask, {
      phone: true,
      phoneRegionCode: 'US'
    });
  }

  /Dashboard/Dashboard select2 (Country)

  if (plCountry) {
    plCountry.wrap('<div class="position-relative"></Dashboarddiv>');
    plCountry.select2({
      placeholder: 'Select country',
      dropdownParent: plCountry.parent()
    });
  }

  if (flatpickrRange) {
    flatpickrRange.flatpickr();
  }

  /Dashboard/Dashboard Tagify (Furnishing details)
  const furnishingList = [
    'Fridge',
    'TV',
    'AC',
    'WiFi',
    'RO',
    'Washing Machine',
    'Sofa',
    'Bed',
    'Dining Table',
    'Microwave',
    'Cupboard'
  ];
  if (plFurnishingDetailsSuggestionEl) {
    const plFurnishingDetailsSuggestion = new Tagify(plFurnishingDetailsSuggestionEl, {
      whitelist: furnishingList,
      maxTags: 10,
      dropdown: {
        maxItems: 20,
        classname: 'tags-inline',
        enabled: 0,
        closeOnSelect: false
      }
    });
  }

  /Dashboard/Dashboard Vertical Wizard
  /Dashboard/Dashboard --------------------------------------------------------------------

  const wizardPropertyListing = document.querySelector('#wizard-property-listing');
  if (typeof wizardPropertyListing !== undefined && wizardPropertyListing !== null) {
    /Dashboard/Dashboard Wizard form
    const wizardPropertyListingForm = wizardPropertyListing.querySelector('#wizard-property-listing-form');
    /Dashboard/Dashboard Wizard steps
    const wizardPropertyListingFormStep1 = wizardPropertyListingForm.querySelector('#personal-details');
    const wizardPropertyListingFormStep2 = wizardPropertyListingForm.querySelector('#property-details');
    const wizardPropertyListingFormStep3 = wizardPropertyListingForm.querySelector('#property-features');
    const wizardPropertyListingFormStep4 = wizardPropertyListingForm.querySelector('#property-area');
    const wizardPropertyListingFormStep5 = wizardPropertyListingForm.querySelector('#price-details');
    /Dashboard/Dashboard Wizard next prev button
    const wizardPropertyListingNext = [].slice.call(wizardPropertyListingForm.querySelectorAll('.btn-next'));
    const wizardPropertyListingPrev = [].slice.call(wizardPropertyListingForm.querySelectorAll('.btn-prev'));

    const validationStepper = new Stepper(wizardPropertyListing, {
      linear: true
    });

    /Dashboard/Dashboard Personal Details
    const FormValidation1 = FormValidation.formValidation(wizardPropertyListingFormStep1, {
      fields: {
        /Dashboard/Dashboard * Validate the fields here based on your requirements
        plFirstName: {
          validators: {
            notEmpty: {
              message: 'Please enter your first name'
            }
          }
        },
        plLastName: {
          validators: {
            notEmpty: {
              message: 'Please enter your first name'
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
      },
      init: instance => {
        instance.on('plugins.message.placed', function (e) {
          /Dashboard/Dashboard* Move the error message out of the `input-group` element
          if (e.element.parentElement.classList.contains('input-group')) {
            e.element.parentElement.insertAdjacentElement('afterend', e.messageElement);
          }
        });
      }
    }).on('core.form.valid', function () {
      /Dashboard/Dashboard Jump to the next step when all fields in the current step are valid
      validationStepper.next();
    });

    /Dashboard/Dashboard Property Details
    const FormValidation2 = FormValidation.formValidation(wizardPropertyListingFormStep2, {
      fields: {
        /Dashboard/Dashboard * Validate the fields here based on your requirements

        plPropertyType: {
          validators: {
            notEmpty: {
              message: 'Please select property type'
            }
          }
        },
        plZipCode: {
          validators: {
            notEmpty: {
              message: 'Please enter zip code'
            },
            stringLength: {
              min: 4,
              max: 10,
              message: 'The zip code must be more than 4 and less than 10 characters long'
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
          rowSelector: function (field, ele) {
            /Dashboard/Dashboard field is the field name & ele is the field element
            switch (field) {
              case 'plAddress':
                return '.col-lg-12';
              default:
                return '.col-sm-6';
            }
          }
        }),
        autoFocus: new FormValidation.plugins.AutoFocus(),
        submitButton: new FormValidation.plugins.SubmitButton()
      }
    }).on('core.form.valid', function () {
      /Dashboard/Dashboard Jump to the next step when all fields in the current step are valid
      validationStepper.next();
    });

    /Dashboard/Dashboard select2 (Property type)
    const plPropertyType = $('#plPropertyType');
    if (plPropertyType.length) {
      plPropertyType.wrap('<div class="position-relative"></Dashboarddiv>');
      plPropertyType
        .select2({
          placeholder: 'Select property type',
          dropdownParent: plPropertyType.parent()
        })
        .on('change.select2', function () {
          /Dashboard/Dashboard Revalidate the color field when an option is chosen
          FormValidation2.revalidateField('plPropertyType');
        });
    }

    /Dashboard/Dashboard Property Features
    const FormValidation3 = FormValidation.formValidation(wizardPropertyListingFormStep3, {
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

    /Dashboard/Dashboard Property Area
    const FormValidation4 = FormValidation.formValidation(wizardPropertyListingFormStep4, {
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
      /Dashboard/Dashboard Jump to the next step when all fields in the current step are valid
      validationStepper.next();
    });

    /Dashboard/Dashboard Price Details
    const FormValidation5 = FormValidation.formValidation(wizardPropertyListingFormStep5, {
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
      /Dashboard/Dashboard wizardPropertyListingForm.submit()
      /Dashboard/Dashboard or send the form data to server via an Ajax request
      /Dashboard/Dashboard To make the demo simple, I just placed an alert
      alert('Submitted..!!');
    });

    wizardPropertyListingNext.forEach(item => {
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

          case 4:
            FormValidation5.validate();
            break;

          default:
            break;
        }
      });
    });

    wizardPropertyListingPrev.forEach(item => {
      item.addEventListener('click', event => {
        switch (validationStepper._currentIndex) {
          case 4:
            validationStepper.previous();
            break;

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
