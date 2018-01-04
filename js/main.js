

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
  /*var whole_arrow = $('#graphic09');
  var person = $('#graphic09 #person');
  var money = $('#graphic09 #money');

  var tl = new TimelineMax();

  tl.to(whole_arrow, 0, {opacity:1});

  tl.from(person, 1.5, {opacity:0});
  tl.from(money,0.4, {scale:0, transformOrigin: 'center center'}, '-=0.5');*/



});
var $ = jQuery;

var lastScrollTop = 0;
var lastScrollTopFeedback = 0;
var goingUp = false;
var psychologyQuickVisible = true;
var controller = new ScrollMagic.Controller();


jQuery(document).ready(function($){

  var controller = new ScrollMagic.Controller();
  animateIcon1();
  animateIcon2();
  animateIcon3();
  animateIcon4();
  animateIcon5();
  animateIcon6();
  animateIcon7();
  animateIcon8();
  animateIcon9();

  function animateIcon1(){

    var selector = '';
    if ($(".visible1024").is(":visible")) {
      selector = '.visible1024 ';
    }
    if ($(".visible750").is(":visible")) {
      selector = '.visible750 ';
    }

    var whole_icon = $(selector + '#circle');

    var enmascarado = $(selector + '#circle .enmascarado');
    var patch = $(selector + '#circle #patch');

    var tl = new TimelineMax();

    tl.to(whole_icon, 0, {opacity:1});

    tl.from(enmascarado, 1, {ease: Power2.easeOut, rotation:-220, transformOrigin: "47% 50%"});   
    tl.from(patch, 1, {ease: Power2.easeOut, rotation:-100, transformOrigin: "98% 64%"}, '-=1');  

    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({triggerElement: '#it-belive'})
    .setTween(tl)
    .addTo(controller); 
  }

  function animateIcon2(){

    var selector = '';
    if ($(".visible1024").is(":visible")) {
      selector = '.visible1024 ';
    }
    if ($(".visible750").is(":visible")) {
      selector = '.visible750 ';
    }

    var whole_icon = $(selector + '#USmap');

    var enmascarado = $(selector + '#USmap .enmascarado');

    var tl = new TimelineMax();

    tl.to(whole_icon, 0, {opacity:1});

    tl.from(enmascarado, 2, {ease: Power2.easeOut, y:100, transformOrigin: "bottom center"});

    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({triggerElement: '.icon-map'})
    .setTween(tl)
    .addTo(controller); 
  }

  function animateIcon3(){

var selector = '';
    if ($(".visible1024").is(":visible")) {
      selector = '.visible1024 ';
    }
    if ($(".visible750").is(":visible")) {
      selector = '.visible750 ';
    }

    var whole_icon = $(selector + '#mobiledevices');

    var cell = $(selector + '#mobiledevices #cell');
    var orange = $(selector + '#mobiledevices #Path_3_');


    var tl = new TimelineMax();

    tl.to(whole_icon, 0, {opacity:1});

    tl.from(cell, 0.5, {ease: Power2.easeOut, scaleY:0, transformOrigin: "bottom center"});
    tl.from(orange, 0.7, {ease: Power2.easeOut, scaleY:0, transformOrigin: "bottom center"}, '-=0.1');

    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({triggerElement: '.icon-map'})
    .setTween(tl)
    .addTo(controller); 
  }


  function animateIcon4(){
var selector = '';
    if ($(".visible1024").is(":visible")) {
      selector = '.visible1024 ';
    }
    if ($(".visible750").is(":visible")) {
      selector = '.visible750 ';
    }
    
   var whole_icon = $(selector + '#theworkplaceischanging');


   var down1 = $(selector + '#theworkplaceischanging #Fill-6');
   var up1 = $(selector + '#theworkplaceischanging #Fill-7');

   var up2 = $(selector + '#theworkplaceischanging #Fill-4');
   var down2 = $(selector + '#theworkplaceischanging #Fill-5');


   var left1 = $(selector + '#theworkplaceischanging #Fill-2');
   var left2 = $(selector + '#theworkplaceischanging #Fill-1');

   var tl = new TimelineMax();

   tl.to(whole_icon, 0, {opacity:1});

   tl.from(down1, 0.5, {scale: 0, transformOrigin: "top center", ease: Power2.easeOut});
   tl.from(up1, 0.5, {scale: 0, transformOrigin: "bottom center", ease: Power2.easeOut},'-=0.5');


   tl.from(down2, 0.5, {scale: 0, transformOrigin: "top center", ease: Power2.easeOut},'-=0.1');
   tl.from(up2, 0.5, {scale: 0, transformOrigin: "bottom center", ease: Power2.easeOut},'-=0.5');

   tl.from(left1, 0.5, {scale: 0, transformOrigin: "right center", ease: Power2.easeOut},'-=0.1');
   tl.from(left2, 0.5, {scale: 0, transformOrigin: "right center", ease: Power2.easeOut},'-=0.5');

   var controller = new ScrollMagic.Controller();
   var scene = new ScrollMagic.Scene({triggerElement: '#workplace'})
   .setTween(tl)
   .addTo(controller); 
 }

 function animateIcon5(){
var selector = '';
    if ($(".visible1024").is(":visible")) {
      selector = '.visible1024 ';
    }
    if ($(".visible750").is(":visible")) {
      selector = '.visible750 ';
    }
    
   var whole_icon = $(selector + '#organizationadopting');

   var triangle1 = $(selector + '#organizationadopting #Fill-1');
   var triangle2 = $(selector + '#organizationadopting #Fill-4');
   var triangle3 = $(selector + '#organizationadopting #Fill-7');
   var triangle4 = $(selector + '#organizationadopting #Fill-9');
   var triangle5 = $(selector + '#organizationadopting #Fill-11');

   var tl = new TimelineMax();

   tl.to(whole_icon, 0, {opacity:1});

   tl.from(triangle1, 0.5, {ease: Power2.easeOut, scale:0, transformOrigin: "bottom center"});   
   tl.from(triangle2, 0.5, {ease: Power2.easeOut, scale:0, transformOrigin: "bottom center"}, '-=0.3');    
   tl.from(triangle3, 0.5, {ease: Power2.easeOut, scale:0, transformOrigin: "bottom center"}, '-=0.3');    
   tl.from(triangle4, 0.5, {ease: Power2.easeOut, scale:0, transformOrigin: "bottom center"}, '-=0.3');    
   tl.from(triangle5, 0.5, {ease: Power2.easeOut, scale:0, transformOrigin: "bottom center"}, '-=0.3');  

   var controller = new ScrollMagic.Controller();
   var scene = new ScrollMagic.Scene({triggerElement: '#happier'})
   .setTween(tl)
   .addTo(controller); 
 }

 function animateIcon6(){
var selector = '';
    if ($(".visible1024").is(":visible")) {
      selector = '.visible1024 ';
    }
    if ($(".visible750").is(":visible")) {
      selector = '.visible750 ';
    }
    
  var whole_icon = $(selector + '#thats6additional');
  var calendar = $(selector + '#thats6additional #calendar');

  var day1 = $(selector + '#thats6additional #Fill-13');
  var day2 = $(selector + '#thats6additional #Fill-14');
  var day3= $(selector + '#thats6additional #Fill-15');
  var day4 = $(selector + '#thats6additional #Fill-9');
  var day5 = $(selector + '#thats6additional #Fill-10');
  var day6 = $(selector + '#thats6additional #Fill-11');     
  var day7 = $(selector + '#thats6additional #Fill-12');
  var day8 = $(selector + '#thats6additional #Fill-5');
  var day9 = $(selector + '#thats6additional #Fill-6');
  var day10 = $(selector + '#thats6additional #Fill-7');
  var day11 = $(selector + '#thats6additional #Fill-8');

  var day12 = $(selector + '#thats6additional #Fill-2');
  var day13 = $(selector + '#thats6additional #Fill-3');
  var day14 = $(selector + '#thats6additional #Fill-4');


  var tl = new TimelineMax();

  tl.to(whole_icon, 0, {opacity:1});

  tl.from(calendar, 0.5, {scaleY: 0, transformOrigin: "bottom center"});

  tl.from(day1, 0.1, {opacity:0});
  tl.from(day2, 0.1, {opacity:0});
  tl.from(day3, 0.1, {opacity:0});
  tl.from(day4, 0.1, {opacity:0});
  tl.from(day5, 0.1, {opacity:0});
  tl.from(day6, 0.1, {opacity:0});
  tl.from(day7, 0.1, {opacity:0});
  tl.from(day8, 0.1, {opacity:0});
  tl.from(day9, 0.1, {opacity:0});
  tl.from(day10, 0.1, {opacity:0});
  tl.from(day11, 0.1, {opacity:0});
  tl.from(day12, 0.1, {opacity:0});
  tl.from(day13, 0.1, {opacity:0});
  tl.from(day14, 0.1, {opacity:0});

  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({triggerElement: '#remote'})
  .setTween(tl)
  .addTo(controller); 
}

function animateIcon7(){
var selector = '';
    if ($(".visible1024").is(":visible")) {
      selector = '.visible1024 ';
    }
    if ($(".visible750").is(":visible")) {
      selector = '.visible750 ';
    }
    
 var whole_arrow = $(selector + '#graphic09');
 var person = $(selector + '#graphic09 #person');
 var money = $(selector + '#graphic09 #money');

 var tl = new TimelineMax();

 tl.to(whole_arrow, 0, {opacity:1});

 tl.from(person, 1.5, {opacity:0});
 tl.from(money,0.4, {scale:0, transformOrigin: 'center center'}, '-=0.5');

 var controller = new ScrollMagic.Controller();
 var scene = new ScrollMagic.Scene({triggerElement: '#remote'})
 .setTween(tl)
 .addTo(controller); 
}

function animateIcon8(){
var selector = '';
    if ($(".visible1024").is(":visible")) {
      selector = '.visible1024 ';
    }
    if ($(".visible750").is(":visible")) {
      selector = '.visible750 ';
    }
    
  var whole_icon = $(selector + '#officeforall');
  var notebooktablet = $(selector + '#officeforall #notebook');
  var bar_notebook1 = $(selector + '#officeforall #Fill-8');
  var bar_notebook2 = $(selector + '#officeforall #Fill-10');
  var bar_notebook3 = $(selector + '#officeforall #Fill-11');
  var bar_tablet1 = $(selector + '#officeforall #Fill-5');
  var bar_tablet2 = $(selector + '#officeforall #Fill-6');
  var bar_tablet3 = $(selector + '#officeforall #Fill-7');

  var tl = new TimelineMax();

  tl.to(whole_icon, 0, {opacity:1});

  tl.from(notebooktablet, 0.5, {scaleY: 0, transformOrigin: "bottom center"});

  tl.from(bar_notebook1, 1, {scaleY: 0, transformOrigin: "bottom center"});
  tl.from(bar_notebook2, 1, {scale: 0, transformOrigin: "bottom left",  ease: Power3.easeOut}, '-=0.8');
  tl.from(bar_notebook3, 1, {scaleY: 0, transformOrigin: "bottom center"}, '1');
  tl.from(bar_tablet1, 1, {scaleY: 0, transformOrigin: "bottom center"}, '1');
  tl.from(bar_tablet2, 1, {scaleY: 0, transformOrigin: "bottom center"}, '-=0.8');
  tl.from(bar_tablet3, 1, {scaleY: 0, transformOrigin: "bottom center"}, '1');

  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({triggerElement: '#migrating'})
  .setTween(tl)
  .addTo(controller); 
}

function animateIcon9(){
var selector = '';
    if ($(".visible1024").is(":visible")) {
      selector = '.visible1024 ';
    }
    if ($(".visible750").is(":visible")) {
      selector = '.visible750 ';
    }
    
  var whole_icon = $(selector + '#roaming');
  var sheet = $(selector + '#roaming #sheet');
  var white1 = $(selector + '#roaming #Fill-8');
  var white2 = $(selector + '#roaming #Fill-7');
  var white3 = $(selector + '#roaming #Fill-5');
  var orange = $(selector + '#roaming #Fill-6');
  var black = $(selector + '#roaming #Fill-4');
  var white4 = $(selector + '#roaming #Fill-3');

  var tl = new TimelineMax();

  tl.to(whole_icon, 0, {opacity:1});

  tl.from(sheet, 0.5, {y: 150});
  tl.from(white2,0.7, {scaleX:0, transformOrigin: 'left center',  ease: Power2.easeOut});
  tl.from(white1,0.7, {scaleX:0, transformOrigin: 'left center',  ease: Power2.easeOut}, '-=0.5');
  tl.from(white3,0.5, {scaleX:0, transformOrigin: 'left center'}, '-=0.5');
  tl.from(orange,0.5, {scaleX:0, transformOrigin: 'left center'});
  tl.from(black,1.5, {scaleX:0, transformOrigin: 'left center',  ease: Power2.easeOut});
  tl.from(white4,1.5, {scaleX:0, transformOrigin: 'left center', ease: Power2.easeOut}, '-=0.7');

  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({triggerElement: '#migrating'})
  .setTween(tl)
  .addTo(controller); 
}

});


