var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"))
    if (!tasks) {
        tasks = {};
    }
}
//today's date loaded at the top of the page
var day = (moment().format("MMMM D, YYYY"));
$("#currentDay").text(day);

//To update task
$(".task").on("click", "p", function () {
    console.log("<p> was clicked");
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
    console.log("<save button> was clicked");
    var index = $(".saveBtn").index(this);
    console.log(index)
    tasks[index] = $(this).parent().find("p").text();
    console.log(tasks)
    localStorage.setItem("tasks", JSON.stringify(tasks));


});
