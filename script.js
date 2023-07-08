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


});
