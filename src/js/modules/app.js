$('.js-header-hover-one').hover(function() {
    // навели мышь на элемент
    $('.header__link-wrap__item-one').css('filter', 'none');
    $('.header__link-wrap__mask-one').css('z-index', '-1');
    // console.log('hover link 1')
  }, function() {
    // убрали мышь с элемента
    $('.header__link-wrap__item-one').css('filter', 'grayscale(100%)');
    $('.header__link-wrap__mask-one').css('z-index', '1');
});

$('.js-header-hover-two').hover(function() {
    // навели мышь на элемент
    $('.header__link-wrap__item-two').css('filter', 'none');
    $('.header__link-wrap__mask-two').css('z-index', '-1');
    // console.log('hover link 2')
  }, function() {
    // убрали мышь с элемента
    $('.header__link-wrap__item-two').css('filter', 'grayscale(100%)');
    $('.header__link-wrap__mask-two').css('z-index', '1');
});

$('.js-header-hover-three').hover(function() {
    // навели мышь на элемент
    $('.header__link-wrap__item-three').css('filter', 'none');
    $('.header__link-wrap__mask-three').css('z-index', '-1');
    // console.log('hover link 3')
  }, function() {
    // убрали мышь с элемента
    $('.header__link-wrap__item-three').css('filter', 'grayscale(100%)');
    $('.header__link-wrap__mask-three').css('z-index', '1');
});



//Панель
$('.panel-close__link-one').on('click', function(e) {
	e.preventDefault();
	$('.panel-close__hidden-one').slideToggle(500);
	$(this).toggleClass('panel-close__link-active');
	
	if($(this).hasClass('panel-close__link-active')) {
		$('.panel-close__icon-one').text('-');
		$('.panel-close__link-one').css('margin-bottom', '0px');
	} else {
		$('.panel-close__icon-one').text('+');
		$('.panel-close__link-one').css('margin-bottom', '3px');
	}
});

$('.panel-close__link-two').on('click', function(e) {
	e.preventDefault();
	$('.panel-close__hidden-two').slideToggle(500);
	$(this).toggleClass('panel-close__link-active');
	
	if($(this).hasClass('panel-close__link-active')) {
		$('.panel-close__icon-two').text('-');
		$('.panel-close__link-two').css('margin-bottom', '0px');
	} else {
		$('.panel-close__icon-two').text('+');
		$('.panel-close__link-two').css('margin-bottom', '3px');
	}
});

$('.panel-close__link-three').on('click', function(e) {
	e.preventDefault();
	$('.panel-close__hidden-three').slideToggle(500);
	$(this).toggleClass('panel-close__link-active');
	
	if($(this).hasClass('panel-close__link-active')) {
		$('.panel-close__icon-three').text('-');
		$('.panel-close__link').css('margin-bottom', '0px');
	} else {
		$('.panel-close__icon-three').text('+');
		$('.panel-close__link').css('margin-bottom', '3px');
	}
});

var h_height = document.documentElement.clientHeight;

var h_hght = h_height; 
var h_mrg = 0;

$(function(){
 
	var elem = $('.top-line2');
	var top = $(this).scrollTop();
	 
	if(top > h_hght){
		elem.css('top', h_mrg);
	}
	 
	$(window).scroll(function(){
		top = $(this).scrollTop();
		 
		if (top+h_mrg < h_hght) {
			elem.css('top', (h_hght-top));
			elem.css('display', 'none');
		} else {
			elem.css('top', h_mrg);
			elem.css('display', 'block');
		}
	});
});

var menu_selector = ".nav";

function onScroll(){
	var scroll_top = $(document).scrollTop() + 100;
	$(menu_selector + " a").each(function(){
		var hash = $(this).attr("href");
		var target = $(hash);
		if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
			$(menu_selector + " a.active").removeClass("active");
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	});
}

$(document).ready(function () {
 
	$(document).on("scroll", onScroll);
 
	$(".nav-link").click(function(e){
		e.preventDefault();
 
		$(document).off("scroll");
		$(menu_selector + " a.active").removeClass("active");
		$(this).addClass("active");
		var hash = $(this).attr("href");
		var target = $(hash);
 
		$("html, body").animate({
			scrollTop: target.offset().top
		}, 500, function(){
			window.location.hash = hash;
			$(document).on("scroll", onScroll);
		});
 
	});
});

$(window).scroll(function() {
	if($(this).scrollTop() > 500) {
		$('#toTop').fadeIn();
	} else {
		$('#toTop').fadeOut();
	}
});

$('#toTop').click(function() {
	$('body,html').animate({scrollTop:0},800);
});

$('#sell__tooltip-one').click(function(event) {
	event.preventDefault();
	$('.tooltip-hidden-one').slideToggle(500);
});

$('#sell__tooltip-two').click(function(event) {
	event.preventDefault();
	$('.tooltip-hidden-two').slideToggle(500);
});

$('#sell__tooltip-three').click(function(event) {
	event.preventDefault();
	$('.tooltip-hidden-three').slideToggle(500);
});

$('#sell__tooltip-four').click(function(event) {
	event.preventDefault();
	$('.tooltip-hidden-four').slideToggle(500);
});

$('#sell__tooltip-five').click(function(event) {
	event.preventDefault();
	$('.tooltip-hidden-five').slideToggle(500);
});

$(document).ready(function(){
	$('.header__link-wrap, .header__link-text').bind("click", function(e){
	var anchor = $(this);
	$('html, body').stop().animate({
	scrollTop: $(anchor.attr('href')).offset().top
	}, 1000);
	e.preventDefault();
	});
	return false;
});

// $('.header__link-wrap[href^="#"]').click(function(){
// 	var el = $(this).attr('href');
// 	$('body').animate({
// 	scrollTop: $(el).offset().top}, 2000);
// 	return false;
// });