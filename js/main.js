
$(document).ready(function($) {

'use strict';

	// carousel
	// var myCarousel = function() {
	// 	// Activate Carousel
	// 	$("#myCarousel").carousel();
			
	// 	// Enable Carousel Indicators
	// 	$(".item1").click(function(){
	// 		$("#myCarousel").carousel(0);
	// 	});
	// 	$(".item2").click(function(){
	// 		$("#myCarousel").carousel(1);
	// 	});
	// 	$(".item3").click(function(){
	// 		$("#myCarousel").carousel(2);
	// 	});
	// 	$(".item4").click(function(){
	// 		$("#myCarousel").carousel(3);
	// 	});
	// 	// Enable Carousel Controls
	// 	$(".left").click(function(){
	// 		$("#myCarousel").carousel("prev");
	// 	});
	// 	$(".right").click(function(){
	// 		$("#myCarousel").carousel("next");
	// 	});
	// };
	// myCarousel();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();
	
	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// Progressbar
	var pageProgress = function() {
		$(window).scroll(function() {
	    var wintop = $(window).scrollTop(), docheight = $('.page').height(), winheight = $(window).height();
	    // console.log(wintop);
	    var totalScroll = (wintop/(docheight-winheight))*100;
	    // console.log("total scroll" + totalScroll);
	    $(".progressBar").css("width",totalScroll+"%");
	  });

	};
	pageProgress();


});

