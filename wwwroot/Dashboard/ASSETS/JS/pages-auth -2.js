/Dashboard**
 *  Pages Authentication
 */Dashboard

'use strict';
const formAuthentication = document.querySelector('#formAuthentication');

document.addEventListener('DOMContentLoaded', function (e) {
  (function () {
    /Dashboard/Dashboard Form validation for Add new record
    if (formAuthentication) {
      const fv = FormValidation.formValidation(formAuthentication, {
        fields: {
          username: {
            validators: {
              notEmpty: {
                message: 'الرجاء إدخال رقم الهاتف'
              },
              stringLength: {
                min: 9,
                message: 'يجب أن يكون رقم الهاتف أكثر من 9 أحرف'
              }
            }
          },
          email: {
            validators: {
              notEmpty: {
                message: ''
              },
              emailAddress: {
                message: 'رجاءا أدخل بريدك الإلكتروني'
              }
            }
          },
          'email-username': {
            validators: {
              notEmpty: {
                message: 'الرجاء إدخال رقم الهاتف'
              },
              stringLength: {
                min: 9,
                message: 'يجب أن يكون رقم الهاتف أكثر من 9 أحرف'
              }
            }
          },
          password: {
            validators: {
              notEmpty: {
                message: 'من فضلك أدخل رقم المعرف'
              },
             
            }
          },
          'confirm-password': {
            validators: {
              notEmpty: {
                message: 'الرجاء تأكيد كلمة المرور'
              },
              identical: {
                compare: function () {
                  return formAuthentication.querySelector('[name="password"]').value;
                },
                message: 'كلمة المرور وتأكيدها ليسا متطابقين'
              },
              stringLength: {
                min: 6,
                message: 'يجب أن تكون كلمة المرور أكثر من 6 أحرف'
              }
            }
          },
          terms: {
            validators: {
              notEmpty: {
                message: 'الرجاء الموافقة على الشروط والأحكام'
              }
            }
          }
        },
        plugins: {
          trigger: new FormValidation.plugins.Trigger(),
          bootstrap5: new FormValidation.plugins.Bootstrap5({
            eleValidClass: '',
            rowSelector: '.mb-3'
          }),
          submitButton: new FormValidation.plugins.SubmitButton(),

          defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
          autoFocus: new FormValidation.plugins.AutoFocus()
        },
        init: instance => {
          instance.on('plugins.message.placed', function (e) {
            if (e.element.parentElement.classList.contains('input-group')) {
              e.element.parentElement.insertAdjacentElement('afterend', e.messageElement);
            }
          });
        }
      });
    }

    /Dashboard/Dashboard  Two Steps Verification
    const numeralMask = document.querySelectorAll('.numeral-mask');

    /Dashboard/Dashboard Verification masking
    if (numeralMask.length) {
      numeralMask.forEach(e => {
        new Cleave(e, {
          numeral: true
        });
      });
    }
  })();
});
