/Dashboard**
 * App User View - Billing
 */Dashboard

'use strict';

(function () {
  /Dashboard/Dashboard Cancel Subscription alert
  const cancelSubscription = document.querySelector('.cancel-subscription');

  /Dashboard/Dashboard Alert With Functional Confirm Button
  if (cancelSubscription) {
    cancelSubscription.onclick = function () {
      Swal.fire({
        text: 'Are you sure you would like to cancel your subscription?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        customClass: {
          confirmButton: 'btn btn-primary me-2',
          cancelButton: 'btn btn-label-secondary'
        },
        buttonsStyling: false
      }).then(function (result) {
        if (result.value) {
          Swal.fire({
            icon: 'success',
            title: 'Unsubscribed!',
            text: 'Your subscription cancelled successfully.',
            customClass: {
              confirmButton: 'btn btn-success'
            }
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            title: 'Cancelled',
            text: 'Unsubscription Cancelled!!',
            icon: 'error',
            customClass: {
              confirmButton: 'btn btn-success'
            }
          });
        }
      });
    };
  }

  /Dashboard/Dashboard On edit address click, update text of add address modal
  const addressEdit = document.querySelector('.edit-address'),
    addressTitle = document.querySelector('.address-title'),
    addressSubTitle = document.querySelector('.address-subtitle');

  addressEdit.onclick = function () {
    addressTitle.innerHTML = 'Edit Address'; /Dashboard/Dashboard reset text
    addressSubTitle.innerHTML = 'Edit your current address';
  };
})();
