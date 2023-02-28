
$(document).ready(function () {
  
// Declaring the actual time
  var now = parseInt(dayjs().format('H'));

// Looping to target all the ids. 
// Pulling saved data from loacl storage and dispaying on screen even after refresh.
  $('.time-block').each(function(){
    var el = $(this).attr('id');
    var timeX = parseInt(el.split('-')[1]);
    $('#' + el).find('.description').val(localStorage.getItem(el));
  
// Defines if it is future, present or past, and applies the required styles.    
    if(now > timeX){
      $(this).addClass('past');
    }
    else if(now === timeX){
      $(this).addClass('present');
    } else{
      $(this).addClass('future');
    }
  })
  
// Displaying time and date live on top of the screen. 
  function liveTime(){
    $('#currentDay').text(dayjs().format('ddd, MMM D, YYYY. h:mm:ss a'));
  }
  
// Saving textarea input into local storage. 
  $('.saveBtn').click(function(){
    var userInput = $(this).siblings('.description').val();
    localStorage.setItem($(this).parent().attr('id'), userInput);
  })
  liveTime();
  setInterval(liveTime, 1000);
});