$(document).ready(function() {
    $(".bg-img").addClass("enlarged");
    $('#title').addClass('animated fadeInDown');
    $('#bio').addClass('animated fadeInUp');
    $('#line').addClass('animate');

    var today = new Date();
	var hour = today.getHours();

	if(hour < 12){
		$('#greetings').html('morning');
	} else if (hour >= 12 && hour <= 17){
		$('#greetings').html('afternoon');
	} else if (hour == 18){
		$('#greetings').html('evening');
	} else if (hour >= 19 && hour <= 24){
		$('#greetings').html('night');
	}
});