// ------------- VARIABLES ------------- //
var ticking = false;
var isFirefox = (/Firefox/i.test(navigator.userAgent));
var isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
var scrollSensitivitySetting = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive) 
var slideDurationSetting = 600; //Amount of time for which slide is "locked"
var currentSlideNumber = 0;
var totalSlideNumber = $(".background").length;

// ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
function parallaxScroll(evt) {
  if (isFirefox) {
    //Set delta for Firefox
    delta = evt.detail * (-120);
  } else if (isIe) {
    //Set delta for IE
    delta = -evt.deltaY;
  } else {
    //Set delta for all other browsers
    delta = evt.wheelDelta;
  }

  if (ticking != true) {
    if (delta <= -scrollSensitivitySetting) {
      //Down scroll
      ticking = true;
      if (currentSlideNumber !== totalSlideNumber - 1) {
        currentSlideNumber++;
        nextItem();
      }
      slideDurationTimeout(slideDurationSetting);
    }
    if (delta >= scrollSensitivitySetting) {
      //Up scroll
      ticking = true;
      if (currentSlideNumber !== 0) {
        currentSlideNumber--;
      }
      previousItem();
      slideDurationTimeout(slideDurationSetting);
    }
  }
}

// ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
function slideDurationTimeout(slideDuration) {
  setTimeout(function() {
    ticking = false;
  }, slideDuration);
}

// ------------- ADD EVENT LISTENER ------------- //
var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);

// ------------- SLIDE MOTION ------------- //
function nextItem() {
  var $previousSlide = $(".background").eq(currentSlideNumber - 1);
  $previousSlide.removeClass("up-scroll").addClass("down-scroll");
}

function previousItem() {
  var $currentSlide = $(".background").eq(currentSlideNumber);
  $currentSlide.removeClass("down-scroll").addClass("up-scroll");
}

// ------------- scroll down icon ------------- //

$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

// ------------------------Logo-------------------------- //
var scrollY;
var head = document.querySelector('header');
var lst = document.querySelectorAll('li');
var image = document.querySelector('img');

window.addEventListener('scroll',function scrollActive(){
  scrollY= window.pageYOffset;
  if(scrollY > 20){  
    for(var i=0;i<lst.length;i++){
         lst[i].style.padding = "20px";
       }
    if(window.innerWidth < 420){      
      image.style.width ="130px";      
      image.style.top = "12px";
      image.style.left = "40px";
      image.style.opacity = "1";
    }else{      
      image.style.width ="120px";      
      image.style.top = "7px";
      image.style.left = "80px";
      image.style.opacity = "1";
    }
  }
  else{    
     for(var i=0;i<lst.length;i++){
       lst[i].style.padding = "48px 25px";
     }
      if(window.innerWidth < 920){
        image.style.width ="80%";   
       image.style.top = "180%";
       image.style.left = "7%";
       image.style.opacity = "0.8";
      }else{
       image.style.width ="50%";   
       image.style.top = "200%";
       image.style.left = "25%";
       image.style.opacity = "0.8";
      }
  }
},false);