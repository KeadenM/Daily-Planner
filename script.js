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

})

});
