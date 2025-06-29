/Dashboard**
 * Page User List
 */Dashboard

'use strict';

/Dashboard/Dashboard Datatable (jquery)
$(function () {
  /Dashboard/Dashboard Variable declaration for table
  var dt_user_table = $('.datatables-users'),
    select2 = $('.select2'),
    userView = 'app-user-view-account.html',
    statusObj = {
      1: { title: 'Pending', class: 'bg-label-warning' },
      2: { title: 'Active', class: 'bg-label-success' },
      3: { title: 'Inactive', class: 'bg-label-secondary' }
    };

  if (select2.length) {
    var $this = select2;
    $this.wrap('<div class="position-relative"></Dashboarddiv>').select2({
      placeholder: 'Select Country',
      dropdownParent: $this.parent()
    });
  }

  /Dashboard/Dashboard Users datatable
  if (dt_user_table.length) {
    var dt_user = dt_user_table.DataTable({
      ajax: assetsPath + 'json/Dashboarduser-list.json', /Dashboard/Dashboard JSON file to add data
      columns: [
        /Dashboard/Dashboard columns according to JSON
        { data: '' },
        { data: 'full_name' },
        { data: 'role' },
        { data: 'current_plan' },
        { data: 'billing' },
        { data: 'status' },
        { data: 'action' }
      ],
      columnDefs: [
        {
          /Dashboard/Dashboard For Responsive
          className: 'control',
          searchable: false,
          orderable: false,
          responsivePriority: 2,
          targets: 0,
          render: function (data, type, full, meta) {
            return '';
          }
        },
        {
          /Dashboard/Dashboard User full name and email
          targets: 1,
          responsivePriority: 4,
          render: function (data, type, full, meta) {
            var $name = full['full_name'],
              $email = full['email'],
              $image = full['avatar'];
            if ($image) {
              /Dashboard/Dashboard For Avatar image
              var $output =
                '<img src="' + assetsPath + '/Dashboardimg/Dashboardavatars/Dashboard' + $image + '" alt="Avatar" class="rounded-circle">';
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
              '<div class="avatar avatar-sm me-3">' +
              $output +
              '</Dashboarddiv>' +
              '</Dashboarddiv>' +
              '<div class="d-flex flex-column">' +
              '<a href="' +
              userView +
              '" class="text-body text-truncate"><span class="fw-semibold">' +
              $name +
              '</Dashboardspan></Dashboarda>' +
              '<small class="text-muted">' +
              $email +
              '</Dashboardsmall>' +
              '</Dashboarddiv>' +
              '</Dashboarddiv>';
            return $row_output;
          }
        },
        {
          /Dashboard/Dashboard User Role
          targets: 2,
          render: function (data, type, full, meta) {
            var $role = full['role'];
            var roleBadgeObj = {
              Subscriber:
                '<span class="badge badge-center rounded-pill bg-label-warning w-px-30 h-px-30 me-2"><i class="bx bx-user bx-xs"></Dashboardi></Dashboardspan>',
              Author:
                '<span class="badge badge-center rounded-pill bg-label-success w-px-30 h-px-30 me-2"><i class="bx bx-cog bx-xs"></Dashboardi></Dashboardspan>',
              Maintainer:
                '<span class="badge badge-center rounded-pill bg-label-primary w-px-30 h-px-30 me-2"><i class="bx bx-pie-chart-alt bx-xs"></Dashboardi></Dashboardspan>',
              Editor:
                '<span class="badge badge-center rounded-pill bg-label-info w-px-30 h-px-30 me-2"><i class="bx bx-edit bx-xs"></Dashboardi></Dashboardspan>',
              Admin:
                '<span class="badge badge-center rounded-pill bg-label-secondary w-px-30 h-px-30 me-2"><i class="bx bx-mobile-alt bx-xs"></Dashboardi></Dashboardspan>'
            };
            return "<span class='text-truncate d-flex align-items-center'>" + roleBadgeObj[$role] + $role + '</Dashboardspan>';
          }
        },
        {
          /Dashboard/Dashboard Plans
          targets: 3,
          render: function (data, type, full, meta) {
            var $plan = full['current_plan'];

            return '<span class="fw-semibold">' + $plan + '</Dashboardspan>';
          }
        },
        {
          /Dashboard/Dashboard User Status
          targets: 5,
          render: function (data, type, full, meta) {
            var $status = full['status'];

            return '<span class="badge ' + statusObj[$status].class + '">' + statusObj[$status].title + '</Dashboardspan>';
          }
        },
        {
          /Dashboard/Dashboard Actions
          targets: -1,
          title: 'Actions',
          searchable: false,
          orderable: false,
          render: function (data, type, full, meta) {
            return (
              '<div class="d-inline-block">' +
              '<button class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></Dashboardi></Dashboardbutton>' +
              '<div class="dropdown-menu dropdown-menu-end">' +
              '<a href="' +
              userView +
              '" class="dropdown-item">View</Dashboarda>' +
              '<a href="javascript:;" class="dropdown-item">Suspend</Dashboarda>' +
              '<div class="dropdown-divider"></Dashboarddiv>' +
              '<a href="javascript:;" class="dropdown-item text-danger delete-record">Delete</Dashboarda></Dashboarddiv>' +
              '</Dashboarddiv>' +
              '</Dashboarddiv>'
            );
          }
        }
      ],
      order: [[1, 'desc']],
      dom:
        '<"row mx-2"' +
        '<"col-md-2"<"me-3"l>>' +
        '<"col-md-10"<"dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-end flex-md-row flex-column mb-3 mb-md-0"fB>>' +
        '>t' +
        '<"row mx-2"' +
        '<"col-sm-12 col-md-6"i>' +
        '<"col-sm-12 col-md-6"p>' +
        '>',
      language: {
        sLengthMenu: '_MENU_',
        search: '',
        searchPlaceholder: 'Search..'
      },
      /Dashboard/Dashboard Buttons with Dropdown
      buttons: [
        {
          extend: 'collection',
          className: 'btn btn-label-secondary dropdown-toggle mx-3',
          text: '<i class="bx bx-upload me-2"></Dashboardi>Export',
          buttons: [
            {
              extend: 'print',
              text: '<i class="bx bx-printer me-2" ></Dashboardi>Print',
              className: 'dropdown-item',
              exportOptions: { columns: [2, 3, 4, 5] }
            },
            {
              extend: 'csv',
              text: '<i class="bx bx-file me-2" ></Dashboardi>Csv',
              className: 'dropdown-item',
              exportOptions: { columns: [2, 3, 4, 5] }
            },
            {
              extend: 'excel',
              text: 'Excel',
              className: 'dropdown-item',
              exportOptions: { columns: [2, 3, 4, 5] }
            },
            {
              extend: 'pdf',
              text: '<i class="bx bxs-file-pdf me-2"></Dashboardi>Pdf',
              className: 'dropdown-item',
              exportOptions: { columns: [2, 3, 4, 5] }
            },
            {
              extend: 'copy',
              text: '<i class="bx bx-copy me-2" ></Dashboardi>Copy',
              className: 'dropdown-item',
              exportOptions: { columns: [2, 3, 4, 5] }
            }
          ]
        },
        {
          text: '<i class="bx bx-plus me-0 me-lg-2"></Dashboardi><span class="d-none d-lg-inline-block">Add New User</Dashboardspan>',
          className: 'add-new btn btn-primary',
          attr: {
            'data-bs-toggle': 'offcanvas',
            'data-bs-target': '#offcanvasAddUser'
          }
        }
      ],
      /Dashboard/Dashboard For responsive popup
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
      },
      initComplete: function () {
        /Dashboard/Dashboard Adding role filter once table initialized
        this.api()
          .columns(2)
          .every(function () {
            var column = this;
            var select = $(
              '<select id="UserRole" class="form-select text-capitalize"><option value=""> Select Role </Dashboardoption></Dashboardselect>'
            )
              .appendTo('.user_role')
              .on('change', function () {
                var val = $.fn.dataTable.util.escapeRegex($(this).val());
                column.search(val ? '^' + val + '$' : '', true, false).draw();
              });

            column
              .data()
              .unique()
              .sort()
              .each(function (d, j) {
                select.append('<option value="' + d + '">' + d + '</Dashboardoption>');
              });
          });
        /Dashboard/Dashboard Adding plan filter once table initialized
        this.api()
          .columns(3)
          .every(function () {
            var column = this;
            var select = $(
              '<select id="UserPlan" class="form-select text-capitalize"><option value=""> Select Plan </Dashboardoption></Dashboardselect>'
            )
              .appendTo('.user_plan')
              .on('change', function () {
                var val = $.fn.dataTable.util.escapeRegex($(this).val());
                column.search(val ? '^' + val + '$' : '', true, false).draw();
              });

            column
              .data()
              .unique()
              .sort()
              .each(function (d, j) {
                select.append('<option value="' + d + '">' + d + '</Dashboardoption>');
              });
          });
        /Dashboard/Dashboard Adding status filter once table initialized
        this.api()
          .columns(5)
          .every(function () {
            var column = this;
            var select = $(
              '<select id="FilterTransaction" class="form-select text-capitalize"><option value=""> Select Status </Dashboardoption></Dashboardselect>'
            )
              .appendTo('.user_status')
              .on('change', function () {
                var val = $.fn.dataTable.util.escapeRegex($(this).val());
                column.search(val ? '^' + val + '$' : '', true, false).draw();
              });

            column
              .data()
              .unique()
              .sort()
              .each(function (d, j) {
                select.append(
                  '<option value="' +
                    statusObj[d].title +
                    '" class="text-capitalize">' +
                    statusObj[d].title +
                    '</Dashboardoption>'
                );
              });
          });
      }
    });
  }

  /Dashboard/Dashboard Delete Record
  $('.datatables-users tbody').on('click', '.delete-record', function () {
    dt_user.row($(this).parents('tr')).remove().draw();
  });

  /Dashboard/Dashboard Filter form control to default size
  /Dashboard/Dashboard ? setTimeout used for multilingual table initialization
  setTimeout(() => {
    $('.dataTables_filter .form-control').removeClass('form-control-sm');
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 300);
});

/Dashboard/Dashboard Validation & Phone mask
(function () {
  const phoneMaskList = document.querySelectorAll('.phone-mask'),
    addNewUserForm = document.getElementById('addNewUserForm');

  /Dashboard/Dashboard Phone Number
  if (phoneMaskList) {
    phoneMaskList.forEach(function (phoneMask) {
      new Cleave(phoneMask, {
        phone: true,
        phoneRegionCode: 'US'
      });
    });
  }
  /Dashboard/Dashboard Add New User Form Validation
  const fv = FormValidation.formValidation(addNewUserForm, {
    fields: {
      userFullname: {
        validators: {
          notEmpty: {
            message: 'Please enter fullname '
          }
        }
      },
      userEmail: {
        validators: {
          notEmpty: {
            message: 'Please enter your email'
          },
          emailAddress: {
            message: 'The value is not a valid email address'
          }
        }
      }
    },
    plugins: {
      trigger: new FormValidation.plugins.Trigger(),
      bootstrap5: new FormValidation.plugins.Bootstrap5({
        /Dashboard/Dashboard Use this for enabling/Dashboardchanging valid/Dashboardinvalid class
        eleValidClass: '',
        rowSelector: function (field, ele) {
          /Dashboard/Dashboard field is the field name & ele is the field element
          return '.mb-3';
        }
      }),
      submitButton: new FormValidation.plugins.SubmitButton(),
      /Dashboard/Dashboard Submit the form when all fields are valid
      /Dashboard/Dashboard defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
      autoFocus: new FormValidation.plugins.AutoFocus()
    }
  });
})();
