
////Edit and add new project type
//$(document).ready(function () {   
//    var BaseUrl = $("#BaseUrl").val();
//    var value = $("#tempProjectType").val();
   
//    $.ajax({
//        type: "GET",
//        url: BaseUrl + "/Project/PTypeDList",
//        data: "{}",
//        success: function (data) {
//            var s = '<option value="-1">' + value + '</option>';
//            for (var i = 0; i < data.length; i++) {
//                s += '<option value="' + data[i].PTypeId + '">' + data[i].PtypeName + '</option>';
//            }
//            $("#PTypeDropdown").html(s);
//        }
//    });







    






//    $("body").on("click", "#SaveProjectType", function () {
//        var id = $(this).attr("data-id");
//        $('#PTypeId').val(id);
//    });

//    $("body").on("click", "#FDFSave", function () {
//        debugger;
//        var BaseUrl = $("#BaseUrl").val();
//        var PTypeId = $("#PTypeId").val();
//        var Status = $("#Status").val();
//        var PtypeName = $("#PtypeName").val();
//        var data = { 'PTypeId': PTypeId, 'Status': Status, 'PtypeName': PtypeName };
//        $.ajax({
//            type: "Post",
//            url: BaseUrl + "/Project/ProjectType",
//            data: data,
//            dataType: "json",
//            success: function (response) {
//                alert(response);
//                $.ajax({
//                    type: "GET",
//                    url: BaseUrl + "/Project/PTypeDList",
//                    data: "{}",
//                    success: function (data) {
//                        var s = '<option value="-1">--Select--</option>';
//                        for (var i = 0; i < data.length; i++) {
//                            s += '<option value="' + data[i].PTypeId + '">' + data[i].PtypeName + '</option>';
//                        }
//                        $("#PTypeDropdown").html(s);
//                    }
//                });
//            },
//            error: function (response) {
//                alert(response);
//            }
//        });
//    });
//});




////Edit and add new Team
//$(document).ready(function () {
//    var BaseUrl = $("#BaseUrl").val();
//    $.ajax({
//        type: "GET",
//        url: BaseUrl + "/Project/TeamDList",
//        data: "{}",
//        success: function (data) {
//            var s = '<option value="-1">--Select--</option>';
//            for (var i = 0; i < data.length; i++) {
//                s += '<option value="' + data[i].TeamID + '">' + data[i].TeamName + '</option>';
//            }
//            $("#TeamDropdown").html(s);
//        }
//    });

//    $("body").on("click", "#SaveTeam", function () {
//        debugger;
//        var BaseUrl = $("#BaseUrl").val();
//        var TeamID = $("#TeamID").val();
//        var Status = $("#TeamStatus").val();
//        var TeamName = $("#TeamName").val();
//        var data = { 'TeamID': TeamID, 'TeamName': TeamName, 'Status': Status };

//        $.ajax({
//            type: "Post",
//            url: BaseUrl + "/Member/Team",
//            data: data,
//            dataType: "json",
//            success: function (response) {
//                alert(response);
//                //Get Student Update List
//                $.ajax({
//                    type: "GET",
//                    url: BaseUrl + "/Project/TeamDList",
//                    data: "{}",
//                    success: function (data) {
//                        var s = '<option value="-1">--Select--</option>';
//                        for (var i = 0; i < data.length; i++) {
//                            s += '<option value="' + data[i].TeamID + '">' + data[i].TeamName + '</option>';
//                        }
//                        $("#TeamDropdown").html(s);
//                    }
//                });
//            },
//            error: function (response) {
//                alert(response);
//            }
//        });
//    });
//});

////Edit and add new Company
//$(document).ready(function () {
//    //fill dropdown
//    $.ajax({
//        type: "GET",
//        url: BaseUrl + "/Project/CompanyDList",
//        data: "{}",
//        success: function (data) {
//            var s = '<option value="-1">--Select--</option>';
//            for (var i = 0; i < data.length; i++) {
//                s += '<option value="' + data[i].CompanyID + '">' + data[i].CompanyName + '</option>';
//            }
//            $("#CompanyId").html(s);
//        }
//    });
//    
//});


