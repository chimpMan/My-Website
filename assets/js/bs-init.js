if (window.innerWidth < 768) {
	[].slice.call(document.querySelectorAll('[data-bss-disabled-mobile]')).forEach(function (elem) {
		elem.classList.remove('animated');
		elem.removeAttribute('data-bss-hover-animate');
		elem.removeAttribute('data-aos');
	});
}

document.addEventListener('DOMContentLoaded', function () {

	var hoverAnimationTriggerList = [].slice.call(document.querySelectorAll('[data-bss-hover-animate]'));
	var hoverAnimationList = hoverAnimationTriggerList.forEach(function (hoverAnimationEl) {
		hoverAnimationEl.addEventListener('mouseenter', function (e) { e.target.classList.add('animated', e.target.dataset.bssHoverAnimate) });
		hoverAnimationEl.addEventListener('mouseleave', function (e) { e.target.classList.remove('animated', e.target.dataset.bssHoverAnimate) });
	});
}, false);

jQuery(document).ready(function( $ ) {

	// Preloader
	$(window).on('load', function() {
	  $('#preloader').delay(100).fadeOut('slow',function(){$(this).remove();});
	});
  
	// landingpage rotating texts
	$("#landingpage .rotating").Morphext({
	  animation: "bounceIn",
	  separator: ",",
	  speed: 3000
	});
	
	// Initiate the wowjs
	new WOW().init();
	
	// Initiate superfish on nav menu
	$('#menu').superfish({
	  animation: {opacity:'show'},
	  speed: 400
	});
	
	// Mobile Navigation
	if( $('#navbar').length ) {
		var $mobile_nav = $('#navbar').clone().prop({ id: 'mobile-nav'});
		$mobile_nav.find('> ul').attr({ 'class' : '', 'id' : '' });
		$('body').append( $mobile_nav );
		$('body').prepend( '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>' );
		$('body').append( '<div id="mobile-body-overly"></div>' );
		$('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');
		
		$(document).on('click', '.menu-has-children i', function(e){
			$(this).next().toggleClass('menu-item-active');
			$(this).nextAll('ul').eq(0).slideToggle();
			$(this).toggleClass("fa-chevron-up fa-chevron-down");
		});
		
		$(document).on('click', '#mobile-nav-toggle', function(e){
			$('body').toggleClass('mobile-nav-active');
			$('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
			$('#mobile-body-overly').toggle();
		});
		
		$(document).click(function (e) {
			var container = $("#mobile-nav, #mobile-nav-toggle");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
			   if ( $('body').hasClass('mobile-nav-active') ) {
					$('body').removeClass('mobile-nav-active');
					$('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
					$('#mobile-body-overly').fadeOut();
				}
			}
		});
	} else if ( $("#mobile-nav, #mobile-nav-toggle").length ) {
		$("#mobile-nav, #mobile-nav-toggle").hide();
	}
	
	// Stick the header at top on scroll
	$(".heading").sticky({topSpacing:0, zIndex: '50'});
  
	// Smooth scroll on page hash links
	$('a[href*="#"]:not([href="#"])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			if (target.length) {
				
				var top_space = 0;
				
				if( $('.heading').length ) {
				  top_space = $('.heading').outerHeight();
				}
				
				$('html, body').animate({
					scrollTop: target.offset().top - top_space
				}, 300, 'easeInOutExpo');
  
				if ( $(this).parents('#menu').length ) {
				  $('#menu .menu-active').removeClass('menu-active');
				  $(this).closest('li').addClass('menu-active');
				}
  
				if ( $('body').hasClass('mobile-nav-active') ) {
					$('body').removeClass('mobile-nav-active');
					$('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
					$('#mobile-body-overly').fadeOut();
				}
				
				return false;
			}
		}
	});
	
	// Back to top button
	$(window).scroll(function() {
  
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
		
	});
	
	$('.back-to-top').click(function(){
		$('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
		return false;
	});
  
  });
  