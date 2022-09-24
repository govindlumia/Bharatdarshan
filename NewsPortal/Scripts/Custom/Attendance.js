//$("body").on("click", "#SearchAttandance", function () {
//    debugger;
//    var BaseUrl = $("#BaseUrl").val();
//    var Member = $("#MemberId").val();
//    var Month = $("#AttendanceMonth").val();
//    var Year = $("#AttendanceYear").val();
//    debugger;
//    var data = { 'Member': Member, 'Month': Month, 'Year': Year };
//    $.ajax({
//        type: "Post",
//        url: BaseUrl + "/Attendance/ExportDataSetToExcel",
//        data: data,
//        dataType: "json",
//        success: function (result) {
//            $("#myLoadingElement").hide();
//        },
//        error: function (response) {
//            alert(response);
//        }
//    });
//});


//// //End add attendees in list 


function TestOnTextChange() {
    debugger;
    //alert("test");
    var date1 = new Date($("#datepicker").val());
    var date2 = new Date($("#datepicker1").val());

    // To calculate the time difference of two dates 
    var Difference_In_Time = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    //To display the final no. of days (result) 
    //alert("Total number of days between dates  <br>"
    //    + date1 + "<br> and <br>"
    //    + date2 + " is: <br> "
    //    + Difference_In_Days); 
    $("#TotalDay").val = Difference_In_Days;
}
