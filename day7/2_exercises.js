$('.shape');
$('.shape.black');
$('.shape.black').length;

// how many black and blue shapes ??
$('.shape.black').length + $('.shape.blue').length; // 4 + 4 = 8
$('.shape.black, .shape.blue').length;

// HTML
<h1>Shape</h1>
// js
$('h1').eq(0).html();
$('h1').eq(0).html("Ciro");

// HTML
<img src="puppies.jpg">

// JS
$('img').attr('src');  // "puppies.jpg" - getter
$('img').attr('src', 'kittens.png');  // "kittens.png" - setter

// html
<a href="http://www.google.com/">Overlords</a>
// <a href="http://www.codecore.ca/">Overlords</a>
// JS
// when we get, we only get back one result, the first result in our wrapped set
$('a').attr('href');
$('a').eq(0).attr('href');

// when we set, by default, it changes all the items in our wrapped set
$('a').attr('href', 'http://www.codecore.ca/');
$('a').eq(0).attr('href', 'http://www.codecore.ca/');

$('.shape').addClass('highlight');

$('#orange-container .shape').remove();
$('#orange-container').children().remove();


$('#purple-container').click(function(){
  $('#purple-container').slideUp();
});

$('#purple-container').click(function(){
  $(this).slideUp();
});

$('.shape').click(function() {
  $(this).fadeOut();
});

$(document).keypress();
$(document).keydown();
$(document).keyup();
$(document).mousemove();

//
