$(function() {

  /* TO DO

    CLEANUP TIMEOUTS. PASS ID AND TIMEOUT AS ARGUMENTS IN A FUNCTION
    CLEANUP OPACITY 0 - 1 WITH ARGUMENT / FUNCTION

    */

  $('#myName').fadeOut(1).css({'opacity': 1});
  $('#myName').fadeIn(5000);
  $('#personalBar').fadeOut(1).css({'visibility': 'visible'});
  $('#contactBar').fadeOut(1).css({'visibility': 'visible'});
  $('#scrollArrow').fadeOut(1).css({'visibility': 'visible'});
  $('.content').fadeOut(1).css({'visibility': 'visible'});
  $('#projectsHeader').fadeOut(1).css({'visibility': 'visible'});

  setTimeout(		function (){
    for (var i = 1; i < 9; i++){
      if (i == 1) {
        $('#skillsBar').css({'opacity': 1});
      }
      $('#skill'+i).fadeOut(1)
      $('#skill'+i).fadeIn((i*1000)/2);

    }
  }, 3000);

  setTimeout(function () {
      $("#loadingLine").fadeOut(200);
  }, 1000);


  setTimeout(function () {
      $("#personalBar").fadeIn(1000);
  }, 4240);

  setTimeout(function () {
      $("#scrollArrow").fadeIn(1000);
      $("#contactBar").fadeIn(1000);
  }, 5600);

  setTimeout(function () {
    $(".content").fadeIn(1000);
    $("#projectsHeader").fadeIn(1000);
  }, 6200);



  setTimeout(function () {for (var i = 0; i < 3; i++){
    $('#scrollArrow').animate({
      bottom: "8"
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


/*
lockScroll();
setTimeout(unlockScroll, 10000);



setTimeout(function (){
  if($(window).width() <= 463){
    $('body').css({'background-size': '150%'});
  }
}, 4200);*/


});
