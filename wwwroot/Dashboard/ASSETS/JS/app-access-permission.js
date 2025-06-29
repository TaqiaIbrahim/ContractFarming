/Dashboard**
 * App user list (jquery)
 */Dashboard

'use strict';

$(function () {
  var dataTablePermissions = $('.datatables-permissions'),
    dt_permission,
    userList = 'app-user-list.html';

  /Dashboard/Dashboard Users List datatable
  if (dataTablePermissions.length) {
    dt_permission = dataTablePermissions.DataTable({
      ajax: assetsPath + '/Dashboardjson/Dashboardpermissions-list.json', /Dashboard/Dashboard JSON file to add data
      columns: [
        /Dashboard/Dashboard columns according to JSON
        { data: '' },
        { data: 'id' },
        { data: 'name' },
        { data: 'assigned_to' },
        { data: 'created_date' },
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
          targets: 1,
          searchable: false,
          visible: false
        },
        {
          /Dashboard/Dashboard Name
          targets: 2,
          render: function (data, type, full, meta) {
            var $name = full['name'];
            return '<span class="text-nowrap fw-semibold">' + $name + '</Dashboardspan>';
          }
        },
        {
          /Dashboard/Dashboard User Role
          targets: 3,
          orderable: false,
          render: function (data, type, full, meta) {
            var $assignedTo = full['assigned_to'],
              $output = '';
            var roleBadgeObj = {
              Admin: '<a href="' + userList + '"><span class="badge  bg-label-primary m-1">Administrator</Dashboardspan></Dashboarda>',
              Manager: '<a href="' + userList + '"><span class="badge  bg-label-warning m-1">Manager</Dashboardspan></Dashboarda>',
              Users: '<a href="' + userList + '"><span class="badge  bg-label-success m-1">Users</Dashboardspan></Dashboarda>',
              Support: '<a href="' + userList + '"><span class="badge  bg-label-info m-1">Support</Dashboardspan></Dashboarda>',
              Restricted:
                '<a href="' + userList + '"><span class="badge  bg-label-danger m-1">Restricted User</Dashboardspan></Dashboarda>'
            };
            for (var i = 0; i < $assignedTo.length; i++) {
              var val = $assignedTo[i];
              $output += roleBadgeObj[val];
            }
            return '<span class="text-nowrap">' + $output + '</Dashboardspan>';
          }
        },
        {
          /Dashboard/Dashboard remove ordering from Name
          targets: 4,
          orderable: false,
          render: function (data, type, full, meta) {
            var $date = full['created_date'];
            return '<span class="text-nowrap">' + $date + '</Dashboardspan>';
          }
        },
        {
          /Dashboard/Dashboard Actions
          targets: -1,
          searchable: false,
          title: 'Actions',
          orderable: false,
          render: function (data, type, full, meta) {
            return (
              '<span class="text-nowrap"><button class="btn btn-sm btn-icon me-2" data-bs-target="#editPermissionModal" data-bs-toggle="modal" data-bs-dismiss="modal"><i class="bx bx-edit"></Dashboardi></Dashboardbutton>' +
              '<button class="btn btn-sm btn-icon delete-record"><i class="bx bx-trash"></Dashboardi></Dashboardbutton></Dashboardspan>'
            );
          }
        }
      ],
      order: [[1, 'asc']],
      dom:
        '<"row mx-1"' +
        '<"col-sm-12 col-md-3" l>' +
        '<"col-sm-12 col-md-9"<"dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-md-end justify-content-center flex-wrap me-1"<"me-3"f>B>>' +
        '>t' +
        '<"row mx-2"' +
        '<"col-sm-12 col-md-6"i>' +
        '<"col-sm-12 col-md-6"p>' +
        '>',
      language: {
        sLengthMenu: '_MENU_',
        search: 'Search',
        searchPlaceholder: 'Search..'
      },
      /Dashboard/Dashboard Buttons with Dropdown
      buttons: [
        {
          text: 'Add Permission',
          className: 'add-new btn btn-primary mb-3 mb-md-0',
          attr: {
            'data-bs-toggle': 'modal',
            'data-bs-target': '#addPermissionModal'
          },
          init: function (api, node, config) {
            $(node).removeClass('btn-secondary');
          }
        }
      ],
      /Dashboard/Dashboard For responsive popup
      responsive: {
        details: {
          display: $.fn.dataTable.Responsive.display.modal({
            header: function (row) {
              var data = row.data();
              return 'Details of ' + data['name'];
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
          .columns(3)
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
                select.append('<option value="' + d + '" class="text-capitalize">' + d + '</Dashboardoption>');
              });
          });
      }
    });
  }

  /Dashboard/Dashboard Delete Record
  $('.datatables-permissions tbody').on('click', '.delete-record', function () {
    dt_permission.row($(this).parents('tr')).remove().draw();
  });

  /Dashboard/Dashboard Filter form control to default size
  /Dashboard/Dashboard ? setTimeout used for multilingual table initialization
  setTimeout(() => {
    $('.dataTables_filter .form-control').removeClass('form-control-sm');
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 300);
});
