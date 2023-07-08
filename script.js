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

var scheduleAmPM = scheduleID[2];

var parentDiv = $(this);

var textarea = parentDiv.find('textarea');

var parentDivID = parentDiv.attr('id');


})

});
