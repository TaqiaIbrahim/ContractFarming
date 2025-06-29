var dataTable;

$(document).ready(function () {
    $('#tblData').dataTable({
        "bDestroy": true
    }).fnDestroy();

    $('#tblData').dataTable({
        "aoColumnDefs": [{
            "bSortable": false,
            "aTargets": ["sorting_disabled"]
        }],
        "bDestroy": true
    }).fnDestroy();
    loadDataTable();

});

function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": {
            "url":"/Employees/GetAll"
        },
        "columns": [
            {
                "data": "name", "width": "15%"
            },
            {
                "data": "imgUrl", "width": "50px", "render": function (data) {
                    return '<img class="rounded img-thumbnail" style="width:40px; height:40px;" src="../uploads/'+data+'">';
                }
            },
            { "data": "cityName", "width": "15%" },
            { "data": "deptName", "width": "15%" },
            { "data": "jobName", "width": "15%" },
            { "data": "age", "width": "15%" },
            { "data": "salary", "width": "15%" },

            {
                "data": "id",
                "render": function (data) {
                    return `
                        <div class="w-75 btn-group" role="group">
                        <a href="/Employees/CreateOrEdit/${data}"
                        class="btn btn-info btn-sm mx-1"> <i class="bi bi-eye"></i></a>
                        <a href="/Employees/CreateOrEdit/${data}"
                        class="btn btn-warning btn-sm mx-1"> <i class="bi bi-pencil-square"></i></a>
                        <a onClick=Delete('/Employees/Delete/${data}')
                        class="btn btn-sm btn-danger mx-1"> <i class="bi bi-trash-fill"></i></a>
					</div>
                        `
                },
                "width": "15%"
            }
        ]
    });
}



function Delete(url,id) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: url,
                type: 'DELETE',
                data:
                {
                    "Id":id
                },
               .done(function (data) {
                   sweetAlert
                       ({
                           title: "Deleted!",
                           text: "Your file was successfully deleted!",
                           type: "success"
                       },
                           function () {
                               window.location.href = '/DeleteConfirmation/Details';
                           });
               })
                    .error(function (data) {
                        swal("Oops", "We couldn't connect to the server!", "error");
                    });
            