$(document).ready(function() {

	// animation
    $(".bg-img").addClass("enlarged");
    $('#title').addClass('animated fadeInDown');
    $('#bio').addClass('animated fadeInUp');
    $('#line').addClass('animate');

    // display greeting
    var today = new Date();
	var hour = today.getHours();

	if(hour < 12){
		$('#greetings').html('morning');
	} else if (hour >= 12 && hour <= 17){
		$('#greetings').html('afternoon');
	} else if (hour === 18){
		$('#greetings').html('evening');
	} else if (hour >= 19 && hour <= 24){
		$('#greetings').html('night');
	} else{
		$('#greetings').html('greetings');
	}

	// get copyright year
	$('#year').html(today.getFullYear());

	// scroll to section
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash,
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing');
    });
});