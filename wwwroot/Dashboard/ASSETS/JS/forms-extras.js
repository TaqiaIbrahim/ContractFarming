/Dashboard**
 * Form Extras
 */Dashboard

'use strict';

(function () {
  const textarea = document.querySelector('#autosize-demo'),
    creditCard = document.querySelector('.credit-card-mask'),
    phoneMask = document.querySelector('.phone-number-mask'),
    dateMask = document.querySelector('.date-mask'),
    timeMask = document.querySelector('.time-mask'),
    numeralMask = document.querySelector('.numeral-mask'),
    blockMask = document.querySelector('.block-mask'),
    delimiterMask = document.querySelector('.delimiter-mask'),
    customDelimiter = document.querySelector('.custom-delimiter-mask'),
    prefixMask = document.querySelector('.prefix-mask');

  /Dashboard/Dashboard Autosize
  /Dashboard/Dashboard --------------------------------------------------------------------
  if (textarea) {
    autosize(textarea);
  }

  /Dashboard/Dashboard Cleave JS Input Mask
  /Dashboard/Dashboard --------------------------------------------------------------------

  /Dashboard/Dashboard Credit Card
  if (creditCard) {
    new Cleave(creditCard, {
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

  /Dashboard/Dashboard Phone Number
  if (phoneMask) {
    new Cleave(phoneMask, {
      phone: true,
      phoneRegionCode: 'US'
    });
  }

  /Dashboard/Dashboard Date
  if (dateMask) {
    new Cleave(dateMask, {
      date: true,
      delimiter: '-',
      datePattern: ['Y', 'm', 'd']
    });
  }

  /Dashboard/Dashboard Time
  if (timeMask) {
    new Cleave(timeMask, {
      time: true,
      timePattern: ['h', 'm', 's']
    });
  }

  /Dashboard/DashboardNumeral
  if (numeralMask) {
    new Cleave(numeralMask, {
      numeral: true,
      numeralThousandsGroupStyle: 'thousand'
    });
  }

  /Dashboard/DashboardBlock
  if (blockMask) {
    new Cleave(blockMask, {
      blocks: [4, 3, 3],
      uppercase: true
    });
  }

  /Dashboard/Dashboard Delimiter
  if (delimiterMask) {
    new Cleave(delimiterMask, {
      delimiter: '·',
      blocks: [3, 3, 3],
      uppercase: true
    });
  }

  /Dashboard/Dashboard Custom Delimiter
  if (customDelimiter) {
    new Cleave(customDelimiter, {
      delimiters: ['.', '.', '-'],
      blocks: [3, 3, 3, 2],
      uppercase: true
    });
  }

  /Dashboard/Dashboard Prefix
  if (prefixMask) {
    new Cleave(prefixMask, {
      prefix: '+63',
      blocks: [3, 3, 3, 4],
      uppercase: true
    });
  }
})();

/Dashboard/Dashboard bootstrap-maxlength & repeater (jquery)
$(function () {
  var maxlengthInput = $('.bootstrap-maxlength-example'),
    formRepeater = $('.form-repeater');

  /Dashboard/Dashboard Bootstrap Max Length
  /Dashboard/Dashboard --------------------------------------------------------------------
  if (maxlengthInput.length) {
    maxlengthInput.each(function () {
      $(this).maxlength({
        warningClass: 'label label-success bg-success text-white',
        limitReachedClass: 'label label-danger',
        separator: ' out of ',
        preText: 'You typed ',
        postText: ' chars available.',
        validate: true,
        threshold: +this.getAttribute('maxlength')
      });
    });
  }

  /Dashboard/Dashboard Form Repeater
  /Dashboard/Dashboard ! Using jQuery each loop to add dynamic id and class for inputs. You may need to improve it based on form fields.
  /Dashboard/Dashboard -----------------------------------------------------------------------------------------------------------------

  if (formRepeater.length) {
    var row = 2;
    var col = 1;
    formRepeater.on('submit', function (e) {
      e.preventDefault();
    });
    formRepeater.repeater({
      show: function () {
        var fromControl = $(this).find('.form-control, .form-select');
        var formLabel = $(this).find('.form-label');

        fromControl.each(function (i) {
          var id = 'form-repeater-' + row + '-' + col;
          $(fromControl[i]).attr('id', id);
          $(formLabel[i]).attr('for', id);
          col++;
        });

        row++;

        $(this).slideDown();
      },
      hide: function (e) {
        confirm('Are you sure you want to delete this element?') && $(this).slideUp(e);
      }
    });
  }
});
