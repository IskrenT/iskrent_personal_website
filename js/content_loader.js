$(document).ready(function(){
	window.location.hash = "index";
	$('nav > a').click(function(){
		window.location.hash = $(this).attr("href").slice(0, -5);
		$("nav > a > .nav_selected").removeClass("nav_selected");
		$(this).children("div").addClass("nav_selected");
		$("#content").fadeOut(200, function(){
			$("#content").hide();
			$("#content").load(window.location.hash.substring(1)+".html #content");
		});
		$("#content").fadeIn(800, function(){
			
		});
		return false;
	});
});

