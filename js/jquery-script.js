$(function() {

  /* TO DO

    CLEANUP TIMEOUTS. PASS ID AND TIMEOUT AS ARGUMENTS IN A FUNCTION
    CLEANUP OPACITY 0 - 1 WITH ARGUMENT / FUNCTION

    */

  $('#myName').fadeOut(1).css({'opacity': 1});
  $('#myName').fadeIn(5000);
  $('#mainBox').fadeOut(1).css({'visibility': 'visible'});
  $('#contactBox').fadeOut(1).css({'visibility': 'visible'});
  $('#scrollArrow').fadeOut(1).css({'visibility': 'visible'});
  $('#slide2').fadeOut(1).css({'visibility': 'visible'});

  setTimeout(		function (){
    for (var i = 1; i < 9; i++){
      if (i == 1) {
        $('#skillsBox').css({'opacity': 1});
      }
      $('#skill'+i).fadeOut(1)
      $('#skill'+i).fadeIn((i*1000)/2);

    }
  }, 3000);

  setTimeout(function () {
      $("#loadingLine").fadeOut(200);
  }, 1000);


  setTimeout(function () {
      $("#mainBox").fadeIn(1000);
  }, 4240);

  setTimeout(function () {
      $("#scrollArrow").fadeIn(1000);
  }, 5600);


      setTimeout(function () {
              $("#contactBox").fadeIn(1000);
      }, 5600);



  setTimeout(function () {for (var i = 0; i < 3; i++){
    $('#scrollArrow').animate({
      bottom: "10"
    }, 500).animate({
      bottom: "5"
    }, 500);
      }
  }, 5800);

  $(window).scroll(function() {

  if ($(this).scrollTop()>0)
   {
      $('#scrollArrow').fadeOut();
   }
  else
   {
    $('#scrollArrow').fadeIn();
   }
});


  $(function () {
      $('#loadingLine').animate({
            left : "100"
        }, 500).animate({
          left : "-100"
        }, 500).animate({
            left : "100"
        }, 500).animate({
          left : "-100"
        }, 500).animate({
            left : "100"
        }, 500);
    });


/* SCROLL LOCK */

function lockScroll() {
$('html, body').css({
  overflow: 'hidden',
  height: '100%'
});
}

function unlockScroll(){
$('html, body').css({
  overflow: 'auto',
  height: '200%'
});
}

lockScroll();
setTimeout(unlockScroll, 10000);


});