////Save Project Members
//$(function () {
//    $("#PMemberSubmit").click(function () {
//        debugger;
//        var BaseUrl = $("#BaseUrl").val();
//        var formData = new FormData();
//        if ($("#ProjectName").val() == "") {
//            alert("Enter Project Name.");
//        }
//        else {
//            formData.append("ProjectId", $("#ProjectId").val());
//            formData.append("PMemberId", $("#PMemberDropdown").val());
//            $.ajax({
//                url: BaseUrl + "/Project/ProjectMember",
//                type: 'POST',
//                cache: false,
//                contentType: false,
//                processData: false,
//                data: formData,
//                success: function (response) {
//                    //Get Student University List
//                    var formData = new FormData();
//                    formData.append("ProjectId", $("#ProjectId").val());
//                    $.ajax({
//                        url: BaseUrl + "/Project/PartialMemberViewChild",
//                        type: 'POST',
//                        cache: false,
//                        contentType: false,
//                        processData: false,
//                        data: formData,
//                        success: function (result) {
//                            $('#TaskList').html(result);
//                        },
//                        error: function (data, errorThrown) {
//                            alert('request failed :' + errorThrown);
//                        }
//                    });
//                    alert(response);
//                }
//            });
//        }
//    });
//});



////Save Project Task
//$(function () {
//    $("#ProjectTaskSubmit").click(function () {
//        debugger;
//        var BaseUrl = $("#BaseUrl").val();
//        var formData = new FormData();
//        if ($("#ProjectName").val() == "") {
//            alert("Enter Project Name.");
//        }
//        else {
//            formData.append("ProjectId", $("#ProjectId").val());
//            formData.append("TaskId", 0);
//            formData.append("Status", "Enable");
//            formData.append("ProjectName", $("#ProjectName").val());
//            $.ajax({
//                url: BaseUrl + "/Project/ProjectTask",
//                type: 'POST',
//                cache: false,
//                contentType: false,
//                processData: false,
//                data: formData,
//                success: function (response) {
//                    //Get Student University List
//                    var formData = new FormData();
//                    formData.append("ProjectId", $("#ProjectId").val());
//                    $.ajax({
//                        url: BaseUrl + "/Project/PartialTaskViewChild",
//                        type: 'POST',
//                        cache: false,
//                        contentType: false,
//                        processData: false,
//                        data: formData,
//                        success: function (result) {
//                            $('#TaskList').html(result);
//                        },
//                        error: function (data, errorThrown) {
//                            alert('request failed :' + errorThrown);
//                        }
//                    });
//                    alert(response);
//                }
//            });
//        }
//    });
//});

////Remove task from project
//$(document).ready(function () {

//    //Save project task
//    $("body").on("click", "#btnremove", function () {
//        debugger;
//        var BaseUrl = $("#BaseUrl").val();
//        var Tid = $(this).attr("data-id");
//        var data = { 'TaskId': Tid };
//        $.ajax({
//            type: "Post",
//            url: BaseUrl + "/Project/DesableTask",
//            data: data,
//            dataType: "json",
//            success: function (response) {
//                alert(response);
//                //Get project task List
//                var formData = new FormData();
//                formData.append("ProjectId", $("#ProjectId").val());
//                $.ajax({
//                    url: BaseUrl + "/Project/PartialTaskViewChild",
//                    type: 'POST',
//                    cache: false,
//                    contentType: false,
//                    processData: false,
//                    data: formData,
//                    success: function (result) {
//                        $('#TaskList').html(result);
//                    },
//                    error: function (data, errorThrown) {
//                        alert('request failed :' + errorThrown);
//                    }
//                });
//            },
//            error: function (response) {
//                alert(response);
//            }
//        });
//    });
//});

////update Task status on checkbox Submit.
//function printChecked() {
//    var BaseUrl = $("#BaseUrl").val();
//    var items = document.getElementsByName('TaskStatus');
//    var checkedItems = "";
//    var uncheckedItems = "";
//    for (var i = 0; i < items.length; i++) {
//        if (items[i].type == 'checkbox' && items[i].checked == true) {
//            checkedItems += items[i].value + ",";
//        }
//        else {
//            uncheckedItems += items[i].value + ",";
//        }
//    }
//    //alert(selectedItems);
//    var formData = new FormData();
//    formData.append("checkedItems", checkedItems);
//    formData.append("uncheckedItems", uncheckedItems);
//    $.ajax({
//        url: BaseUrl + "/Project/PartialTaskStatus",
//        type: 'POST',
//        cache: false,
//        contentType: false,
//        processData: false,
//        data: formData,
//        success: function (result) {
//            alert('Update Successfuly');
//        },
//        error: function (data, errorThrown) {
//            alert('request failed :' + errorThrown);
//        }
//    });
//}



////