/**
  Donwload button
  Options
    introduction: this is the first section ID after banner section.

    Example: downloadButton.init( { introduction: "#introduction" } );

    **/
    var downloadButton = (function() {

      var lastScrollTop = 0;
      var buttonQuickVisible = true;
      var options;

      return {

        init: function(opt) {

          var self = this;
          self.options = opt;

          jQuery(document).ready(function($) {

            var introPos = $(self.options.introduction).offset().top;
            var viewportTop = $(window).scrollTop();

            if (viewportTop <= introPos ) {
              buttonQuickVisible = false;
              $('#quickdl').hide();
            } else {
              buttonQuickVisible = true;
              $('#quickdl').show();
            }

            self.downloadButton();

            jQuery(window).scroll(function(event){
              self.downloadButton();
            });

            $(document).on('click', '#download-pdf', function() {
              $('.demo__active').css('width', '140px');
              $('body').addClass('download-active');
            });

            $(document).on('click', '.download-active', function() {
              $('.demo__active').css('width', '0px');
              $('body').removeClass('download-active');
            });

          });

        },

        downloadButton: function() {
          $('.demo__active').css('width', '0px');
          $('body').removeClass('download-active');

          if ($(window).width() < 1024) {
            var st = $(window).scrollTop();
            if (st > lastScrollTop) {
              if (buttonQuickVisible) {
                buttonQuickVisible = false;
                jQuery('#quickdl').fadeOut();
              }
            } else if (st < lastScrollTop) {
              if (!buttonQuickVisible) {
                jQuery('#quickdl').fadeIn();
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
                $('#quickdl').fadeIn();
                buttonQuickVisible = true;
              }
            } else {
              if (buttonQuickVisible) {
                buttonQuickVisible = false;
                $('#quickdl').fadeOut();
              }
            } 
          } 

        }
      }
    })();


