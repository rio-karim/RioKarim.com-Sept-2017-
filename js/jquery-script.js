$(function () {
  /* VARIABLE DECLARATIONS */
  var filetype = '.png';
  var filepath = 'css/gallery/';
  var filefolder = ['star/', 'spurs/', 'vue/', 'javaquiz/', 'javastock/', 'galactisee/'];

  var fadeID = ['.loadingLine', '.scrollArrow', '.personalBar', '.contactBar', '.content', '.projectsHeader'];
  var fadeNUM = [200, 1000, 1000, 1000, 1000, 1000, 1000];
  var timeoutNUM = [0, 6000, 4240, 6000, 6200, 6200];
  var filecount = [4, 6, 0, 6, 5, 0];

  var clickCount = 0;

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
      src: fpath + folder + '1' + ftype
    }).appendTo(".selectedImg");
  }
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
    }
  }
  /* GALLERY ACTION EVENTS */
  function galleryEvents () {
    $('.thumbContainer img').on({
      mouseover: function () {
        $(this).css({
          'cursor': 'pointer',
          'border-color': '#7f1a1c',
          'transition': '.7s'
        });

      },
      mouseout: function () {
        $(this).css({
          'cursor': 'default',
          'border-color': 'grey'
        });
      },
      click: function () {
        var imageUrl = $(this).attr('src');
        $('.mainImg').removeAttr("id");
        $('.mainImg').fadeOut(1000, function () {
          $(this).attr('id', 'selected');
          $(this).attr('src', imageUrl);
          }).fadeIn(1000);
        }
    });
  }
    /* GALLERY CLOSE */
    function closeWindow(e) {
      $('.black_overlay').fadeToggle(function () {
        e.removeClass('opened');
      });
    }
    /* GALLERY OPEN */
    $(function () {
      $('.gallery').on('click', function () {
        switchGallery(this.id);
        galleryEvents();
        $('closeBtn').addClass('opened');
        $('.black_overlay').fadeToggle();
      });
      $('.closeBtn').on('click', function () {
        closeWindow($('.gallery'));
        return false;
      });
    });

    $.fn.fadeToggle = function (easing, callback) {
      return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
    }
    /* GALLERY CAROUSEL */
    $(".nextarrow").click(function () {
      clickCount += 1;
      var cycleNum = 1;
      var $selected = $("#selected").removeAttr("id");
      var cycleImgs = $('.thumbContainer').children();
      console.log(cycleImgs);
      if (clickCount == 1)cycleNum = 2;
      var currentImg = cycleImgs.eq((cycleImgs.index($selected) + cycleNum) % cycleImgs.length).attr('id', 'selected');
      var cycledUrl = currentImg.attr('src');
      console.log(cycledUrl);
      $('.mainImg').fadeOut(1000, function () {
        $(this).attr('src', cycledUrl);
      }).fadeIn(1000);
    });



  /*  PAGE ANIMATIONS */
  $('.myName').fadeOut(1).css({'opacity': 1});
  $('.header').fadeOut(1).css({'visibility': 'visible'});

  function setVisible(stringID) {
    $(stringID).fadeOut(1).css({'visibility': 'visible'});
  };

  function timeoutFadeIn(stringID, intFade, intTimeout) {
    setTimeout(function () {
        $(stringID).fadeIn(intFade);
    }, intTimeout)
  };
  for (var i = 0; i < fadeID.length; i++) {
    setVisible(fadeID[i]);
    timeoutFadeIn(fadeID[i], fadeNUM[i], timeoutNUM[i]);
  };
  /* SKILLBAR AND NAME FADE (SEPERATE FOR LOADING PURPOSES) */
  setTimeout(function () {
    for (var i = 1; i < 9; i++) {
      if (i === 1) {
        $('.skillsBar').css({'opacity': 1});
        $('.myName').fadeIn(3000);
        $('.header').fadeIn(3000);
      }
      $('#skill' + i).fadeOut(1);
      $('#skill' + i).fadeIn((i * 1000) / 2);
    };
  }, 3000)
  /* SCROLL ARROW FADE ON SCROLL */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.scrollArrow').fadeOut();
     }
     else{
      $('.scrollArrow').fadeIn();
    }
  })
  /* LOADING ANIMATION */
  setTimeout(function () {
    $('.loadingLine').fadeOut(100);
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
