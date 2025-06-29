/Dashboard**
 * DataTables Basic
 */Dashboard

'use strict';

let fv, offCanvasEl;
document.addEventListener('DOMContentLoaded', function (e) {
  (function () {
    const formAddNewRecord = document.getElementById('form-add-new-record');

    setTimeout(() => {
      const newRecord = document.querySelector('.create-new'),
        offCanvasElement = document.querySelector('#add-new-record');

      /Dashboard/Dashboard To open offCanvas, to add new record
      if (newRecord) {
        newRecord.addEventListener('click', function () {
          offCanvasEl = new bootstrap.Offcanvas(offCanvasElement);
          /Dashboard/Dashboard Empty fields on offCanvas open
          (offCanvasElement.querySelector('.dt-full-name').value = ''),
            (offCanvasElement.querySelector('.dt-post').value = ''),
            (offCanvasElement.querySelector('.dt-email').value = ''),
            (offCanvasElement.querySelector('.dt-date').value = ''),
            (offCanvasElement.querySelector('.dt-salary').value = '');
          /Dashboard/Dashboard Open offCanvas with form
          offCanvasEl.show();
        });
      }
    }, 200);

    /Dashboard/Dashboard Form validation for Add new record
    fv = FormValidation.formValidation(formAddNewRecord, {
      fields: {
        governorate: {
          validators: {
            notEmpty: {
              message: 'يرجى اختيار محافظة'
            }
          }
        },
        Directorate: {
          validators: {
            notEmpty: {
              message: 'يرجى اختيار مديرية'
            }
          }
        },
        Isolation: {
          validators: {
            notEmpty: {
              message: 'يرجى اختيار عزلة'
            }
          }
        },
        village: {
          validators: {
            notEmpty: {
              message: 'يرجى اختيار قرية'
            }
          }
        },
        NameUser: {
          validators: {
            notEmpty: {
              message: 'يرجى اختيار اسم'
            }
          }
        },
        File: {
          validators: {
            notEmpty: {
              message: 'يرجى اختيار ملف'
            }
          }
        },


        Password: {
          validators: {
            notEmpty: {
              message: 'يرجى تعبئة كلمة المرور'
            }
          }
        },
        basicPhone: {
          validators: {
            notEmpty: {
              message: 'يرجى ادخال رقم الهاتف'
            }
          }
        },
        Country: {
          validators: {
            notEmpty: {
              message: 'يرجى أختيار المنطقة   '
            }
          }
        },

        basicEmail: {
          validators: {
            notEmpty: {
              message: 'يرجى ادخال البريد الإلكتروني'
            },
            emailAddress: {
              message: 'ليس عنوان بريد إلكتروني صالحًا'
            }
          }
        },

        basicDate: {
          validators: {
            notEmpty: {
              message: 'يرجى ادخال التاريخ'
            },
            date: {
              format: 'MM/DashboardDD/DashboardYYYY',
              message: 'القيمة ليست تاريخًا صالحًا'
            }
          }
        },
        UserType: {
          validators: {
            notEmpty: {
              message: 'يرجى أختيار نوع المستخدم'
            }
          }
        },
        Price: {
          validators: {
            notEmpty: {
              message: 'يرجى ادخال الرقم'
            }
          }
        },
        product: {
          validators: {
            notEmpty: {
              message: 'يرجى  أختيار منتج  '
            }
          }
        },
        month: {
          validators: {
            notEmpty: {
              message: 'يرجى  أختيار شهر  '
            }
          }
        },
        season: {
          validators: {
            notEmpty: {
              message: 'يرجى  أختيار شهر  '
            }
          }
        },
        climate: {
          validators: {
            notEmpty: {
              message: 'يرجى ادخال المناخ  '
            }
          }
        },
        quality: {
          validators: {
            notEmpty: {
              message: 'يرجى ادخال الجودة  '
            }
          }
        },
        
        signpost: {
          validators: {
            notEmpty: {
              message: 'يرجى إدخال المعالم  '
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
          rowSelector: '.col-sm-12'
        }),
        submitButton: new FormValidation.plugins.SubmitButton(),
        /Dashboard/Dashboard defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
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

    /Dashboard/Dashboard FlatPickr Initialization & Validation
    flatpickr(formAddNewRecord.querySelector('[name="basicDate"]'), {
      enableTime: false,
      /Dashboard/Dashboard See https:/Dashboard/Dashboardflatpickr.js.org/Dashboardformatting/Dashboard
      dateFormat: 'm/Dashboardd/DashboardY',
      /Dashboard/Dashboard After selecting a date, we need to revalidate the field
      onChange: function () {
        fv.revalidateField('basicDate');
      }
    });
  })();
});

/Dashboard/Dashboard datatable (jquery)
$(function () {
  var dt_basic_table = $('.datatables-basic'),
    dt_complex_header_table = $('.dt-complex-header'),
    dt_row_grouping_table = $('.dt-row-grouping'),
    dt_multilingual_table = $('.dt-multilingual'),
    dt_basic;

  /Dashboard/Dashboard DataTable with buttons
  /Dashboard/Dashboard --------------------------------------------------------------------

  if (dt_basic_table.length) {
    dt_basic = dt_basic_table.DataTable({
      ajax: assetsPath + '/Dashboardjson/Dashboardtable-datatable.json',
      columns: [
        { data: '' },
        { data: 'id' },
        { data: 'id' },
        { data: 'full_name' },
        { data: 'email' },
        { data: 'start_date' },
        { data: 'salary' },
        { data: 'status' },
        { data: '' }
      ],
      columnDefs: [
        {
          /Dashboard/Dashboard For Responsive
          className: 'control',
          orderable: false,
          searchable: false,
          responsivePriority: 2,
          targets: 0,
          render: function (data, type, full, meta) {
            return '';
          }
        },
        {
          /Dashboard/Dashboard For Checkboxes
          targets: 1,
          orderable: false,
          searchable: false,
          responsivePriority: 3,
          checkboxes: true,
          render: function () {
            return '<input type="checkbox" class="dt-checkboxes form-check-input">';
          },
          checkboxes: {
            selectAllRender: '<input type="checkbox" class="form-check-input">'
          }
        },
        {
          targets: 2,
          searchable: false,
          visible: false
        },
        {
          /Dashboard/Dashboard Avatar image/Dashboardbadge, Name and post
          targets: 3,
          responsivePriority: 4,
          render: function (data, type, full, meta) {
            var $user_img = full['avatar'],
              $name = full['full_name'],
              $post = full['post'];
            if ($user_img) {
              /Dashboard/Dashboard For Avatar image
              var $output =
                '<img src="' + assetsPath + '/Dashboardimg/Dashboardavatars/Dashboard' + $user_img + '" alt="Avatar" class="rounded-circle">';
            } else {
              /Dashboard/Dashboard For Avatar badge
              var stateNum = Math.floor(Math.random() * 6);
              var states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary'];
              var $state = states[stateNum],
                $name = full['full_name'],
                $initials = $name.match(/Dashboard\b\w/Dashboardg) || [];
              $initials = (($initials.shift() || '') + ($initials.pop() || '')).toUpperCase();
              $output = '<span class="avatar-initial rounded-circle bg-label-' + $state + '">' + $initials + '</Dashboardspan>';
            }
            /Dashboard/Dashboard Creates full output for row
            var $row_output =
              '<div class="d-flex justify-content-start align-items-center">' +
              '<div class="avatar-wrapper">' +
              '<div class="avatar me-2">' +
              $output +
              '</Dashboarddiv>' +
              '</Dashboarddiv>' +
              '<div class="d-flex flex-column">' +
              '<span class="emp_name text-truncate">' +
              $name +
              '</Dashboardspan>' +
              '<small class="emp_post text-truncate text-muted">' +
              $post +
              '</Dashboardsmall>' +
              '</Dashboarddiv>' +
              '</Dashboarddiv>';
            return $row_output;
          }
        },
        {
          responsivePriority: 1,
          targets: 4
        },
        {
          /Dashboard/Dashboard Label
          targets: -2,
          render: function (data, type, full, meta) {
            var $status_number = full['status'];
            var $status = {
              1: { title: 'Current', class: 'bg-label-primary' },
              2: { title: 'Professional', class: ' bg-label-success' },
              3: { title: 'Rejected', class: ' bg-label-danger' },
              4: { title: 'Resigned', class: ' bg-label-warning' },
              5: { title: 'Applied', class: ' bg-label-info' }
            };
            if (typeof $status[$status_number] === 'undefined') {
              return data;
            }
            return (
              '<span class="badge rounded-pill ' +
              $status[$status_number].class +
              '">' +
              $status[$status_number].title +
              '</Dashboardspan>'
            );
          }
        },
        {
          /Dashboard/Dashboard Actions
          targets: -1,
          title: 'Actions',
          orderable: false,
          searchable: false,
          render: function (data, type, full, meta) {
            return (
              '<div class="d-inline-block">' +
              '<a href="javascript:;" class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></Dashboardi></Dashboarda>' +
              '<ul class="dropdown-menu dropdown-menu-end">' +
              '<li><a href="javascript:;" class="dropdown-item">Details</Dashboarda></Dashboardli>' +
              '<li><a href="javascript:;" class="dropdown-item">Archive</Dashboarda></Dashboardli>' +
              '<div class="dropdown-divider"></Dashboarddiv>' +
              '<li><a href="javascript:;" class="dropdown-item text-danger delete-record">Delete</Dashboarda></Dashboardli>' +
              '</Dashboardul>' +
              '</Dashboarddiv>' +
              '<a href="javascript:;" class="btn btn-sm btn-icon item-edit"><i class="bx bxs-edit"></Dashboardi></Dashboarda>'
            );
          }
        }
      ],
      order: [[2, 'desc']],
      dom: '<"card-header flex-column flex-md-row"<"head-label text-center"><"dt-action-buttons text-end pt-3 pt-md-0"B>><"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
      displayLength: 7,
      lengthMenu: [7, 10, 25, 50, 75, 100],
      buttons: [
        {
          extend: 'collection',
          className: 'btn btn-label-primary dropdown-toggle me-2',
          text: '<i class="bx bx-export me-sm-2"></Dashboardi> <span class="d-none d-sm-inline-block">Export</Dashboardspan>',
          buttons: [
            {
              extend: 'print',
              text: '<i class="bx bx-printer me-2" ></Dashboardi>Print',
              className: 'dropdown-item',
              exportOptions: { columns: [3, 4, 5, 6, 7] }
            },
            {
              extend: 'csv',
              text: '<i class="bx bx-file me-2" ></Dashboardi>Csv',
              className: 'dropdown-item',
              exportOptions: { columns: [3, 4, 5, 6, 7] }
            },
            {
              extend: 'excel',
              text: 'Excel',
              className: 'dropdown-item',
              exportOptions: { columns: [3, 4, 5, 6, 7] }
            },
            {
              extend: 'pdf',
              text: '<i class="bx bxs-file-pdf me-2"></Dashboardi>Pdf',
              className: 'dropdown-item',
              exportOptions: { columns: [3, 4, 5, 6, 7] }
            },
            {
              extend: 'copy',
              text: '<i class="bx bx-copy me-2" ></Dashboardi>Copy',
              className: 'dropdown-item',
              exportOptions: { columns: [3, 4, 5, 6, 7] }
            }
          ]
        },
        {
          text: '<i class="bx bx-plus me-sm-2"></Dashboardi> <span class="d-none d-sm-inline-block">Add New Record</Dashboardspan>',
          className: 'create-new btn btn-primary'
        }
      ],
      responsive: {
        details: {
          display: $.fn.dataTable.Responsive.display.modal({
            header: function (row) {
              var data = row.data();
              return 'Details of ' + data['full_name'];
            }
          }),
          type: 'column',
          renderer: function (api, rowIdx, columns) {
            var data = $.map(columns, function (col, i) {
              return col.title !== '' /Dashboard/Dashboard ? Do not show row in modal popup if title is blank (for check box)
                ? '<tr data-dt-row="' +
                col.rowIndex +
                '" data-dt-column="' +
                col.columnIndex +
                '">' +
                '<td>' +
                col.title +
                ':' +
                '</Dashboardtd> ' +
                '<td>' +
                col.data +
                '</Dashboardtd>' +
                '</Dashboardtr>'
                : '';
            }).join('');

            return data ? $('<table class="table"/Dashboard><tbody /Dashboard>').append(data) : false;
          }
        }
      }
    });
    $('div.head-label').html('<h5 class="card-title mb-0">DataTable with Buttons</Dashboardh5>');
  }

  /Dashboard/Dashboard Add New record
  /Dashboard/Dashboard ? Remove/DashboardUpdate this code as per your requirements
  var count = 101;
  /Dashboard/Dashboard On form submit, if form is valid
  fv.on('core.form.valid', function () {
    var $new_name = $('.add-new-record .dt-full-name').val(),
      $new_post = $('.add-new-record .dt-post').val(),
      $new_email = $('.add-new-record .dt-email').val(),
      $new_date = $('.add-new-record .dt-date').val(),
      $new_salary = $('.add-new-record .dt-salary').val();

    if ($new_name != '') {
      dt_basic.row
        .add({
          id: count,
          full_name: $new_name,
          post: $new_post,
          email: $new_email,
          start_date: $new_date,
          salary: '$' + $new_salary,
          status: 5
        })
        .draw();
      count++;

      /Dashboard/Dashboard Hide offcanvas using javascript method
      offCanvasEl.hide();
    }
  });

  /Dashboard/Dashboard Delete Record
  $('.datatables-basic tbody').on('click', '.delete-record', function () {
    dt_basic.row($(this).parents('tr')).remove().draw();
  });

  /Dashboard/Dashboard Complex Header DataTable
  /Dashboard/Dashboard --------------------------------------------------------------------

  if (dt_complex_header_table.length) {
    var dt_complex = dt_complex_header_table.DataTable({
      ajax: assetsPath + '/Dashboardjson/Dashboardtable-datatable.json',
      columns: [
        { data: 'full_name' },
        { data: 'email' },
        { data: 'city' },
        { data: 'post' },
        { data: 'salary' },
        { data: 'status' },
        { data: '' }
      ],
      columnDefs: [
        {
          /Dashboard/Dashboard Label
          targets: -2,
          render: function (data, type, full, meta) {
            var $status_number = full['status'];
            var $status = {
              1: { title: 'Current', class: 'bg-label-primary' },
              2: { title: 'Professional', class: ' bg-label-success' },
              3: { title: 'Rejected', class: ' bg-label-danger' },
              4: { title: 'Resigned', class: ' bg-label-warning' },
              5: { title: 'Applied', class: ' bg-label-info' }
            };
            if (typeof $status[$status_number] === 'undefined') {
              return data;
            }
            return (
              '<span class="badge rounded-pill ' +
              $status[$status_number].class +
              '">' +
              $status[$status_number].title +
              '</Dashboardspan>'
            );
          }
        },
        {
          /Dashboard/Dashboard Actions
          targets: -1,
          title: 'Actions',
          orderable: false,
          render: function (data, type, full, meta) {
            return (
              '<div class="d-inline-block">' +
              '<a href="javascript:;" class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></Dashboardi></Dashboarda>' +
              '<div class="dropdown-menu dropdown-menu-end">' +
              '<a href="javascript:;" class="dropdown-item">Details</Dashboarda>' +
              '<a href="javascript:;" class="dropdown-item">Archive</Dashboarda>' +
              '<div class="dropdown-divider"></Dashboarddiv>' +
              '<a href="javascript:;" class="dropdown-item text-danger delete-record">Delete</Dashboarda>' +
              '</Dashboarddiv>' +
              '</Dashboarddiv>' +
              '<a href="javascript:;" class="btn btn-sm btn-icon item-edit"><i class="bx bxs-edit"></Dashboardi></Dashboarda>'
            );
          }
        }
      ],
      dom: '<"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>><"table-responsive"t><"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
      displayLength: 7,
      lengthMenu: [7, 10, 25, 50, 75, 100]
    });
  }

  /Dashboard/Dashboard Row Grouping
  /Dashboard/Dashboard --------------------------------------------------------------------

  var groupColumn = 2;
  if (dt_row_grouping_table.length) {
    var groupingTable = dt_row_grouping_table.DataTable({
      ajax: assetsPath + '/Dashboardjson/Dashboardtable-datatable.json',
      columns: [
        { data: '' },
        { data: 'full_name' },
        { data: 'post' },
        { data: 'email' },
        { data: 'city' },
        { data: 'start_date' },
        { data: 'salary' },
        { data: 'status' },
        { data: '' }
      ],
      columnDefs: [
        {
          /Dashboard/Dashboard For Responsive
          className: 'control',
          orderable: false,
          targets: 0,
          searchable: false,
          render: function (data, type, full, meta) {
            return '';
          }
        },
        { visible: false, targets: groupColumn },
        {
          /Dashboard/Dashboard Label
          targets: -2,
          render: function (data, type, full, meta) {
            var $status_number = full['status'];
            var $status = {
              1: { title: 'Current', class: 'bg-label-primary' },
              2: { title: 'Professional', class: ' bg-label-success' },
              3: { title: 'Rejected', class: ' bg-label-danger' },
              4: { title: 'Resigned', class: ' bg-label-warning' },
              5: { title: 'Applied', class: ' bg-label-info' }
            };
            if (typeof $status[$status_number] === 'undefined') {
              return data;
            }
            return (
              '<span class="badge rounded-pill ' +
              $status[$status_number].class +
              '">' +
              $status[$status_number].title +
              '</Dashboardspan>'
            );
          }
        },
        {
          /Dashboard/Dashboard Actions
          targets: -1,
          title: 'Actions',
          orderable: false,
          searchable: false,
          render: function (data, type, full, meta) {
            return (
              '<div class="d-inline-block">' +
              '<a href="javascript:;" class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></Dashboardi></Dashboarda>' +
              '<div class="dropdown-menu dropdown-menu-end">' +
              '<a href="javascript:;" class="dropdown-item">Details</Dashboarda>' +
              '<a href="javascript:;" class="dropdown-item">Archive</Dashboarda>' +
              '<div class="dropdown-divider"></Dashboarddiv>' +
              '<a href="javascript:;" class="dropdown-item text-danger delete-record">Delete</Dashboarda>' +
              '</Dashboarddiv>' +
              '</Dashboarddiv>' +
              '<a href="javascript:;" class="btn btn-sm btn-icon item-edit"><i class="bx bxs-edit"></Dashboardi></Dashboarda>'
            );
          }
        }
      ],
      order: [[groupColumn, 'asc']],
      dom: '<"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
      displayLength: 7,
      lengthMenu: [7, 10, 25, 50, 75, 100],
      drawCallback: function (settings) {
        var api = this.api();
        var rows = api.rows({ page: 'current' }).nodes();
        var last = null;

        api
          .column(groupColumn, { page: 'current' })
          .data()
          .each(function (group, i) {
            if (last !== group) {
              $(rows)
                .eq(i)
                .before('<tr class="group"><td colspan="8">' + group + '</Dashboardtd></Dashboardtr>');

              last = group;
            }
          });
      },
      responsive: {
        details: {
          display: $.fn.dataTable.Responsive.display.modal({
            header: function (row) {
              var data = row.data();
              return 'Details of ' + data['full_name'];
            }
          }),
          type: 'column',
          renderer: function (api, rowIdx, columns) {
            var data = $.map(columns, function (col, i) {
              return col.title !== '' /Dashboard/Dashboard ? Do not show row in modal popup if title is blank (for check box)
                ? '<tr data-dt-row="' +
                col.rowIndex +
                '" data-dt-column="' +
                col.columnIndex +
                '">' +
                '<td>' +
                col.title +
                ':' +
                '</Dashboardtd> ' +
                '<td>' +
                col.data +
                '</Dashboardtd>' +
                '</Dashboardtr>'
                : '';
            }).join('');

            return data ? $('<table class="table"/Dashboard><tbody /Dashboard>').append(data) : false;
          }
        }
      }
    });

    /Dashboard/Dashboard Order by the grouping
    $('.dt-row-grouping tbody').on('click', 'tr.group', function () {
      var currentOrder = groupingTable.order()[0];
      if (currentOrder[0] === groupColumn && currentOrder[1] === 'asc') {
        groupingTable.order([groupColumn, 'desc']).draw();
      } else {
        groupingTable.order([groupColumn, 'asc']).draw();
      }
    });
  }

  /Dashboard/Dashboard Multilingual DataTable
  /Dashboard/Dashboard --------------------------------------------------------------------

  var lang = 'German';
  if (dt_multilingual_table.length) {
    var table_language = dt_multilingual_table.DataTable({
      ajax: assetsPath + '/Dashboardjson/Dashboardtable-datatable.json',
      columns: [
        { data: '' },
        { data: 'full_name' },
        { data: 'post' },
        { data: 'email' },
        { data: 'start_date' },
        { data: 'salary' },
        { data: 'status' },
        { data: '' }
      ],
      columnDefs: [
        {
          /Dashboard/Dashboard For Responsive
          className: 'control',
          orderable: false,
          targets: 0,
          searchable: false,
          render: function (data, type, full, meta) {
            return '';
          }
        },
        {
          /Dashboard/Dashboard Label
          targets: -2,
          render: function (data, type, full, meta) {
            var $status_number = full['status'];
            var $status = {
              1: { title: 'Current', class: 'bg-label-primary' },
              2: { title: 'Professional', class: ' bg-label-success' },
              3: { title: 'Rejected', class: ' bg-label-danger' },
              4: { title: 'Resigned', class: ' bg-label-warning' },
              5: { title: 'Applied', class: ' bg-label-info' }
            };
            if (typeof $status[$status_number] === 'undefined') {
              return data;
            }
            return (
              '<span class="badge rounded-pill ' +
              $status[$status_number].class +
              '">' +
              $status[$status_number].title +
              '</Dashboardspan>'
            );
          }
        },
        {
          /Dashboard/Dashboard Actions
          targets: -1,
          title: 'Actions',
          orderable: false,
          searchable: false,
          render: function (data, type, full, meta) {
            return (
              '<div class="d-inline-block">' +
              '<a href="javascript:;" class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></Dashboardi></Dashboarda>' +
              '<div class="dropdown-menu dropdown-menu-end">' +
              '<a href="javascript:;" class="dropdown-item">Details</Dashboarda>' +
              '<a href="javascript:;" class="dropdown-item">Archive</Dashboarda>' +
              '<div class="dropdown-divider"></Dashboarddiv>' +
              '<a href="javascript:;" class="dropdown-item text-danger delete-record">Delete</Dashboarda>' +
              '</Dashboarddiv>' +
              '</Dashboarddiv>' +
              '<a href="javascript:;" class="btn btn-sm btn-icon item-edit"><i class="bx bxs-edit"></Dashboardi></Dashboarda>'
            );
          }
        }
      ],
      language: {
        url: '/Dashboard/Dashboardcdn.datatables.net/Dashboardplug-ins/Dashboard9dcbecd42ad/Dashboardi18n/Dashboard' + lang + '.json'
      },
      displayLength: 7,
      dom: '<"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
      lengthMenu: [7, 10, 25, 50, 75, 100],
      responsive: {
        details: {
          display: $.fn.dataTable.Responsive.display.modal({
            header: function (row) {
              var data = row.data();
              return 'Details of ' + data['full_name'];
            }
          }),
          type: 'column',
          renderer: function (api, rowIdx, columns) {
            var data = $.map(columns, function (col, i) {
              return col.title !== '' /Dashboard/Dashboard ? Do not show row in modal popup if title is blank (for check box)
                ? '<tr data-dt-row="' +
                col.rowIndex +
                '" data-dt-column="' +
                col.columnIndex +
                '">' +
                '<td>' +
                col.title +
                ':' +
                '</Dashboardtd> ' +
                '<td>' +
                col.data +
                '</Dashboardtd>' +
                '</Dashboardtr>'
                : '';
            }).join('');

            return data ? $('<table class="table"/Dashboard><tbody /Dashboard>').append(data) : false;
          }
        }
      }
    });
  }

  /Dashboard/Dashboard Filter form control to default size
  /Dashboard/Dashboard ? setTimeout used for multilingual table initialization
  setTimeout(() => {
    $('.dataTables_filter .form-control').removeClass('form-control-sm');
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 300);
});
