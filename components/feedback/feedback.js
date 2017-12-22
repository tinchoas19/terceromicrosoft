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