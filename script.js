var timeDisplay = $('#time-display');
var saveBTN = $('saveBTN')


$(document).ready(function () {
  $('.saveBtn').on('click', function(){
var parentDiv = $(this).parent();

var textarea = parentDiv.find('textarea');

var setSchedule = textarea.val();

var parentDivID = parentDiv.attr('id');
localStorage.setItem(parentDivID, setSchedule);
});

var time =parseInt(dayjs().format('H'));
$('.time-block').each(function() {

var scheduleID = $(this).attr('id').split('-');

var scheduleHour = parseInt(scheduleID[1]);

var scheduleAMPM = scheduleID[2];

var parentDiv = $(this);

var textarea = parentDiv.find('textarea');

var parentDivID = parentDiv.attr('id');

if (scheduleAMPM === "PM" && scheduleHour !==12) {
  scheduleHour +=12;
} else if (scheduleAMPM === "AM" && scheduleHour === 12) {
  scheduleHour = 0
}

if (scheduleHour < time) {
  $(this).addClass('past');
  } else if (scheduleHour === time){
    $(this).addClass('present');
  } else {
    $(this).addClass('future');
  }

var parentDivID = $(this).attr("id");

var textarea = $(this).find("textarea");

var savedSchedule = localStorage.getItem(parentDivID);

if (savedSchedule !== null) {
  textarea.area.val(savedSchedule);
}
});
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplay.text(rightNow);
}
displayTime();
setInterval(displayTime, 1000);
});
