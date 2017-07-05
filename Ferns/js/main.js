
$(document).ready(function(){
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip();
  
  // Add smooth scrolling to all links in navbar + footer link
  $(".parent2 a, footer a[href='#myPage']").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
})

$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        margin:10,
        pagination:false,
        navigation:true,
        navigationText:["",""],
        autoPlay:true
    });
});
 

$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});
 


$(document).ready(function() {
	var step = 2;
	$('.cube').addClass('step1');
	$('.step1-img1').addClass('slideRight').css('display','block');
	$('.step1-img2').addClass('fadeIn').css('display','block');
	setInterval(function(){
		if (step == 5) {
			step = 1;
			$('.cube').removeClass('step4');
		}
		if (step == 1) {
			setTimeout(function() {
				$('.step1-img1').addClass('slideRight').css('display','block');
				$('.step1-img2').addClass('slideLeft').css('display','none');
			}, 1000);
			setTimeout(function() {
				$('.step2-img1').removeClass('slideDown').css('display','none');
				$('.step2-img2').removeClass('fadeIn').css('display','none');
			}, 2000);
		}
		if (step == 2) {
			setTimeout(function() {
				$('.step2-img2').addClass('fadeIn').css('display','block');
			}, 500);
			setTimeout(function() {
				$('.step2-img1').addClass('slideDown').css('display','block');
			}, 2000);
			$('.step3-img1').removeClass('fadeIn').css('display','none');
			$('.step3-img2').removeClass('slideUp').css('display','none');
		}
		if (step == 3) {
			setTimeout(function() {
				$('.step3-img1').addClass('fadeIn').css('display','block');
			}, 500);
			setTimeout(function() {
				$('.step3-img2').addClass('slideUp').css('display','block');
			}, 2000);
			$('.step4-img1').removeClass('slideLeft').css('display','none');
			$('.step4-img2').removeClass('fadeIn').css('display','none');
			$('.step4-img3').removeClass('slideRight').css('display','none');
			$('.step4-img4').removeClass('slideUp').css('display','none');
		}
		if (step == 4) {
			setTimeout(function() {
				$('.step4-img1').addClass('slideLeft').css('display','block');
				$('.step4-img2').addClass('fadeIn').css('display','block');
				$('.step4-img3').addClass('slideRight').css('display','block');
			}, 500);
			setTimeout(function() {
				$('.step4-img4').addClass('slideUp').css('display','block');
			}, 2000);
			$('.step1-img1').removeClass('slideRight').css('display','none');
			$('.step1-img2').removeClass('slideLeft').css('display','none');
		}
		$('.cube').addClass('step'+step).removeClass('step'+(step-1));
		step++;
	}, 4000);
});


$(document).ready(function() {

  var active1 = false;
  var active2 = false;
  var active3 = false;
  var active4 = false;

    $('.parent2').on('mousedown touchstart', function() {
    
    if (!active1) $(this).find('.test1').css({'background-color': 'gray', 'transform': 'translate(0px,125px)'});
    else $(this).find('.test1').css({'background-color': 'dimGray', 'transform': 'none'}); 
     if (!active2) $(this).find('.test2').css({'background-color': 'gray', 'transform': 'translate(-60px,105px)'});
    else $(this).find('.test2').css({'background-color': 'darkGray', 'transform': 'none'});
      if (!active3) $(this).find('.test3').css({'background-color': 'gray', 'transform': 'translate(-105px,60px)'});
    else $(this).find('.test3').css({'background-color': 'silver', 'transform': 'none'});
      if (!active4) $(this).find('.test4').css({'background-color': 'gray', 'transform': 'translate(-125px,0px)'});
    else $(this).find('.test4').css({'background-color': 'silver', 'transform': 'none'});
    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
    active4 = !active4;
      
    });
});