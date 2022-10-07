var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"))
    if (!tasks) {
        tasks = {};
    }
    for (i = 0; i < tasks.length; i++) {
        var index = i
        console.log(index);
        console.log(tasks[i])

        var firstHour = index + 8
        var taskP = $("<p>").addClass("text-item-" + firstHour).text(tasks[i])
        console.log(firstHour)
        console.log(taskP);
        $(".task-" + firstHour).append(taskP);
    }
}
//today's date loaded at the top of the page
var day = (moment().format("MMMM D, YYYY"));
$("#currentDay").text(day);

//To update task
$(".task").on("click", "p", function () {

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
$(".task").on("blur", "textarea", function () {
    //get the textareas; current value/text
    var text = $(this)
        .val()
        .trim();
    console.log(text)

    var taskP = $("<p>")
        .addClass("m-1")
        .text(text);

    // To replace textarea 
    $(this).replaceWith(taskP);
});

$(".save-btn").on("click", function () {

    var index = $(".saveBtn").index(this);

    tasks[index] = $(this).parent().find("p").text();

    localStorage.setItem("tasks", JSON.stringify(tasks));


});

loadTasks();
