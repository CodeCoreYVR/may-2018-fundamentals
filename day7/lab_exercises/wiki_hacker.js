// Go to http://en.wikipedia.org/wiki/Pug in your browser.

// Write some jQuery to change the title of the article to Your Name.
$('h1#firstHeading').text('Cale Williams')

// Write some jQuery to hide the body of the article
$('#mw-parser-output').hide()
$('#mw-parser-output').show()
$('#mw-parser-output').toggle()

$('#mw-content-text').hide()

// Write some jQuery to remove the wikipedia logo
$('.mw-wiki-logo').hide()
$('.mw-wiki-logo').css('background-image', 'none')
$('.mw-wiki-logo').css('display', 'none')


// Write some jQuery to change the image on the right hand side to a different picture
// Chrome is sometimes weird, it may work differently for you all. You may have to
// change the src and srcset attribute
$('table.infobox a.image img').attr("src","https://static.tvtropes.org/pmwiki/pub/images/ryangosling.jpg");
$('table.infobox a.image img').attr("srcset","https://static.tvtropes.org/pmwiki/pub/images/ryangosling.jpg");
