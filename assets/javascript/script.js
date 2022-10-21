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


loadTasks();