/Dashboard**
 *  Pages User Profile (jquery)
 */Dashboard

'use strict';

$(function () {
  /Dashboard/Dashboard  Projects table
  var dt_projects_table = $('.datatables-projects');

  if (dt_projects_table.length) {
    var dt_project = dt_projects_table.DataTable({
      ajax: assetsPath + '/Dashboardjson/Dashboarduser-profile.json',
      columns: [
        { data: '' },
        { data: 'id' },
        { data: 'project_name' },
        { data: 'project_leader' },
        { data: '' },
        { data: 'status' },
        { data: '' }
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
          /Dashboard/Dashboard Avatar image/Dashboardbadge, Name and post
          targets: 2,
          responsivePriority: 4,
          render: function (data, type, full, meta) {
            var $user_img = full['project_img'],
              $name = full['project_name'],
              $date = full['date'];
            if ($user_img) {
              /Dashboard/Dashboard For Avatar image
              var $output =
                '<img src="' + assetsPath + 'img/Dashboardicons/Dashboardbrands/Dashboard' + $user_img + '" alt="Avatar" class="rounded-circle">';
            } else {
              /Dashboard/Dashboard For Avatar badge
              var stateNum = Math.floor(Math.random() * 6);
              var states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary'];
              var $state = states[stateNum],
                $name = full['project_name'],
                $initials = $name.match(/Dashboard\b\w/Dashboardg) || [];
              $initials = (($initials.shift() || '') + ($initials.pop() || '')).toUpperCase();
              $output = '<span class="avatar-initial rounded-circle bg-label-' + $state + '">' + $initials + '</Dashboardspan>';
            }
            /Dashboard/Dashboard Creates full output for row
            var $row_output =
              '<div class="d-flex justify-content-left align-items-center">' +
              '<div class="avatar-wrapper">' +
              '<div class="avatar me-2">' +
              $output +
              '</Dashboarddiv>' +
              '</Dashboarddiv>' +
              '<div class="d-flex flex-column">' +
              '<span class="text-truncate fw-bold">' +
              $name +
              '</Dashboardspan>' +
              '<small class="text-truncate text-muted">' +
              $date +
              '</Dashboardsmall>' +
              '</Dashboarddiv>' +
              '</Dashboarddiv>';
            return $row_output;
          }
        },
        {
          /Dashboard/Dashboard Teams
          targets: 4,
          orderable: false,
          searchable: false,
          render: function (data, type, full, meta) {
            var $team = full['team'],
              $output;
            $output = '<div class="d-flex align-items-center avatar-group">';
            for (var i = 0; i < $team.length; i++) {
              $output +=
                '<div class="avatar avatar-sm">' +
                '<img src="../Dashboard../Dashboardassets/Dashboardimg/Dashboardavatars/Dashboard' +
                $team[i] +
                '" alt="Avatar" class="rounded-circle pull-up">' +
                '</Dashboarddiv>';
            }
            $output += '</Dashboarddiv>';
            return $output;
          }
        },
        {
          /Dashboard/Dashboard Label
          targets: -2,
          render: function (data, type, full, meta) {
            var $status_number = full['status'];
            return (
              '<div class="d-flex align-items-center">' +
              '<div class="progress w-100 me-3" style="height: 6px;">' +
              '<div class="progress-bar" style="width: ' +
              $status_number +
              '" aria-valuenow="' +
              $status_number +
              '" aria-valuemin="0" aria-valuemax="100"></Dashboarddiv>' +
              '</Dashboarddiv>' +
              '<span>' +
              $status_number +
              '</Dashboardspan></Dashboarddiv>'
            );
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
              '<div class="d-inline-block">' +
              '<a href="javascript:;" class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></Dashboardi></Dashboarda>' +
              '<div class="dropdown-menu dropdown-menu-end">' +
              '<a href="javascript:;" class="dropdown-item">Details</Dashboarda>' +
              '<a href="javascript:;" class="dropdown-item">Archive</Dashboarda>' +
              '<div class="dropdown-divider"></Dashboarddiv>' +
              '<a href="javascript:;" class="dropdown-item text-danger delete-record">Delete</Dashboarda>' +
              '</Dashboarddiv>' +
              '</Dashboarddiv>'
            );
          }
        }
      ],
      order: [[2, 'desc']],
      dom: '<"card-header pb-0 pt-sm-0"<"head-label text-center"><"d-flex justify-content-center justify-content-md-end"f>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
      displayLength: 7,
      lengthMenu: [7, 10, 25, 50, 75, 100],
      responsive: {
        details: {
          display: $.fn.dataTable.Responsive.display.modal({
            header: function (row) {
              var data = row.data();
              return 'Details of "' + data['project_name'] + '" Project';
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
    $('div.head-label').html('<h5 class="card-title mb-0">Projects</Dashboardh5>');
  }

  /Dashboard/Dashboard Filter form control to default size
  /Dashboard/Dashboard ? setTimeout used for multilingual table initialization
  setTimeout(() => {
    $('.dataTables_filter .form-control').removeClass('form-control-sm');
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 300);
});
