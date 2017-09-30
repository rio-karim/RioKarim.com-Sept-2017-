$(function () {
  /* VARIABLE DECLARATIONS */
  var filetype = '.png';
  var filepath = 'css/gallery/';
  var filefolder = ['star/', 'spurs/', 'vue/', 'javaquiz/', 'javastock/', 'galactisee/', 'cardiffu/'];
  var filecount = [4, 6, 2, 6, 4, 2, 3];
  var fadeID = ['.myName', '.loadingBox', '.scrollArrow', '.personalBar', '.contactBar', '.content', '.projectsHeader', '.header'];
  var fadeNUM = [3000, 200, 1000, 1000, 1000, 1000, 1000, 1000];
  var timeoutNUM = [3000, 0, 6000, 4240, 6000, 6200, 6200, 3000];
  var clickCount = 0;

    /* CONTENT SLIDE-IN PLUGIN
      https://github.com/lwiesel/jquery-fadethis
    */
  $(window).fadeThis({offset: -150, reverse: false});
  /*  PAGE ANIMATIONS */

  function setVisible(stringID) {
    $(stringID).fadeOut(0).css({'visibility': 'visible'});
  };
  for (var i = 0; i < fadeID.length; i++) {
    setVisible(fadeID[i]);
    timeoutFadeIn(fadeID[i], fadeNUM[i], timeoutNUM[i]);
  };
  function timeoutFadeIn(stringID, intFade, intTimeout) {
    setTimeout(function () {
        $(stringID).fadeIn(intFade);
    }, intTimeout)
  };

  /* SKILLBAR AND NAME FADE (SEPERATE FOR LOADING PURPOSES) */
  setTimeout(function () {
    for (var i = 1; i < 9; i++) {
      if (i === 1) {
        $('.skillsBar').css({'opacity': 1});
      }
      $('#skill' + i).fadeOut(0);
      $('#skill' + i).fadeIn((i * 1000) / 2);
    };
  }, 3000);
  /* SCROLL ARROW FADE ON SCROLL */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.scrollArrow').fadeOut();
     }
     else{
      $('.scrollArrow').fadeIn();
    }
  });
  /* LOADING ANIMATION */
  setTimeout(function () {
    $('.loadingBox').fadeOut(50);
  }, 2500);
  $(function () {
    $('.loadingLine').animate({
      left : '250'
      }, 500).animate({
      left : '-250'
      }, 500).animate({
      left : '250'
      }, 500).animate({
      left : '-250'
      }, 500).animate({
      left : '250'
      }, 500).animate({
      left : '-250'
      }, 500).animate({
      left : '250'
      }, 500)
    });

  /* IMAGE GALLERY APPEND */
  function getGallery(ftype, fpath, folder, folderNum){
    $(".thumbContainer").empty();
    $(".selectedImg").empty();
    for (var i = 1; i <= folderNum; i++){
      $('<img />', {
        class: 'imgThumb',
        src: fpath + folder + i.toString() + ftype
      }).appendTo(".thumbContainer");
    };
    $('<img />', {
      class: 'mainImg',
      id: 'selected',
      src: fpath + folder + '1' + ftype
    }).appendTo(".selectedImg");
  };
  /* CHANGE GALLERY TOPIC */
  function switchGallery(btn) {
    switch (btn){
      case 'StarWars': getGallery(filetype, filepath, filefolder[0], filecount[0])
                      break;
      case 'Tottenham': getGallery(filetype, filepath, filefolder[1], filecount[1])
                      break;
      case 'Vue':       getGallery(filetype, filepath, filefolder[2], filecount[2])
                      break;
      case 'JavaQuiz':  getGallery(filetype, filepath, filefolder[3], filecount[3])
                      break;
      case 'JavaStock': getGallery(filetype, filepath, filefolder[4], filecount[4])
                      break;
      case 'Galactisee': getGallery(filetype, filepath, filefolder[5], filecount[5])
                      break;
      case 'Cardiffu': getGallery(filetype, filepath, filefolder[6], filecount[6])
                      break;
    }
  };

    /* GALLERY CLOSE */
    function closeWindow(e) {
      $('.black_overlay').fadeToggle(function () {
        e.removeClass('opened');
        clickCount = 0;
      });
    };
    /* GALLERY OPEN */
    $(function () {
      $('.gallery').on('click', function () {
        switchGallery(this.id);
        $('.popup button').addClass('opened');
        $('.black_overlay').fadeToggle();
      });
      $('.popup button').on('click', function () {
        closeWindow($('.gallery'));
        clickCount = 0;
        return false;
      });
    });

    $.fn.fadeToggle = function (easing, callback) {
      return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
    };
    /* GALLERY CAROUSEL */
    /* TODO CREATE A FUNCTION AND PASS THE DIFFERENCES AS ARGUMENETS, NEXT ARROW / SWIPE LEFT etc */
    $(".nextarrow:last-of-type").click(function () {
      clickCount += 1;
      var cycleNum = 1;
      var $selected = $("#selected").removeAttr("id");
      var cycleImgs = $('.thumbContainer').children();
      console.log(cycleImgs);
      if (clickCount === 1)cycleNum = 2;
      var currentImg = cycleImgs.eq((cycleImgs.index($selected) + cycleNum) % cycleImgs.length).attr('id', 'selected');
      var cycledUrl = currentImg.attr('src');
      console.log(cycledUrl);
      $('.mainImg').fadeOut(600, function () {
        $(this).attr('src', cycledUrl);
      }).fadeIn(600);
    });

    $(".nextarrow:first-of-type").click(function () {
      clickCount += 1;
      var cycleNum = -1;
      var $selected = $("#selected").removeAttr("id");
      var cycleImgs = $('.thumbContainer').children();
      console.log(cycleImgs);
      if (clickCount === 1)cycleNum = cycleImgs.length;
      var currentImg = cycleImgs.eq((cycleImgs.index($selected) + cycleNum) % cycleImgs.length).attr('id', 'selected');
      var cycledUrl = currentImg.attr('src');
      console.log(cycledUrl);
      $('.mainImg').fadeOut(600, function () {
        $(this).attr('src', cycledUrl);
      }).fadeIn(600);
    });

      /* Connect Button Swap */
  var sourceSwap = function () {
    var $this = $(this);
    var newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
  };
  $(function () {
      $('input[data-alt-src]').each(function () {
          new Image().src = $(this).data('alt-src');
      }).hover(sourceSwap, sourceSwap);
  });
});


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
