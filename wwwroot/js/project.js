/**
 * Fanction (jquery)
 */

 'use strict';

 $(function () {
   var dataTablePermissions = $('.TProject'),
     dt_permission,
     Add = 'إنشاء مشروع.html';
     select2 = $('.select2');
 /*
   if (select2.length) {
     var $this = select2;
     $this.wrap('<div class="position-relative"></div>').select2({
       placeholder: 'إختيار إسم المستخدم',
       dropdownParent: $this.parent()
     });
   }
 */
   // Users List datatable
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
       // Buttons with Dropdown
       buttons: [
        {
          extend: 'collection',
          className: 'btn btn-label-secondary dropdown-toggle mx-3',
          text: '<i class="bx bx-upload me-2"></i>تقرير',
          buttons: [
            {
              extend: 'print',
              text: '<i class="bx bx-printer me-2" ></i>طباعة',
              className: 'dropdown-item',
              exportOptions: { columns: [0,1,2,3,4,5,6] }
            },
            {
              extend: 'pdf',
              text: '<i class="bx bxs-file-pdf me-2"></i>Pdf',
              className: 'dropdown-item',
                exportOptions: { columns: [0,10] }
            },
          ]
        },
        
       ],
 
     });
     
   }
  $("button[data-Add-link='hi']").on('click', () => {
    window.location = Add
 })
   // Delete Record
   $('.table tbody').on('click', '.delete-record', function () {
     dt_permission.row($(this).parents('tr')).remove().draw();
   });
 
   // Filter form control to default size
   // ? setTimeout used for multilingual table initialization
   setTimeout(() => {
     $('.dataTables_filter .form-control').removeClass('form-control-sm');
     $('.dataTables_length .form-select').removeClass('form-select-sm');
 

 
 
   }, 300);
 });