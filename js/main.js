var $ = jQuery;

jQuery(document).ready(function($){
  $(window).load(function(){
      var acc = document.getElementsByClassName('collapse-section');
      var i;

      for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
          this.classList.toggle('active');
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight){
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          } 
        }
        if (i==0){
          if ($(acc[i]).parents('#disclaimer').length==0) {
            acc[i].classList.toggle('active');
            var panel = acc[i].nextElementSibling;
            if (panel.style.maxHeight){
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            } 
          }
        }
      }
      
  });
});

/*var lastScrollTop = 0;
var lastScrollTopFeedback = 0;
var goingUp = false;
var psychologyQuickVisible = true;
var controller = new ScrollMagic.Controller();





/*jQuery(document).ready(function($){



  // DOWNLOAD BUTTON 

  var introPos = $('#insights').offset().top;
  var viewportTop = $(window).scrollTop();

  if (viewportTop <= introPos ) {
    psychologyQuickVisible = false;
    $('#quickdl').hide();
  } else {
    psychologyQuickVisible = true;
    $('#quickdl').show();
  }

  downloadButton();

  jQuery(window).scroll(function(event){
    downloadButton();
  });

  function downloadButton() {

    $('#download').css('left', '238px');
    $('#download').css('height', '46px');
    $('body').removeClass('download-active');

      if ($(window).width() < 1024) {
         var st = jQuery(this).scrollTop();
          if (st > lastScrollTop){
            if (psychologyQuickVisible) {
              psychologyQuickVisible = false;
              jQuery('#quickdl').fadeOut();
            }
          } else if (st < lastScrollTop) {
            if (!psychologyQuickVisible) {
                jQuery('#quickdl').fadeIn();
                psychologyQuickVisible = true;
        }

          }
          lastScrollTop = st;
      } else {
        var introPos = $('#insight-numbers').offset().top;
      var viewportTop = $(window).scrollTop();
      var topLimit = introPos - $(window).height() / 2;
      if (viewportTop > topLimit) {
        if (!psychologyQuickVisible) {
          $('#quickdl').fadeIn();
          psychologyQuickVisible = true;
        }
      } else {
        if (psychologyQuickVisible) {
          psychologyQuickVisible = false;
          $('#quickdl').fadeOut();
            }
      } 
      }
  } 

  $(document).on('click', '#download', function() {
    $('#download').css('left', '0px');
    $('#download').css('height', '56px');
    $('body').addClass('download-active');
  });

  $(document).on('click', '.download-active', function() {
    $('#download').css('left', '238px');
    $('#download').css('height', '46px');
    $('body').removeClass('download-active');
  });

  // END DOWNLOAD BUTTON 

  // FEEDBACK

  $(document).on('scroll', function() {

    var scrollTop = $(this).scrollTop();
    var goingUp = scrollTop < lastScrollTopFeedback;
    lastScrollTopFeedback = scrollTop;

     if ($(window).width() >= 1024) { // Desktop

      if (scrollTop >= $('#item-1').position().top){
          $('#feedback-cta').addClass('enter');
      } else {
          $('#feedback-cta').removeClass('enter');
      }
  

      if (scrollTop >= $('#item-1').position().top){
          $('#feedback-cta').addClass('active');
      }
      if ( scrollTop <= $('#insights').position().top ) {
        $('#feedback-cta').removeClass('active');
      }

     } else { // Mobile

      if (scrollTop >= $('#insights-m').position().top && goingUp){
          $('#feedback-cta').addClass('enter');
      } else {
          $('#feedback-cta').removeClass('enter');
      }

      if (scrollTop >= $('#conclusion-m').position().top){
          $('#feedback-cta').addClass('active');
      }
      if (scrollTop <= $('#hero-banner-m').position().top ) {
        $('#feedback-cta').removeClass('active');
      }
     }
  });

  
  $('#feedback-cta').not('.active').on('click', function() {
    $(this).addClass('active');
    $('body').addClass('stickOpen');
  });

  $('body').on('click touch', function (e) {
    var container = $('#feedback-cta.active');
    if (!container.is(e.target) // if the target of the click isn't the container...
      && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
      container.toggleClass('active');
      $('body').removeClass('stickOpen');
    }
  });

  $('#feedback-cta button').on('click', function() {
    $(this).parent().fadeOut(300, function() {
      $('.thankyou').fadeIn(300, function() {
        setTimeout(function () {
          $('#feedback-cta').css('right', '-300px')
        }, 1000);
      });
    });
  });


  var linkButton = (function () {
    var lastScrollTop = 0;
    var buttonQuickVisible = true;
    var options;
    return {
        init: function (opt) {
            var self = this;
            self.options = opt;
            jQuery(document).ready(function ($) {
                var introPos = $(self.options.introduction).offset().top;
                var viewportTop = $(window).scrollTop();

                if (viewportTop <= introPos) {
                    buttonQuickVisible = false;
                    $('#link').hide();
                } else {
                    buttonQuickVisible = true;
                    $('#link').show();
                }
                self.linkButton();

                jQuery(window).scroll(function (event) {
                    self.linkButton();
                });
            });

        },
        linkButton: function () {
            if ($(window).width() < 1024) {
                var st = $(window).scrollTop();
                if (st > lastScrollTop) {
                    if (buttonQuickVisible) {
                        buttonQuickVisible = false;
                        jQuery('#link').fadeOut();
                    }
                } else if (st < lastScrollTop) {
                    if (!buttonQuickVisible) {
                        jQuery('#link').fadeIn();
                        buttonQuickVisible = true;
                    }
                }
                lastScrollTop = st;
            } else {
                var introPos = $(this.options.introduction).offset().top;
                var viewportTop = $(window).scrollTop();
                var topLimit = introPos - $(window).height() / 2;
                if (viewportTop > topLimit) {
                    if (!buttonQuickVisible) {
                        $('#link').fadeIn();
                        buttonQuickVisible = true;
                    }
                } else {
                    if (buttonQuickVisible) {
                        buttonQuickVisible = false;
                        $('#link').fadeOut();
                    }
                }
            }
        }
    }
})();
linkButton.init({ introduction: '#insights' });


// EMAIL BUTTON

var emailButton = (function () {

    var lastScrollTop = 0;
    var buttonQuickVisible = true;
    var options;

    return {

        init: function (opt) {
            var self = this;
            self.options = opt;

            jQuery(document).ready(function ($) {
                var introPos = $(self.options.introduction).offset().top;
                var viewportTop = $(window).scrollTop();

                if (viewportTop <= introPos) {
                    buttonQuickVisible = false;
                    $('#emailButton').hide();
                } else {
                    buttonQuickVisible = true;
                    $('#emailButton').show();
                }
                self.emailButton();

                jQuery(window).scroll(function (event) {
                    self.emailButton();
                });
            });

        },
        emailButton: function () {
            if ($(window).width() < 1024) {
                var st = $(window).scrollTop();
                if (st > lastScrollTop) {
                    if (buttonQuickVisible) {
                        buttonQuickVisible = false;
                        jQuery('#emailButton').fadeOut();
                    }
                } else if (st < lastScrollTop) {
                    if (!buttonQuickVisible) {
                        jQuery('#emailButton').fadeIn();
                        buttonQuickVisible = true;
                    }
                }
                lastScrollTop = st;
            } else {
                var introPos = $(this.options.introduction).offset().top;
                var viewportTop = $(window).scrollTop();
                var topLimit = introPos - $(window).height() / 2;
                if (viewportTop > topLimit) {
                    if (!buttonQuickVisible) {
                        $('#emailButton').fadeIn();
                        buttonQuickVisible = true;
                    }
                } else {
                    if (buttonQuickVisible) {
                        buttonQuickVisible = false;
                        $('#emailButton').fadeOut();
                    }
                }
            }
        }
    }
})();

emailButton.init({ introduction: "" });



/*$(document).ready(function(){    

	var whole_icon = $('#circle');

	var enmascarado = $('#circle .enmascarado');
	var patch = $('#circle #patch');



	var tl = new TimelineMax();

	tl.to(whole_icon, 0, {opacity:1});

	tl.from(enmascarado, 1, {ease: Power2.easeOut, rotation:-220, transformOrigin: "47% 50%"});   
	tl.from(patch, 1, {ease: Power2.easeOut, rotation:-100, transformOrigin: "98% 64%"}, '-=1');            


	var whole_icon1 = $('#mobiledevices');

	var cell1 = $('#mobiledevices #cell');
	var orange1 = $('#mobiledevices #Path_3_');


	var tl1 = new TimelineMax();

	tl1.to(whole_icon1, 0, {opacity:1});

	tl1.from(cell1, 0.5, {ease: Power2.easeOut, scaleY:0, transformOrigin: "bottom center"});
	tl1.from(orange1, 0.7, {ease: Power2.easeOut, scaleY:0, transformOrigin: "bottom center"}, '-=0.1');


	var whole_icon2 = $('#USmap');

	var enmascarado2 = $('#USmap .enmascarado');



	var tl2 = new TimelineMax();

	tl2.to(whole_icon2, 0, {opacity:1});

	tl2.from(enmascarado2, 2, {ease: Power2.easeOut, y:100, transformOrigin: "bottom center"});

});*/
