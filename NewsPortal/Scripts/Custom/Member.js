function deleteRow(row) {
    var i = row.parentNode.parentNode.rowIndex;
    document.getElementById('TaskTable').deleteRow(i);
}


function insRow() {
    console.log('hi');
    var x = document.getElementById('TaskTable');
    var new_row = x.rows[1].cloneNode(true);
    var len = x.rows.length;
    new_row.cells[0].innerHTML = len;

    var inp1 = new_row.cells[1].getElementsByTagName('input')[0];
    inp1.id += len;
    inp1.value = '';
    var inp2 = new_row.cells[2].getElementsByTagName('input')[0];
    inp2.id += len;
    inp2.value = '';
    x.tBodies[0].appendChild(new_row)
    //x.appendChild(new_row);
}

$('#Attendance').on('change', function () {
    if (this.value === 'Absent') {
        $("#divIDClass").show();
    } else {
        $("#divIDClass").hide();
    }
});

// view team members
$("#TeamDropdown").on('change', function () {
    //alert($(this).val());
    var formData = new FormData();
    formData.append("MemberID", $(this).val());
    $.ajax({
        url: "http://localhost/ProjectTrackingSystem/Member/PartialTeamMemberViewChild",
        type: 'POST',
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
        success: function (result) {
            $('#TMemList').html(result);
        },
        error: function (data, errorThrown) {
            alert('request failed :' + errorThrown);
        }
    });


});

//update member status on checkbox selection.
function printChecked() {
    var items = document.getElementsByName('acs');
    var checkedItems = "";
    var uncheckedItems = "";
    for (var i = 0; i < items.length; i++) {
        if (items[i].type == 'checkbox' && items[i].checked == true) {
            checkedItems += items[i].value + ",";
        }
        else {
            uncheckedItems += items[i].value + ",";
        }
    }
    //alert(selectedItems);
    var formData = new FormData();
    formData.append("checkedItems", checkedItems);
    formData.append("uncheckedItems", uncheckedItems);
    $.ajax({
        url: "http://localhost/ProjectTrackingSystem/Member/PartialMemberStatus",
        type: 'POST',
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
        success: function (result) {
            alert('Update Successfuly');
        },
        error: function (data, errorThrown) {
            alert('request failed :' + errorThrown);
        }
    });
}

//Edit and add new Team
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost/ProjectTrackingSystem/Project/TeamDList",
        data: "{}",
        success: function (data) {
            var s = '<option value="-1">--Select--</option>';
            for (var i = 0; i < data.length; i++) {
                s += '<option value="' + data[i].TeamID + '">' + data[i].TeamName + '</option>';
            }
            $("#TeamDropdown").html(s);
        }
    });
});

$("#SaveTeam").on('click', function () {
    debugger;
    var TeamID = $("#TeamID").val();
    var Status = $("#TeamStatus").val();
    var TeamName = $("#TeamName").val();
    var data = { 'TeamID': TeamID, 'TeamName': TeamName, 'Status': Status };

    $.ajax({
        type: "Post",
        url: "http://localhost/ProjectTrackingSystem/Member/Dsignation",
        data: data,
        dataType: "json",
        success: function (response) {
            alert(response);
            //Get Student Update List
            $.ajax({
                type: "GET",
                url: "http://localhost/ProjectTrackingSystem/Member/DesList",
                data: "{}",
                success: function (data) {
                    var s = '<option value="-1">--Select--</option>';
                    for (var i = 0; i < data.length; i++) {
                        s += '<option value="' + data[i].TeamID + '">' + data[i].TeamName + '</option>';
                    }
                    $("#MDesignation").html(s);
                }
            });
        },
        error: function (response) {
            alert(response);
        }
    });
});