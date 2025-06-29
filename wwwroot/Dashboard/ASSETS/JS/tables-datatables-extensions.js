/Dashboard**
 * DataTables Extensions (jquery)
 */Dashboard

'use strict';

$(function () {
  var dt_scrollable_table = $('.dt-scrollableTable'),
    dt_fixedheader_table = $('.dt-fixedheader'),
    dt_fixedcolumns_table = $('.dt-fixedcolumns'),
    dt_select_table = $('.dt-select-table');

  /Dashboard/Dashboard Scrollable
  /Dashboard/Dashboard --------------------------------------------------------------------

  if (dt_scrollable_table.length) {
    var dt_scrollableTable = dt_scrollable_table.DataTable({
      ajax: assetsPath + 'json/Dashboardtable-datatable.json',
      columns: [
        { data: 'full_name' },
        { data: 'post' },
        { data: 'email' },
        { data: 'city' },
        { data: 'start_date' },
        { data: 'salary' },
        { data: 'age' },
        { data: 'experience' },
        { data: '' },
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
          searchable: false,
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
              '<a href="javascript:;" class="item-edit text-body"><i class="bx bxs-edit"></Dashboardi></Dashboarda>'
            );
          }
        }
      ],
      /Dashboard/Dashboard Scroll options
      scrollY: '300px',
      scrollX: true,
      dom: '<"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>'
    });
  }

  /Dashboard/Dashboard FixedHeader
  /Dashboard/Dashboard --------------------------------------------------------------------

  if (dt_fixedheader_table.length) {
    var dt_fixedheader = dt_fixedheader_table.DataTable({
      ajax: assetsPath + 'json/Dashboardtable-datatable.json',
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
          className: 'control',
          orderable: false,
          targets: 0,
          responsivePriority: 3,
          render: function (data, type, full, meta) {
            return '';
          }
        },
        {
          /Dashboard/Dashboard For Checkboxes
          targets: 1,
          orderable: false,
          render: function () {
            return '<input type="checkbox" class="dt-checkboxes form-check-input">';
          },
          checkboxes: {
            selectAllRender: '<input type="checkbox" class="form-check-input">'
          },
          responsivePriority: 4
        },
        {
          targets: 2,
          visible: false
        },
        {
          /Dashboard/Dashboard Avatar image/Dashboardbadge, Name and post
          targets: 3,
          render: function (data, type, full, meta) {
            var $user_img = full['avatar'],
              $name = full['full_name'],
              $post = full['post'];
            if ($user_img) {
              /Dashboard/Dashboard For Avatar image
              var $output =
                '<img src="' + assetsPath + 'img/Dashboardavatars/Dashboard' + $user_img + '" alt="Avatar" class="rounded-circle">';
            } else {
              /Dashboard/Dashboard For Avatar badge
              var stateNum = Math.floor(Math.random() * 6);
              var states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary'];
              var $state = states[stateNum],
                $name = full['full_name'];
              var $initials = $name.match(/Dashboard\b\w/Dashboardg) || [];
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
          },
          responsivePriority: 5
        },
        {
          responsivePriority: 1,
          targets: 4
        },
        {
          responsivePriority: 2,
          targets: 6
        },

        {
          /Dashboard/Dashboard Label
          targets: -2,
          render: function (data, type, full, meta) {
            /Dashboard/Dashboard var $rand_num = Math.floor(Math.random() * 5) + 1;
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
      order: [[2, 'desc']],
      dom: '<"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
      displayLength: 7,
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
    /Dashboard/Dashboard Fixed header
    if (window.Helpers.isNavbarFixed()) {
      var navHeight = $('#layout-navbar').outerHeight();
      new $.fn.dataTable.FixedHeader(dt_fixedheader).headerOffset(navHeight);
    } else {
      new $.fn.dataTable.FixedHeader(dt_fixedheader);
    }
  }

  /Dashboard/Dashboard FixedColumns
  /Dashboard/Dashboard --------------------------------------------------------------------

  if (dt_fixedcolumns_table.length) {
    var dt_fixedcolumns = dt_fixedcolumns_table.DataTable({
      ajax: assetsPath + 'json/Dashboardtable-datatable.json',
      columns: [
        { data: 'full_name' },
        { data: 'post' },
        { data: 'email' },
        { data: 'city' },
        { data: 'start_date' },
        { data: 'salary' },
        { data: 'age' },
        { data: 'experience' },
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
          searchable: false,
          orderable: false,
          render: function (data, type, full, meta) {
            return (
              '<div class="d-inline-block">' +
              '<a href="javascript:;" class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></Dashboardi></Dashboarda>' +
              '<div class="dropdown-menu dropdown-menu-end">' +
              '<a href="javascript:;" class="dropdown-item">Details</Dashboarda>' +
              '<a href="javascript:;" class="dropdown-item">Archive</Dashboarda>' +
              '<div class="dropdown-divider"></Dashboarddiv>' +
              '<a href="javascript:;" class="dropdown-item text-danger delete-record"></Dashboardi>Delete</Dashboarda>' +
              '</Dashboarddiv>' +
              '</Dashboarddiv>' +
              '<a href="javascript:;" class="item-edit text-body"><i class="bx bxs-edit"></Dashboardi></Dashboarda>'
            );
          }
        }
      ],
      dom: '<"d-flex justify-content-between align-items-center row"<"col-sm-12 col-md-2 d-flex"f><"col-sm-12 col-md-10 d-none"i>>t',
      scrollY: '300px',
      scrollX: true,
      scrollCollapse: true,
      paging: false,
      info: false,
      /Dashboard/Dashboard Fixed column option
      fixedColumns: true
    });
  }

  /Dashboard/Dashboard Select
  /Dashboard/Dashboard --------------------------------------------------------------------

  if (dt_select_table.length) {
    var dt_select = dt_select_table.DataTable({
      ajax: assetsPath + 'json/Dashboardtable-datatable.json',
      columns: [
        { data: 'id' },
        { data: 'full_name' },
        { data: 'post' },
        { data: 'email' },
        { data: 'city' },
        { data: 'start_date' },
        { data: 'salary' },
        { data: 'status' }
      ],
      columnDefs: [
        {
          /Dashboard/Dashboard For Checkboxes
          targets: 0,
          searchable: false,
          orderable: false,
          render: function () {
            return '<input type="checkbox" class="dt-checkboxes form-check-input">';
          },
          checkboxes: {
            selectRow: true,
            selectAllRender: '<input type="checkbox" class="form-check-input">'
          }
        },
        {
          /Dashboard/Dashboard Label
          targets: -1,
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
        }
      ],
      order: [[1, 'desc']],
      dom: '<"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
      select: {
        /Dashboard/Dashboard Select style
        style: 'multi'
      }
    });
  }

  /Dashboard/Dashboard Filter form control to default size
  /Dashboard/Dashboard ? setTimeout used for multilingual table initialization
  setTimeout(() => {
    $('.dataTables_filter .form-control').removeClass('form-control-sm');
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 200);
});
