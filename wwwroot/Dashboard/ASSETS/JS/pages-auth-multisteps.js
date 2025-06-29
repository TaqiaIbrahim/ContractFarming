/Dashboard**
 *  Page auth register multi-steps
 */Dashboard

'use strict';

/Dashboard/Dashboard Select2 (jquery)
$(function () {
  var select2 = $('.select2');

  /Dashboard/Dashboard select2
  if (select2.length) {
    select2.each(function () {
      var $this = $(this);
      $this.wrap('<div class="position-relative"></Dashboarddiv>');
      $this.select2({
        placeholder: 'Select an country',
        dropdownParent: $this.parent()
      });
    });
  }
});

/Dashboard/Dashboard Multi Steps Validation
/Dashboard/Dashboard --------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function (e) {
  (function () {
    const stepsValidation = document.querySelector('#multiStepsValidation');
    if (typeof stepsValidation !== undefined && stepsValidation !== null) {
      /Dashboard/Dashboard Multi Steps form
      const stepsValidationForm = stepsValidation.querySelector('#multiStepsForm');
      /Dashboard/Dashboard Form steps
      const stepsValidationFormStep1 = stepsValidationForm.querySelector('#accountDetailsValidation');
      const stepsValidationFormStep2 = stepsValidationForm.querySelector('#personalInfoValidation');
      const stepsValidationFormStep3 = stepsValidationForm.querySelector('#billingLinksValidation');
      /Dashboard/Dashboard Multi steps next prev button
      const stepsValidationNext = [].slice.call(stepsValidationForm.querySelectorAll('.btn-next'));
      const stepsValidationPrev = [].slice.call(stepsValidationForm.querySelectorAll('.btn-prev'));

      const multiStepsExDate = document.querySelector('.multi-steps-exp-date'),
        multiStepsCvv = document.querySelector('.multi-steps-cvv'),
        multiStepsMobile = document.querySelector('.multi-steps-mobile'),
        multiStepsPincode = document.querySelector('.multi-steps-pincode'),
        multiStepsCard = document.querySelector('.multi-steps-card');

      /Dashboard/Dashboard Expiry Date Mask
      if (multiStepsExDate) {
        new Cleave(multiStepsExDate, {
          date: true,
          delimiter: '/Dashboard',
          datePattern: ['m', 'y']
        });
      }

      /Dashboard/Dashboard CVV
      if (multiStepsCvv) {
        new Cleave(multiStepsCvv, {
          numeral: true,
          numeralPositiveOnly: true
        });
      }

      /Dashboard/Dashboard Mobile
      if (multiStepsMobile) {
        new Cleave(multiStepsMobile, {
          phone: true,
          phoneRegionCode: 'US'
        });
      }

      /Dashboard/Dashboard Pincode
      if (multiStepsPincode) {
        new Cleave(multiStepsPincode, {
          delimiter: '',
          numeral: true
        });
      }

      /Dashboard/Dashboard Credit Card
      if (multiStepsCard) {
        new Cleave(multiStepsCard, {
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

      let validationStepper = new Stepper(stepsValidation, {
        linear: true
      });

      /Dashboard/Dashboard Account details
      const multiSteps1 = FormValidation.formValidation(stepsValidationFormStep1, {
        fields: {
          multiStepsUsername: {
            validators: {
              notEmpty: {
                message: 'Please enter username'
              },
              stringLength: {
                min: 6,
                max: 30,
                message: 'The name must be more than 6 and less than 30 characters long'
              },
              regexp: {
                regexp: /Dashboard^[a-zA-Z0-9 ]+$/Dashboard,
                message: 'The name can only consist of alphabetical, number and space'
              }
            }
          },
          multiStepsEmail: {
            validators: {
              notEmpty: {
                message: 'Please enter email address'
              },
              emailAddress: {
                message: 'The value is not a valid email address'
              }
            }
          },
          multiStepsPass: {
            validators: {
              notEmpty: {
                message: 'Please enter password'
              }
            }
          },
          multiStepsConfirmPass: {
            validators: {
              notEmpty: {
                message: 'Confirm Password is required'
              },
              identical: {
                compare: function () {
                  return stepsValidationFormStep1.querySelector('[name="multiStepsPass"]').value;
                },
                message: 'The password and its confirm are not the same'
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
            if (e.element.parentElement.classList.contains('input-group')) {
              e.element.parentElement.insertAdjacentElement('afterend', e.messageElement);
            }
          });
        }
      }).on('core.form.valid', function () {
        /Dashboard/Dashboard Jump to the next step when all fields in the current step are valid
        validationStepper.next();
      });

      /Dashboard/Dashboard Personal info
      const multiSteps2 = FormValidation.formValidation(stepsValidationFormStep2, {
        fields: {
          multiStepsFirstName: {
            validators: {
              notEmpty: {
                message: 'Please enter first name'
              }
            }
          },
          multiStepsAddress: {
            validators: {
              notEmpty: {
                message: 'Please enter your address'
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
              /Dashboard/Dashboard field is the field name
              /Dashboard/Dashboard ele is the field element
              switch (field) {
                case 'multiStepsFirstName':
                  return '.col-sm-6';
                case 'multiStepsAddress':
                  return '.col-md-12';
                default:
                  return '.row';
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

      /Dashboard/Dashboard Social links
      const multiSteps3 = FormValidation.formValidation(stepsValidationFormStep3, {
        fields: {
          multiStepsCard: {
            validators: {
              notEmpty: {
                message: 'Please enter card number'
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
              /Dashboard/Dashboard field is the field name
              /Dashboard/Dashboard ele is the field element
              switch (field) {
                case 'multiStepsCard':
                  return '.col-md-12';

                default:
                  return '.col-dm-6';
              }
            }
          }),
          autoFocus: new FormValidation.plugins.AutoFocus(),
          submitButton: new FormValidation.plugins.SubmitButton()
        },
        init: instance => {
          instance.on('plugins.message.placed', function (e) {
            if (e.element.parentElement.classList.contains('input-group')) {
              e.element.parentElement.insertAdjacentElement('afterend', e.messageElement);
            }
          });
        }
      }).on('core.form.valid', function () {
        /Dashboard/Dashboard You can submit the form
        /Dashboard/Dashboard stepsValidationForm.submit()
        /Dashboard/Dashboard or send the form data to server via an Ajax request
        /Dashboard/Dashboard To make the demo simple, I just placed an alert
        alert('Submitted..!!');
      });

      stepsValidationNext.forEach(item => {
        item.addEventListener('click', event => {
          /Dashboard/Dashboard When click the Next button, we will validate the current step
          switch (validationStepper._currentIndex) {
            case 0:
              multiSteps1.validate();
              break;

            case 1:
              multiSteps2.validate();
              break;

            case 2:
              multiSteps3.validate();
              break;

            default:
              break;
          }
        });
      });

      stepsValidationPrev.forEach(item => {
        item.addEventListener('click', event => {
          switch (validationStepper._currentIndex) {
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
});