// OPTIONS

downloadButton.init( { introduction: "#introduction" } );



/**
  Feedback button
  Options
    introduction: this is the first section ID after banner section.
    conclusion: last section before disclaimer.
    introductionMobile: first section after banner in mobile.
    conclusionMobile: last section before disclaimer in mobile.
  heroBannerMobile: first section in mobile.

    Example: feedbackButton.init( { introduction: "#introduction", conclusion: "#desktop-conclusion" } );
    
    **/
    var feedbackButton = (function() {

      var lastScrollTopFeedback = 0;
      var goingUp = false;
      var options;

      return {

        init: function(opt) {

          var self = this;
          self.options = opt;

          jQuery(document).ready(function($){

            $(document).on('scroll', function() {

              var scrollTop = $(window).scrollTop();
              var goingUp = scrollTop < lastScrollTopFeedback;
              lastScrollTopFeedback = scrollTop;

         if ($(window).width() >= 1024) { // Desktop

          if (scrollTop >= $(self.options.introduction).position().top){ 
            $('#feedback-cta').addClass('enter');
          } else {
            $('#feedback-cta').removeClass('enter');
          }


          if (scrollTop >= $(self.options.conclusion).position().top){ 
            $('#feedback-cta').addClass('active');
          }
          if ( scrollTop <= $(self.options.introduction).position().top ) {
            $('#feedback-cta').removeClass('active');
          }

         } else { // Mobile

          if (scrollTop >= $(self.options.introductionMobile).position().top && goingUp){ 
            $('#feedback-cta').addClass('enter');
          } else {
            $('#feedback-cta').removeClass('enter');
          }

          if (scrollTop >= $(self.options.conclusionMobile).position().top){ 
            $('#feedback-cta').addClass('active');
          }
          if (scrollTop <= $(self.options.heroBannerMobile).position().top ) { 
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
          });

        }
      }
    })();


// OPTIONS 

feedbackButton.init( { introduction: "#introduction", conclusion: "#desktop-conclusion" } );


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

emailButton.init({ introduction: " -------- " });
