/Dashboard**
 * App Invoice List (jquery)
 */Dashboard

'use strict';

$(function () {
  /Dashboard/Dashboard Variable declaration for table
  var dt_invoice_table = $('.invoice-list-table');

  /Dashboard/Dashboard Invoice datatable
  if (dt_invoice_table.length) {
    var dt_invoice = dt_invoice_table.DataTable({
      ajax: assetsPath + 'json/Dashboardinvoice-list.json', /Dashboard/Dashboard JSON file to add data
      columns: [
        /Dashboard/Dashboard columns according to JSON
        { data: '' },
        { data: 'invoice_id' },
        { data: 'invoice_status' },
        { data: 'issued_date' },
        { data: 'client_name' },
        { data: 'total' },
        { data: 'balance' },
        { data: 'invoice_status' },
        { data: 'action' }
      ],
      columnDefs: [
        {
          /Dashboard/Dashboard For Responsive
          className: 'control',
          responsivePriority: 2,
          searchable: false,
          orderable: false,
          targets: 0,
          render: function (data, type, full, meta) {
            return '';
          }
        },
        {
          /Dashboard/Dashboard Invoice ID
          targets: 1,
          render: function (data, type, full, meta) {
            var $invoice_id = full['invoice_id'];
            /Dashboard/Dashboard Creates full output for row
            var $row_output = '<a href="app-invoice-preview.html">#' + $invoice_id + '</Dashboarda>';
            return $row_output;
          }
        },
        {
          /Dashboard/Dashboard Invoice status
          targets: 2,
          render: function (data, type, full, meta) {
            var $invoice_status = full['invoice_status'],
              $due_date = full['due_date'],
              $balance = full['balance'];
            var roleBadgeObj = {
              Sent: '<span class="badge badge-center rounded-pill bg-label-secondary w-px-30 h-px-30"><i class="bx bx-paper-plane bx-xs"></Dashboardi></Dashboardspan>',
              Draft:
                '<span class="badge badge-center rounded-pill bg-label-primary w-px-30 h-px-30"><i class="bx bxs-save bx-xs"></Dashboardi></Dashboardspan>',
              'Past Due':
                '<span class="badge badge-center rounded-pill bg-label-danger w-px-30 h-px-30"><i class="bx bx-info-circle bx-xs"></Dashboardi></Dashboardspan>',
              'Partial Payment':
                '<span class="badge badge-center rounded-pill bg-label-success w-px-30 h-px-30"><i class="bx bx-adjust bx-xs"></Dashboardi></Dashboardspan>',
              Paid: '<span class="badge badge-center rounded-pill bg-label-warning w-px-30 h-px-30"><i class="bx bx-pie-chart-alt bx-xs"></Dashboardi></Dashboardspan>',
              Downloaded:
                '<span class="badge badge-center rounded-pill bg-label-info w-px-30 h-px-30"><i class="bx bx-down-arrow-circle bx-xs"></Dashboardi></Dashboardspan>'
            };
            return (
              "<span data-bs-toggle='tooltip' data-bs-html='true' title='<span>" +
              $invoice_status +
              '<br> Balance: ' +
              $balance +
              '<br> Due Date: ' +
              $due_date +
              "</Dashboardspan>'>" +
              roleBadgeObj[$invoice_status] +
              '</Dashboardspan>'
            );
          }
        },
        {
          /Dashboard/Dashboard Client name and Service
          targets: 3,
          responsivePriority: 4,
          render: function (data, type, full, meta) {
            var $name = full['client_name'],
              $service = full['service'],
              $image = full['avatar_image'],
              $rand_num = Math.floor(Math.random() * 11) + 1,
              $user_img = $rand_num + '.png';
            if ($image === true) {
              /Dashboard/Dashboard For Avatar image
              var $output =
                '<img src="' + assetsPath + '/Dashboardimg/Dashboardavatars/Dashboard' + $user_img + '" alt="Avatar" class="rounded-circle">';
            } else {
              /Dashboard/Dashboard For Avatar badge
              var stateNum = Math.floor(Math.random() * 6),
                states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary'],
                $state = states[stateNum],
                $name = full['client_name'],
                $initials = $name.match(/Dashboard\b\w/Dashboardg) || [];
              $initials = (($initials.shift() || '') + ($initials.pop() || '')).toUpperCase();
              $output = '<span class="avatar-initial rounded-circle bg-label-' + $state + '">' + $initials + '</Dashboardspan>';
            }
            /Dashboard/Dashboard Creates full output for row
            var $row_output =
              '<div class="d-flex justify-content-start align-items-center">' +
              '<div class="avatar-wrapper">' +
              '<div class="avatar avatar-sm me-2">' +
              $output +
              '</Dashboarddiv>' +
              '</Dashboarddiv>' +
              '<div class="d-flex flex-column">' +
              '<a href="pages-profile-user.html" class="text-body text-truncate fw-semibold">' +
              $name +
              '</Dashboarda>' +
              '<small class="text-truncate text-muted">' +
              $service +
              '</Dashboardsmall>' +
              '</Dashboarddiv>' +
              '</Dashboarddiv>';
            return $row_output;
          }
        },
        {
          /Dashboard/Dashboard Total Invoice Amount
          targets: 4,
          render: function (data, type, full, meta) {
            var $total = full['total'];
            return '<span class="d-none">' + $total + '</Dashboardspan>$' + $total;
          }
        },
        {
          /Dashboard/Dashboard Due Date
          targets: 5,
          render: function (data, type, full, meta) {
            var $due_date = new Date(full['due_date']);
            /Dashboard/Dashboard Creates full output for row
            var $row_output =
              '<span class="d-none">' +
              moment($due_date).format('YYYYMMDD') +
              '</Dashboardspan>' +
              moment($due_date).format('DD MMM YYYY');
            $due_date;
            return $row_output;
          }
        },
        {
          /Dashboard/Dashboard Client Balance/DashboardStatus
          targets: 6,
          orderable: false,
          render: function (data, type, full, meta) {
            var $balance = full['balance'];
            if ($balance === 0) {
              var $badge_class = 'bg-label-success';
              return '<span class="badge ' + $badge_class + '"> Paid </Dashboardspan>';
            } else {
              return '<span class="d-none">' + $balance + '</Dashboardspan>' + $balance;
            }
          }
        },
        {
          targets: 7,
          visible: false
        },
        {
          /Dashboard/Dashboard Actions
          targets: -1,
          title: 'Actions',
          searchable: false,
          orderable: false,
          render: function (data, type, full, meta) {
            return (
              '<div class="d-flex align-items-center">' +
              '<a href="javascript:;" data-bs-toggle="tooltip" class="text-body" data-bs-placement="top" title="Send Mail"><i class="bx bx-send mx-1"></Dashboardi></Dashboarda>' +
              '<a href="app-invoice-preview.html" data-bs-toggle="tooltip" class="text-body" data-bs-placement="top" title="Preview Invoice"><i class="bx bx-show mx-1"></Dashboardi></Dashboarda>' +
              '<div class="dropdown">' +
              '<a href="javascript:;" class="btn dropdown-toggle hide-arrow text-body p-0" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></Dashboardi></Dashboarda>' +
              '<div class="dropdown-menu dropdown-menu-end">' +
              '<a href="javascript:;" class="dropdown-item">Download</Dashboarda>' +
              '<a href="app-invoice-edit.html" class="dropdown-item">Edit</Dashboarda>' +
              '<a href="javascript:;" class="dropdown-item">Duplicate</Dashboarda>' +
              '<div class="dropdown-divider"></Dashboarddiv>' +
              '<a href="javascript:;" class="dropdown-item delete-record text-danger">Delete</Dashboarda>' +
              '</Dashboarddiv>' +
              '</Dashboarddiv>' +
              '</Dashboarddiv>'
            );
          }
        }
      ],
      order: [[1, 'desc']],
      dom:
        '<"row ms-2 me-3"' +
        '<"col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start gap-2"l<"dt-action-buttons text-xl-end text-lg-start text-md-end text-start mt-md-0 mt-3"B>>' +
        '<"col-12 col-md-6 d-flex align-items-center justify-content-end flex-column flex-md-row pe-3 gap-md-2"f<"invoice_status mb-3 mb-md-0">>' +
        '>t' +
        '<"row mx-2"' +
        '<"col-sm-12 col-md-6"i>' +
        '<"col-sm-12 col-md-6"p>' +
        '>',
      language: {
        sLengthMenu: '_MENU_',
        search: '',
        searchPlaceholder: 'Search Invoice'
      },
      /Dashboard/Dashboard Buttons with Dropdown
      buttons: [
        {
          text: '<i class="bx bx-plus me-md-2"></Dashboardi><span class="d-md-inline-block d-none">Create Invoice</Dashboardspan>',
          className: 'btn btn-primary',
          action: function (e, dt, button, config) {
            window.location = 'app-invoice-add.html';
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
          .columns(7)
          .every(function () {
            var column = this;
            var select = $(
              '<select id="UserRole" class="form-select"><option value=""> Select Status </Dashboardoption></Dashboardselect>'
            )
              .appendTo('.invoice_status')
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

  /Dashboard/Dashboard On each datatable draw, initialize tooltip
  dt_invoice_table.on('draw.dt', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl, {
        boundary: document.body
      });
    });
  });

  /Dashboard/Dashboard Delete Record
  $('.invoice-list-table tbody').on('click', '.delete-record', function () {
    dt_invoice.row($(this).parents('tr')).remove().draw();
  });

  /Dashboard/Dashboard Filter form control to default size
  /Dashboard/Dashboard ? setTimeout used for multilingual table initialization
  setTimeout(() => {
    $('.dataTables_filter .form-control').removeClass('form-control-sm');
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 300);
});
