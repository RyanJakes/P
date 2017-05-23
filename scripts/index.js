$(document).ready(function(){
$('a').click(function(e){
e.preventDefault();
$("#display").load($(this).attr('href'));
$("a").removeClass("active");
$(this).addClass("active");
});
});
