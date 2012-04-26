-----
isHidden:       false
menupriority:   1
kind:           article
created_at:     2010-06-17T14:41:36+02:00
title: Analyser les clicks sur votre Site
subtitle: Utiliser Google Analytics comme un Pro
author_name: Yann Esposito
author_uri: yannesposito.com
tags:
  - blog
  - javascript
  - jQuery
  - Google
  - analytics
  - analyser
  - utilisateur
  - asynchrone
-----

Voici comment analyser tous les clics que font vos utilisateurs sur votre blog en incluant google analytics de façon asynchrone.

Dans le html, il faut utiliser [jQuery](http://jquery.com) et un fichier que j'ai appelé `yga.js` :

<code class="html">
    <script type="text/javascript" src="jquery.js"></script>
    <script type="text/javascript" src="yga.js"></script>
</code>

Voici le contenu du fichier `yga.js` :

<code class="javascript" file="yga.js">
$(document).ready( function() {
    // add an event to all link for google analytics
    $('a').click(function () {
        // tell analytics to save event
        try {
            var identifier=$(this).attr('id') ;
            var href=$(this).attr('href')
            var label="";
            if ( typeof( identifier ) != 'undefined' ) {
                label=label+'[id]:'+identifier
                category='JSLink'
            }
            if ( typeof( href ) != 'undefined' ) {
                label=label+' [href]:'+href
                if ( href[0] == '#' ) {
                    category='Anchor';
                } else {
                    category='Link';
                }
            }
            _gaq.push(['_trackEvent', category, 'clicked', label]);
            // console.log('[tracked]: ' + category + ' ; clicked ; ' + label );
        }
        catch (err) {
            console.log(err);
        }

        // pause to allow google script to run
        var date = new Date();
        var curDate = null;
        do {
            curDate = new Date();
        } while(curDate-date < 300);
    });
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-XXXXXXXX-1']);
_gaq.push(['_trackPageview']);

(function() {
 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
 })();
</code>

Remplacez le : `UA-XXXXXXXX-1` par votre code google analytics. Maintenant l'installation est finie.

Pour l'utiliser il suffit de se rendre dans google analytics rubrique `Content` puis `Event Tracking` comme sur la capture d'écran suivante :

blogimage("GA_events.png", "Where to find events tracking in google analytics interface")

Joyeuse inspection du comportement de vos utilisateurs.
