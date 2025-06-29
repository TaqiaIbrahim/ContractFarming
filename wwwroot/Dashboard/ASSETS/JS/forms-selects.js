/Dashboard**
 * Selects & Tags
 */Dashboard

'use strict';

$(function () {
  const selectPicker = $('.selectpicker'),
    select2 = $('.select2'),
    select2Icons = $('.select2-icons');

  /Dashboard/Dashboard Bootstrap Select
  /Dashboard/Dashboard --------------------------------------------------------------------
  if (selectPicker.length) {
    selectPicker.selectpicker();
  }

  /Dashboard/Dashboard Select2
  /Dashboard/Dashboard --------------------------------------------------------------------

  /Dashboard/Dashboard Default
  if (select2.length) {
    select2.each(function () {
      var $this = $(this);
      $this.wrap('<div class="position-relative"></Dashboarddiv>').select2({
        placeholder: 'Select value',
        dropdownParent: $this.parent()
      });
    });
  }

  /Dashboard/Dashboard Select2 Icons
  if (select2Icons.length) {
    /Dashboard/Dashboard custom template to render icons
    function renderIcons(option) {
      if (!option.id) {
        return option.text;
      }
      var $icon = "<i class='bx bxl-" + $(option.element).data('icon') + " me-2'></Dashboardi>" + option.text;

      return $icon;
    }
    select2Icons.wrap('<div class="position-relative"></Dashboarddiv>').select2({
      templateResult: renderIcons,
      templateSelection: renderIcons,
      escapeMarkup: function (es) {
        return es;
      }
    });
  }
});
