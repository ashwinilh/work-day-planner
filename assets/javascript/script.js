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


loadTasks();