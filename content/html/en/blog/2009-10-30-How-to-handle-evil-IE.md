-----

# Custom 
isHidden:       false
menupriority:   1
kind:           article
date:           2009-10-30T22:34:46+02:00
title: How to handle evil IE
multiTitle: 
    en: How to handle evil IE with jQuery
    fr: Une CSS pour IE seulement
multiDescription:
    fr: Pour les développeur de site web Internet Explorer est un cauchemar. C'est pourquoi j'utilise un style complètement différent pour ce navigateur. Avec la librairie jQuery.
    en: For developer IE is a nightmare. This is why, I use a method to disable my standard CSS and enable a IE only CSS. I use jQuery to accomplish that.

tags:
    - web
    - webdesign
    - jQuery

-----

For developer IE is a nightmare. This is why, I use a method to disable my standard CSS and enable a IE only CSS. I use jQuery to accomplish that.



<code class="javascript">
$(document).ready( function() {
    if ($.browser["msie"]) {
        // include the ie.js file
        $('head').append('<script type="text/javascript" src="/js/ie.js"></scr' + 'ipt>');
    }
});
</code>

<code class="javascript" file="ie.js">
// Remove all CSS I don't want to use on IE
$('link[rel=stylesheet]').each(function(i)
{
    if (this.getAttribute('href') == '/css/layout.css') 
        this.disabled = true;
    if (this.getAttribute('href') == '/css/shadows.css') 
        this.disabled = true;
    if (this.getAttribute('href') == '/css/gen.css')    
        this.disabled = true;
}) ;

// Append the CSS for IE only
$('head').append('<link rel="stylesheet" type="text/css" href="/css/ie.css"/>');

// I also add a message on top of the page
$('body').prepend('<div id="iemessage"><p><span class="fr"><em>Avec <a href="http://www.firefox.com"> Firefox </a> et <a href="http://www.apple.com/safari">Safari</a> cette page est bien plus jolie !</em></span><span class="en"><em>This page is far nicer with <a href="http://www.firefox.com"> Firefox </a> and <a href="http://www.apple.com/safari">Safari</a>!</em></span></p>.</div>');

</code>

That's it.
