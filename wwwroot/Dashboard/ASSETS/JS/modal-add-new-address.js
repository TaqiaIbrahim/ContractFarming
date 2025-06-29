/Dashboard**
 * Add New Address
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

/Dashboard/Dashboard Add New Address form validation
document.addEventListener('DOMContentLoaded', function () {
  (function () {
    /Dashboard/Dashboard initCustomOptionCheck on modal show to update the custom select
    let addNewAddress = document.getElementById('addNewAddress');
    addNewAddress.addEventListener('show.bs.modal', function (event) {
      /Dashboard/Dashboard Init custom option check
      window.Helpers.initCustomOptionCheck();
    });

    FormValidation.formValidation(document.getElementById('addNewAddressForm'), {
      fields: {
        modalAddressFirstName: {
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
        modalAddressLastName: {
          validators: {
            notEmpty: {
              message: 'Please enter your last name'
            },
            regexp: {
              regexp: /Dashboard^[a-zA-Zs]+$/Dashboard,
              message: 'The last name can only consist of alphabetical'
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
