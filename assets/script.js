tasks = [];
var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"))
    if (!tasks) {
        tasks = {};
};
printTasks(tasks)
}
var printTasks = function(){
    $.each(tasks, function(list, arr){

        var taskP = $("<p>").addClass("description task-item-" + list).text(arr)

        console.log(list)
        console.log(taskP);

        $("#task-item-" + list).replaceWith(taskP);
    })
 }

//today's date loaded at the top of the page
var day = (moment().format("MMMM D, YYYY"));
$("#currentDay").text(day);
//color code hours bins
var hourCount = function () {
    var currentHour = moment().hour()

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

//To update task
$(".taskBin").on("click", "p", function () {
    // console.log("<p> was clicked");
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text);

    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

// Tasks pending
$(".taskBin").on("blur", "textarea", function () {
    //get the textareas; current value/text
    var text = $(this)
        .val()
        .trim();
    console.log(text)

    var taskP = $("<p>")
        .addClass("taskItem")
        .text(text);

    // To replace textarea 
    $(this).replaceWith(taskP);
});

$(".save-btn").on("click", function () {

    var index = $(".saveBtn").index(this);

    tasks[index] = $(this).parent().find(".taskItem").text();

    localStorage.setItem("tasks", JSON.stringify(tasks));


});
setInterval(function () {
    hourAudit();
}, 1000 * 60 * 60);


loadTasks();
hourCount();
