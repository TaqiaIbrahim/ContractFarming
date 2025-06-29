/Dashboard**
 * Edit User
 */Dashboard

'use strict';

/Dashboard/Dashboard Select2 (jquery)
$(function () {
  const select2 = $('.select2');

  /Dashboard/Dashboard Select2 Country
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

document.addEventListener('DOMContentLoaded', function (e) {
  (function () {
    /Dashboard/Dashboard variables
    const modalEditUserTaxID = document.querySelector('.modal-edit-tax-id');
    const modalEditUserPhone = document.querySelector('.phone-number-mask');

    /Dashboard/Dashboard Prefix
    if (modalEditUserTaxID) {
      new Cleave(modalEditUserTaxID, {
        prefix: 'TIN',
        blocks: [3, 3, 3, 4],
        uppercase: true
      });
    }

    /Dashboard/Dashboard Phone Number Input Mask
    if (modalEditUserPhone) {
      new Cleave(modalEditUserPhone, {
        phone: true,
        phoneRegionCode: 'US'
      });
    }

    /Dashboard/Dashboard Edit user form validation
    FormValidation.formValidation(document.getElementById('editUserForm'), {
      fields: {
        modalEditUserFirstName: {
          validators: {
            notEmpty: {
              message: 'Please enter your first name'
            },
            regexp: {
              regexp: /Dashboard^[a-zA-Zs]+$/Dashboard,
              message: 'The first name can only consist of alphabetical'
            }
          }
        },
        modalEditUserLastName: {
          validators: {
            notEmpty: {
              message: 'Please enter your last name'
            },
            regexp: {
              regexp: /Dashboard^[a-zA-Zs]+$/Dashboard,
              message: 'The last name can only consist of alphabetical'
            }
          }
        },
        modalEditUserName: {
          validators: {
            notEmpty: {
              message: 'Please enter your username'
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
      }
    });
  })();
});
