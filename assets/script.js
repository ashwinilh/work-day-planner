//today's date loaded at the top of the page
var day = (moment().format("MMMM D, YYYY"));
    console.log(day)

var currentDate = function(){
    $("#currentDay").text(day);
}

currentDate();