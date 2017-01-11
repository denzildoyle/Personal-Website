$(document).ready(function() {
    $(".bg-img").addClass("enlarged");
    $('#title').addClass('animated fadeInDown');
    $('#bio').addClass('animated fadeInUp');
    $('#line').addClass('animate');
});   
var waypoint = new Waypoint({
  element: document.getElementById('work'),
  handler: function(direction) {
    if (direction == "down"){
    	console.log("here");
    }
  }
});