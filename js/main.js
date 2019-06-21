//load
$(window).on('load', function () {
	$preloader = $('#loader'),
	  $loader = $preloader.find('#cube-loader');
	$loader.fadeOut();
	$preloader.delay(350).fadeOut('slow');
	$('body').removeClass('js-loading');
	
	$('#projects .projects_info').addClass('anim');
	$('#projects #slider_projects').addClass('anim');
	$('#projects.projects-inside .project-img').addClass('anim');
	$('#main-banner .txt').addClass('anim');
	
	$('.start-anim').addClass('anim');
	
});


/*MENU*/
$(document).on("ready", function () {
    $("#menu .cd-nav-trigger").click(function () {
        $("#menu").toggleClass("menu-open");
		$(".nav-bar").toggleClass("open-menu");
		$('#menu .bar').toggleClass('animate');
		$("body").toggleClass("open-menu");
    });
	
});


$(document).scroll(function () {
	var WinTop = $(window).scrollTop();
	var docHeight = $(window).height();

	$('.fadeEl').each(function () {
		var topIn = $(this).offset().top -docHeight * 0.80 ; 
		if (WinTop > topIn) {
			$(this).addClass('anim');
		}
	});
	
	$('.js-animation').each(function () {
		var topIn = $(this).offset().top -docHeight * 0.80 ; 
		if (WinTop > topIn) {
			$(this).addClass('start-animation');
		}
	});
});


//modal
$('.modal-block').on('click', function(){
	var	id =  this.id;
  $(".modal[data-id='#"+id+"']").toggleClass('open');
  $(".modal-ov").show("slow");
  $("body").addClass("open-hidden");
  
});

$(".close").click(function () {
	$(".modal-content").addClass('zoom');
	$(".modal-content.zoom").css({'transform':'translateY(-100%)'});
	$(".modal-ov").hide("slow");
	$("#profit-calculator .sel-tree").removeClass('none');
	function func() {
		$(".modal").removeClass("open");
		$("body").removeClass("open-hidden");
		$(".modal-content").removeClass('zoom');
		$(".modal-content").css({'transform':'translateY(0)'});
	}
	setTimeout(func, 300);
	
});


//input focus
$('.input-form').focus(function(){$(this).addClass("focus");})
          .blur(function(){$(this).removeClass("focus");});