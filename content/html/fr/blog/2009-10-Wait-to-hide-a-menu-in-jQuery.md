----- 
menupriority:   1
kind:           article
created_at:           2009-10-26T21:56:09+02:00
title: Un menu qui attends avant de se cacher
tags:
    - jQuery
    - web
    - javascript
    - design
-----

J'ai déjà dit pourquoi [je préférais que mon menu de navigation soit caché](/Scratch/fr/blog/2009-10-Focus-vs-Minimalism). J'ai finalement décidé d'attendre un peu avant de cacher le menu. Juste le temps que l'utilisateur le voit. Mais voilà. Comment faire pour qu'il ne disparaisse que lorsque l'on ne s'en sert pas pendant un petit moment ?

Voici la solution que j'utilise avec jQuery

HTML : 

<div>
<code class="html">
    <div id="menuButton"></div>
    <div id="entete">
        <ul>
            <li> menu item 1 </li>
            ...
            <li> menu item n </li>
        </ul>
    </div>
</code>
</div>

CSS : 

<div><code class="css">
    #entete {
      top: 1em;
      left: 0;
      position: fixed;
      width: 10em;
      z-index: 2000; }
    
    #entete {
      top: 1em;
      height: 22em;
      left: 0;
      position: fixed;
      width: 10em; }
</code></div>

Javascript : 

<div><code class="javascript">
var last=0;

// will hide the menu in 5 seconds
// if the variable 'last' has not changed its value
function autoHideMenu(value) {
    setTimeout(function(){
        if ( last == value ) { hideMenu(); }
    },5000);
}

$(document).ready( function() {
    // show the menu when the mouse is on
    // the good area
    $('#menuButton').hover(showMenu);

    // If the mouse is on the menu change the
    // value of 'last'
    // try to hide the menu when the mouse 
    // go out off the menu.
    $('#entete').hover(
        function(){last+=1;}, 
        function(){autoHideMenu(last);} );
    autoHideMenu(0);
});

// show / hide menu functions details

// move to the left
function hideMenu() { 
    $('#entete').animate({left:"-10em"}, 500 ); 
}

// move to right and will try to hide in 5 sec.
function showMenu() { 
    $('#entete').animate({left:"0em"}, 500 );
    last+=1;
    autoHideMenu(last);
}

</code></div>

Simple et peu gourmand en ressources. Pas de timer (ou presque), pas de fuite de mémoire, pas d'utilisation de date... 


