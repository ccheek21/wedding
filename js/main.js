 jQuery(document).ready(function($){
$(".all-portfolios").isotope({
itemSelector : '.single-portfolio',

layoutMode: 'fitRows',
});
$('ul.filter li').click(function(){
$("ul.filter li").removeClass("active");
$(this).addClass("active");
 
var selector = $(this).attr('data-filter');
$(".all-portfolios").isotope({
	
filter: selector,
animationOptions: {
duration: 750,
easing: 'linear',
queue: false,
}
});
return false;
});
});




jQuery(document).ready(function () {

	
	
/*preloder*/
//$(window).load(function() { // makes sure the whole site is loaded
	//$('#status').fadeOut(); // will first fade out the loading animation
	//$('#loader-wrapper').delay(200).fadeOut('slow'); // will fade out the white DIV that covers the website.
	//$('body').delay(200).css({'overflow-x':'hidden'});
//})	
	
	
	
});

