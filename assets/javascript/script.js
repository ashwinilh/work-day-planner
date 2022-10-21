tasks = [];

var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("chores"))
    if (!tasks) {
        tasks = {};
    };
    printTasks(tasks)
}

var printTasks = function () {
    $.each(tasks, function (list, arr) {
        var taskP = $("<p>").addClass("description task-item-" + list).text(arr)
        $("#task-item-" + list).replaceWith(taskP);
    })
}

setInterval(function () {
    hourAudit();
}, 1000 * 60 * 60);

//To update task
$(".taskArea").on("click", "p", function () {
    var text = $(this).text().trim();
    var textInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

// Tasks pending
$(".taskArea").on("blur", "textarea", function () {
    var text = $(this).val().trim();
    var taskP = $("<p>").addClass("taskItem").text(text);
    $(this).replaceWith(taskP);
});

$(".save-btn").on("click", function () {
    var index = $(".saveBtn").index(this);
    tasks[index] = $(this).parent().find(".taskItem").text();
    localStorage.setItem("chores", JSON.stringify(tasks));
});

//today's date 
var day = (moment().format("MMMM D, YYYY"));
$("#currentDay").text(day);
var hourCount = function () {
    var currentHour = moment().hour();
    for (var i = 7; i <= 19; i++) {
        var taskArea = $("#task-" + i)
        if (currentHour > i) {
            $(taskArea).addClass("past");
        } else if (currentHour === i) {
            $(taskArea).addClass("present");
        } else {
            $(taskArea).addClass("future")
        }
    }
}


loadTasks();
hourCount();