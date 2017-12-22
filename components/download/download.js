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