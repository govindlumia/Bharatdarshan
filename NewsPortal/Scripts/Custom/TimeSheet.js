//Save Project Task
$(function () {
    $("#TimesheetSubmit").click(function () {
        var BaseUrl = $("#BaseUrl").val();
        var formData = new FormData();
        if ($("#ProjectName").val() == "") {
            alert("Enter Project Name.");
        }
        else {
            formData.append("TaskId", 0);  
            formData.append("ClientId", $("#CompanyId3").val()); 
            formData.append("ProjectId", $("#ProjectId").val());   
            formData.append("TaskName", $("#TaskName").val());            
            formData.append("datepicker", $("#datepicker").val());     
            formData.append("TaskTotalHours", $("#TaskTotalHours").val());     
            formData.append("TaskRemark", $("#TaskRemark").val());            
            $.ajax({
                url: BaseUrl + "/Timesheet/ProjectTimesheetTask",
                type: 'POST',
                cache: false,
                contentType: false,
                processData: false,
                data: formData,
                success: function (response) {
                    //Get Student University List
                    var formData = new FormData();
                    formData.append("ProjectId", $("#ProjectId").val());
                    $.ajax({
                        url: BaseUrl + "/Timesheet/PartialTaskViewChild",
                        type: 'POST',
                        cache: false,
                        contentType: false,
                        processData: false,
                        data: formData,
                        success: function (result) {
                            $('#TimesheetTaskList').html(result);
                        },
                        error: function (data, errorThrown) {
                            alert('request failed :' + errorThrown);
                        }
                    });
                    alert(response);
                }
            });
        }
    });
});

//Remove task from project
$(document).ready(function () {

    //Save project task
    $("body").on("click", "#btnremove", function () {
        var BaseUrl = $("#BaseUrl").val();
        var Tid = $(this).attr("data-id");       
        var data = { 'TaskId': Tid};
        $.ajax({
            type: "Post",
            url: BaseUrl + "/Project/DesableTask",
            data: data,
            dataType: "json",
            success: function (response) {
                alert(response);  
                //Get project task List
                var formData = new FormData();
                formData.append("ProjectId", $("#ProjectId").val());
                $.ajax({
                    url: BaseUrl + "/Project/PartialTaskViewChild",
                    type: 'POST',
                    cache: false,
                    contentType: false,
                    processData: false,
                    data: formData,
                    success: function (result) {
                        $('#TaskList').html(result);
                    },
                    error: function (data, errorThrown) {
                        alert('request failed :' + errorThrown);
                    }
                });
            },
            error: function (response) {
                alert(response);
            }
        });
    });
});
