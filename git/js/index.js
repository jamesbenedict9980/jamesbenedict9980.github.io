
/*Interactivity to determine when an animated element in in view. In view elements trigger our animation*/
$(document).ready(function() {

  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip();
  
  // Add smooth scrolling to all links in navbar + footer link
  $(".wrapper a, footer a[href='#myPage']").on('click', function(event) {

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

  //window and animation items
  var animation_elements = $.find('.animation-element');
  var web_window = $(window);

  //check to see if any animation containers are currently in view
  function check_if_in_view() {
    //get current window information
    var window_height = web_window.height();
    var window_top_position = web_window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    //iterate through elements to see if its in view
    $.each(animation_elements, function() {

      //get the elements information
      var element = $(this);
      var element_height = $(element).outerHeight();
      var element_top_position = $(element).offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        element.addClass('in-view');
      } else {
        element.removeClass('in-view');
      }
    });

  }

  //on or scroll, detect elements in view
  $(window).on('scroll resize', function() {
      check_if_in_view()
    })
    //trigger our scroll event on initial load
  $(window).trigger('scroll');

});

//main-slider-1

/* var slideInd = 1;
showDiv(slideInd);

function plusDiv(m) {
  showDiv(slideInd += m);
}

function currentDivs(m) {
  showDiv(slideInd = m);
}

function showDiv(m) {
var j;
var y = document.getElementsByClassName("mySlides");
  if(m > y.length){document.getElementById('out').innerHTML='1' +' of 8';} 
  else if( m < 1){document.getElementById('out').innerHTML= y.length +' of 8';}
 else if( m >= 1){document.getElementById('out').innerHTML= slideInd +' of 8';}
  
  if (m > y.length) {slideInd = 1}    
  if (m < 1) {slideInd = y.length}
  for (j = 0; j < y.length; j++) {
    y[j].style.display = "none";  
  }
  y[slideInd-1].style.display = "block"; 
} */


var slideInd1 = 1;

showDiv1(slideInd1);
var m1=0;

function plusDiv1(m1) {
  showDiv1(slideInd1 += m1);
}

function currentDivs1(m1) {
  showDiv1(slideInd1 = m1);
}

function showDiv1(m1) {
var j1;

var y1 = document.getElementsByClassName("mySlides");
	if(m1 > y1.length){$('#out').text('1' +' of 8');} 
 else if( m1 >= 1) {$('#out').text(m1 +' of 8');}
 else if( m1 < 1){$('#out').text(y1.length +' of 8');}
  
  document.getElementById("sl").innerHTML=m1;
  
  if (m1 > y1.length) {slideInd1 = 1}    
  if (m1 < 1) {slideInd1 = y1.length}
  for (j1 = 0; j1 < y1.length; j1++) {
    y1[j1].style.display = "none";  
  }
  y1[slideInd1-1].style.display = "block"; 
} 





//inside slider

var slideIn = 1;
sho(slideIn);

function plu(o) {
  sho(slideIn += o);
}

function sho(o) {
  var k;
  var z = document.getElementsByClassName("mySlides-inside");
  if (o > z.length) {slideIn = 1}    
  if (o < 1) {slideIn = z.length}
  for (k = 0; k < z.length; k++) {
     z[k].style.display = "none";  
  }
  z[slideIn-1].style.display = "block";  
}



//inside slider-2

var slideInd = 1;
show(slideInd);

function plus(i) {
  show(slideInd += i);
}

function show(i) {
  var k;
  var z = document.getElementsByClassName("mySlides-inside-2");
  if (i > z.length) {slideInd = 1}    
  if (i < 1) {slideInd = z.length}
  for (k = 0; k < z.length; k++) {
     z[k].style.display = "none";  
  }
  z[slideInd-1].style.display = "block";  
}


//inside slider-3

var slideInde = 1;
shows(slideInde);

function pluss(j) {
  shows(slideInde += j);
}

function shows(j) {
  var k;
  var z = document.getElementsByClassName("mySlides-inside-3");
  if (j > z.length) {slideInde = 1}    
  if (j < 1) {slideInde = z.length}
  for (k = 0; k < z.length; k++) {
     z[k].style.display = "none";  
  }
  z[slideInde-1].style.display = "block";  
}

//end of first slider



//main-slider-2

var slideInd2 = 1;
showDiv2(slideInd2);

function plusDiv2(m2) {
  showDiv2(slideInd2 += m2);
}

function currentDivs2(m2) {
  showDiv2(slideInd2 = m2);
}

function showDiv2(m2) {
var j2;
var y2 = document.getElementsByClassName("mySlides-2");
  if(m2 > y2.length){$('#out-2').html('1' +' of 8');slideInd2 = 1} 
 else if( m2 < 1){$('#out-2').html(y2.length +' of 8');slideInd2 = y2.length}
 else if( m2 >= 1) {$('#out-2').html(m2 +' of 8');}

  for (j2 = 0; j2 < y2.length; j2++) {
    y2[j2].style.display = "none";  
  }
  y2[slideInd2-1].style.display = "block"; 
}



//main-slider-2 - inside slider-1
var sl = 1;
sh(sl);

function pl(a) {
  sh(sl += a);
}

function sh(a) {
  var b;
  var c = document.getElementsByClassName("mySlides-2-inside-1");
  if (a > c.length) {sl = 1}    
  if (a < 1) {sl = c.length}
  for (b = 0; b < c.length; b++) {
     c[b].style.display = "none";  
  }
  c[sl-1].style.display = "block";  
}

//main-slider-2 - inside slider-2
var sl2 = 1;
sh2(sl2);

function pl2(a2) {
  sh2(sl2 += a2);
}

function sh2(a2) {
  var b2;
  var c2 = document.getElementsByClassName("mySlides-2-inside-2");
  if (a2 > c2.length) {sl2 = 1}    
  if (a2 < 1) {sl2 = c2.length}
  for (b2 = 0; b2 < c2.length; b2++) {
     c2[b2].style.display = "none";  
  }
  c2[sl2-1].style.display = "block";  
}

//main-slider-2 - inside slider-3
var sl3 = 1;
sh3(sl3);

function pl3(a3) {
  sh3(sl3 += a3);
}

function sh3(a3) {
  var b3;
  var c3 = document.getElementsByClassName("mySlides-2-inside-3");
  if (a3 > c3.length) {sl3 = 1}    
  if (a3 < 1) {sl3 = c3.length}
  for (b3 = 0; b3 < c3.length; b3++) {
     c3[b3].style.display = "none";  
  }
  c3[sl3-1].style.display = "block";  
}

//main-slider-2 - inside slider-4
var sl4 = 1;
sh4(sl4);

function pl4(a4) {
  sh4(sl4 += a4);
}

function sh4(a4) {
  var b4;
  var c4 = document.getElementsByClassName("mySlides-2-inside-4");
  if (a4 > c4.length) {sl4 = 1}    
  if (a4 < 1) {sl4 = c4.length}
  for (b4 = 0; b4 < c4.length; b4++) {
     c4[b4].style.display = "none";  
  }
  c4[sl4-1].style.display = "block";  
}


//main-slider-2 - inside slider-5
var sl5 = 1;
sh5(sl5);

function pl5(a5) {
  sh5(sl5 += a5);
}

function sh5(a5) {
  var b5;
  var c5 = document.getElementsByClassName("mySlides-2-inside-5");
  if (a5 > c5.length) {sl5 = 1}
  if (a5 < 1) {sl5 = c5.length}
  for (b5 = 0; b5 < c5.length; b5++) {
     c5[b5].style.display = "none";  
  }
  c5[sl5-1].style.display = "block";  
}

//main-slider-2 - inside slider-6
var sl6 = 1;
sh6(sl6);

function pl6(a6) {
  sh6(sl6 += a6);
}

function sh6(a6) {
  var b6;
  var c6 = document.getElementsByClassName("mySlides-2-inside-6");
  if (a6 > c6.length) {sl6 = 1}
  if (a6 < 1) {sl6 = c6.length}
  for (b6 = 0; b6 < c6.length; b6++) {
     c6[b6].style.display = "none";  
  }
  c6[sl6-1].style.display = "block";  
}

//main-slider-2 - inside slider-7
var sl7 = 1;
sh7(sl7);

function pl7(a7) {
  sh7(sl7 += a7);
}

function sh7(a7) {
  var b7;
  var c7 = document.getElementsByClassName("mySlides-2-inside-7");
  if (a7 > c7.length) {sl7 = 1}
  if (a7 < 1) {sl7 = c7.length}
  for (b7 = 0; b7 < c7.length; b7++) {
     c7[b7].style.display = "none";  
  }
  c7[sl7-1].style.display = "block";  
}


//main-slider-3

var slideInd3 = 1;
showDiv3(slideInd3);

function plusDiv3(m3) {
  showDiv3(slideInd3 += m3);
}

function currentDivs3(m3) {
  showDiv3(slideInd3 = m3);
}

function showDiv3(m3) {
var j3;
var y3 = document.getElementsByClassName("mySlides-3");
  if(m3 > y3.length){$('#out-3').html('1' +' of 8');} 
 else if( m3>=1) {$('#out-3').html(m3 +' of 8');}
 else if( m3 < 1){$('#out-3').html(y3.length +' of 8');}
  

  if (m3 > y3.length) {slideInd3 = 1}    
  if (m3 < 1) {slideInd3 = y3.length}
  for (j3 = 0; j3 < y3.length; j3++) {
    y3[j3].style.display = "none";  
  }
  y3[slideInd3-1].style.display = "block"; 
}

//main-slider-3 - inside slider-1
var sl31= 1;
sh31(sl31);

function pl31(a31) {
  sh31(sl31 += a31);
}

function sh31(a31) {
  var b31;
  var c31 = document.getElementsByClassName("mySlides-3-inside-1");
  if (a31 > c31.length) {sl31 = 1}
  if (a31 < 1) {sl31 = c31.length}
  for (b31 = 0; b31 < c31.length; b31++) {
     c31[b31].style.display = "none";  
  }
  c31[sl31-1].style.display = "block";  
}

//main-slider-3 - inside slider-2
var sl32= 1;
sh32(sl32);

function pl32(a32) {
  sh32(sl32 += a32);
}

function sh32(a32) {
  var b32;
  var c32 = document.getElementsByClassName("mySlides-3-inside-2");
  if (a32 > c32.length) {sl32 = 1}
  if (a32 < 1) {sl32 = c32.length}
  for (b32 = 0; b32 < c32.length; b32++) {
     c32[b32].style.display = "none";  
  }
  c32[sl32-1].style.display = "block";  
}

//main-slider-3 - inside slider-3
var sl33= 1;
sh33(sl33);

function pl33(a33) {
  sh33(sl33 += a33);
}

function sh33(a33) {
  var b33;
  var c33 = document.getElementsByClassName("mySlides-3-inside-3");
  if (a33 > c33.length) {sl33 = 1}
  if (a33 < 1) {sl33 = c33.length}
  for (b33 = 0; b33 < c33.length; b33++) {
     c33[b33].style.display = "none";  
  }
  c33[sl33-1].style.display = "block";  
}


//main-slider-3 - inside slider-4
var sl34= 1;
sh34(sl34);

function pl34(a34) {
  sh34(sl34 += a34);
}

function sh34(a34) {
  var b34;
  var c34 = document.getElementsByClassName("mySlides-3-inside-4");
  if (a34 > c34.length) {sl34 = 1}
  if (a34 < 1) {sl34 = c34.length}
  for (b34 = 0; b34 < c34.length; b34++) {
     c34[b34].style.display = "none";  
  }
  c34[sl34-1].style.display = "block";  
}



//main-slider-3 - inside slider-5
var sl35= 1;
sh35(sl35);

function pl35(a35) {
  sh35(sl35 += a35);
}

function sh35(a35) {
  var b35;
  var c35 = document.getElementsByClassName("mySlides-3-inside-5");
  if (a35 > c35.length) {sl35 = 1}
  if (a35 < 1) {sl35 = c35.length}
  for (b35 = 0; b35 < c35.length; b35++) {
     c35[b35].style.display = "none";  
  }
  c35[sl35-1].style.display = "block";  
}

//main-slider-3 - inside slider-6
var sl36= 1;
sh36(sl36);

function pl36(a36) {
  sh36(sl36 += a36);
}

function sh36(a36) {
  var b36;
  var c36 = document.getElementsByClassName("mySlides-3-inside-6");
  if (a36 > c36.length) {sl36 = 1}
  if (a36 < 1) {sl36 = c36.length}
  for (b36 = 0; b36 < c36.length; b36++) {
     c36[b36].style.display = "none";  
  }
  c36[sl36-1].style.display = "block";  
}

//main-slider-3 - inside slider-7
var sl37= 1;
sh37(sl37);

function pl37(a37) {
  sh37(sl37 += a37);
}

function sh37(a37) {
  var b37;
  var c37 = document.getElementsByClassName("mySlides-3-inside-7");
  if (a37 > c37.length) {sl37 = 1}
  if (a37 < 1) {sl37 = c37.length}
  for (b37 = 0; b37 < c37.length; b37++) {
     c37[b37].style.display = "none";  
  }
  c37[sl37-1].style.display = "block";  
}



//main-slider-4

var slideInd4 = 1;
showDiv4(slideInd4);

function plusDiv4(m4) {
  showDiv4(slideInd4 += m4);
}

function currentDivs4(m4) {
  showDiv4(slideInd4 = m4);
}

function showDiv4(m4) {
var j4;
var y4 = document.getElementsByClassName("mySlides-4");
  if(m4 > y4.length){$('#out-4').html('1' +' of 6');} 
 else if( m4>=1) {$('#out-4').html(m4 +' of 6');}
 else if( m4 < 1){$('#out-4').html(y4.length +' of 6');}
  

  if (m4 > y4.length) {slideInd4 = 1}    
  if (m4 < 1) {slideInd4 = y4.length}
  for (j4 = 0; j4 < y4.length; j4++) {
    y4[j4].style.display = "none";  
  }
  y4[slideInd4-1].style.display = "block"; 
}

//main-slider-4 - inside slider-1
var sl41= 1;
sh41(sl41);

function pl41(a41) {
  sh41(sl41 += a41);
}

function sh41(a41) {
  var b41;
  var c41 = document.getElementsByClassName("mySlides-4-inside-1");
  if (a41 > c41.length) {sl41 = 1}
  if (a41 < 1) {sl41 = c41.length}
  for (b41 = 0; b41 < c41.length; b41++) {
     c41[b41].style.display = "none";  
  }
  c41[sl41-1].style.display = "block";  
}

//main-slider-4 - inside slider-2
var sl42= 1;
sh42(sl42);

function pl42(a42) {
  sh42(sl42 += a42);
}

function sh42(a42) {
  var b42;
  var c42 = document.getElementsByClassName("mySlides-4-inside-2");
  if (a42 > c42.length) {sl42 = 1}
  if (a42 < 1) {sl42 = c42.length}
  for (b42 = 0; b42 < c42.length; b42++) {
     c42[b42].style.display = "none";  
  }
  c42[sl42-1].style.display = "block";  
}

//main-slider-4 - inside slider-3
var sl43= 1;
sh43(sl43);

function pl43(a43) {
  sh43(sl43 += a43);
}

function sh43(a43) {
  var b43;
  var c43 = document.getElementsByClassName("mySlides-4-inside-3");
  if (a43 > c43.length) {sl43 = 1}
  if (a43 < 1) {sl43 = c43.length}
  for (b43 = 0; b43 < c43.length; b43++) {
     c43[b43].style.display = "none";  
  }
  c43[sl43-1].style.display = "block";  
}


//main-slider-4 - inside slider-4
var sl44= 1;
sh44(sl44);

function pl44(a44) {
  sh44(sl44 += a44);
}

function sh44(a44) {
  var b44;
  var c44 = document.getElementsByClassName("mySlides-4-inside-4");
  if (a44 > c44.length) {sl44 = 1}
  if (a44 < 1) {sl44 = c44.length}
  for (b44 = 0; b44 < c44.length; b44++) {
     c44[b44].style.display = "none";  
  }
  c44[sl44-1].style.display = "block";  
}



//main-slider-4 - inside slider-5
var sl45= 1;
sh45(sl45);

function pl45(a45) {
  sh45(sl45 += a45);
}

function sh45(a45) {
  var b45;
  var c45 = document.getElementsByClassName("mySlides-4-inside-5");
  if (a45 > c45.length) {sl45 = 1}
  if (a45 < 1) {sl45 = c45.length}
  for (b45 = 0; b45 < c45.length; b45++) {
     c45[b45].style.display = "none";  
  }
  c45[sl45-1].style.display = "block";  
}






//main-slider-5

var slideInd5 = 1;
showDiv5(slideInd5);

function plusDiv5(m5) {
  showDiv5(slideInd5 += m5);
}

function currentDivs5(m5) {
  showDiv5(slideInd5 = m5);
}

function showDiv5(m5) {
var j5;
var y5 = document.getElementsByClassName("mySlides-5");
  if(m5 > y5.length){$('#out-5').html('1' +' of 7');} 
 else if( m5>=1) {$('#out-5').html(m5 +' of 7');}
 else if( m5 < 1){$('#out-5').html(y5.length +' of 7');}
  

  if (m5 > y5.length) {slideInd5 = 1}    
  if (m5 < 1) {slideInd5 = y5.length}
  for (j5 = 0; j5 < y5.length; j5++) {
    y5[j5].style.display = "none";  
  }
  y5[slideInd5-1].style.display = "block"; 
}


//main-slider-5 - inside slider-2
var sl52= 1;
sh52(sl52);

function pl52(a52) {
  sh52(sl52 += a52);
}

function sh52(a52) {
  var b52;
  var c52 = document.getElementsByClassName("mySlides-5-inside-2");
  if (a52 > c52.length) {sl52 = 1}
  if (a52 < 1) {sl52 = c52.length}
  for (b52 = 0; b52 < c52.length; b52++) {
     c52[b52].style.display = "none";  
  }
  c52[sl52-1].style.display = "block";  
}


//main-slider-5 - inside slider-3
var sl53= 1;
sh53(sl53);

function pl53(a53) {
  sh53(sl53 += a53);
}

function sh53(a53) {
  var b53;
  var c53 = document.getElementsByClassName("mySlides-5-inside-3");
  if (a53 > c53.length) {sl53 = 1}
  if (a53 < 1) {sl53 = c53.length}
  for (b53 = 0; b53 < c53.length; b53++) {
     c53[b53].style.display = "none";  
  }
  c53[sl53-1].style.display = "block";  
}

//main-slider-5 - inside slider-6
var sl56= 1;
sh56(sl56);

function pl56(a56) {
  sh56(sl56 += a56);
}

function sh56(a56) {
  var b56;
  var c56 = document.getElementsByClassName("mySlides-5-inside-6");
  if (a56 > c56.length) {sl56 = 1}
  if (a56 < 1) {sl56 = c56.length}
  for (b56 = 0; b56 < c56.length; b56++) {
     c56[b56].style.display = "none";  
  }
  c56[sl56-1].style.display = "block";  
}





















