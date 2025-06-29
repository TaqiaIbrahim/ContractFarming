/Dashboard**
 * Fanction (jquery)
 */Dashboard

 'use strict';

 $(function () {
   var dataTablePermissions = $('.TProjecta'),
     dt_permission,
     Add = 'اضافه.html';
     select2 = $('.select2');
 /Dashboard*
   if (select2.length) {
     var $this = select2;
     $this.wrap('<div class="position-relative"></Dashboarddiv>').select2({
       placeholder: 'إختيار إسم المستخدم',
       dropdownParent: $this.parent()
     });
   }
 */Dashboard
   /Dashboard/Dashboard Users List datatable
   if (dataTablePermissions.length) {
     dt_permission = dataTablePermissions.DataTable({
 
       order: [[1, 'asc']],
       dom:
         '<"row mx-1"' +
         '<"col-sm-12 col-md-1" l>' +
         '<"col-sm-12 col-md-11"<"dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-md-between justify-content-center flex-wrap me-1"<"me-3"f>B>>' +
         '>t' +
         '<"row mx-2"' +
         '<"col-sm-12 col-md-6"i>' +
         '<"col-sm-12 col-md-6"p>' +
         '>',
       language: {
         sLengthMenu: '_MENU_',
         search: '',
         searchPlaceholder: 'بحث..'
       },
       /Dashboard/Dashboard Buttons with Dropdown
       buttons: [
       
         {
           text: '<i class="bx bx-plus"></Dashboardi>' + 'اضافه',
           className: 'add-new btn btn-primary mb-3 mb-md-0',
           attr: {
             'data-bs-toggle': 'offcanvas',
             'data-bs-target': '#AddFunctionModel',
             'data-Add-link': 'hi'
           },
           init: function (api, node, config) {
             $(node).removeClass('btn-secondary');
           }
         }
       ],
 
     });
     
   }
  $("button[data-Add-link='hi']").on('click', () => {
    window.location = Add
 })
   /Dashboard/Dashboard Delete Record
   $('.table tbody').on('click', '.delete-record', function () {
     dt_permission.row($(this).parents('tr')).remove().draw();
   });
 
   /Dashboard/Dashboard Filter form control to default size
   /Dashboard/Dashboard ? setTimeout used for multilingual table initialization
   setTimeout(() => {
     $('.dataTables_filter .form-control').removeClass('form-control-sm');
     $('.dataTables_length .form-select').removeClass('form-select-sm');
 

 
 
   }, 300);
 });