$(function() {

  /*
  PAGE FADE FUNCTIONS
  */

  var fadeID = ['.loadingLine', '.scrollArrow', '.personalBar', '.contactBar', '.content', '.projectsHeader']
  var fadeNUM = [200, 1000, 1000, 1000, 1000, 1000, 1000]
  var timeoutNUM = [0, 6000, 4240, 6000, 6200, 6200]
  $('.myName').fadeOut(1).css({'opacity': 1})

  function setVisible(stringID) {
    $(stringID).fadeOut(1).css({'visibility': 'visible'})
  };

  function timeoutFadeIn(stringID, intFade, intTimeout) {
    setTimeout(function () {
        $(stringID).fadeIn(intFade)
    }, intTimeout)
  };


  for (var i = 0; i < fadeID.length; i++) {
    setVisible(fadeID[i])
    timeoutFadeIn(fadeID[i], fadeNUM[i], timeoutNUM[i])
  };

/*
SKILLBAR AND NAME FADE (SEPERATE FOR LOADING PURPOSES)
*/

  setTimeout(function () {
    for (var i = 1; i < 9; i++) {
      if (i === 1) {
        $('.skillsBar').css({'opacity': 1})
        $('.myName').fadeIn(3000);
      }
      $('#skill' + i).fadeOut(1)
      $('#skill' + i).fadeIn((i * 1000) / 2)
    };
  }, 3000)

/*
SCROLL ARROW FADE ON SCROLL
*/

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.scrollArrow').fadeOut()
     }
     else{
      $('.scrollArrow').fadeIn()
    }
  })


/*
LOADING ANIMATION
*/
  setTimeout(function () {
    $('.loadingLine').fadeOut(100)
  }, 950)

  $(function () {
    $('.loadingLine').animate({
      left : '100'
      }, 500).animate({
      left : '-100'
      }, 500).animate({
      left : '100'
      }, 500).animate({
      left : '-100'
      }, 500).animate({
      left : '100'
      }, 500)
      })
})


/* REDUNDANT SCRIPT */

/* ARROW ANIMATE


  setTimeout(function () {for (var i = 0; i < 2; i++){
    $('.scrollArrow').animate({
      bottom: '8'
    }, 500).animate({
      bottom: '5'
    }, 500);
      }
  }, 6500);
  */


/* SCROLL LOCK */
/*
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



setTimeout(function (){
  if($(window).width() <= 463){
    $('body').css({'background-size': '150%'});
  }
}, 4200);

*/
