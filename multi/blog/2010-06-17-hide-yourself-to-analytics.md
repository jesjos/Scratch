-----
isHidden:       false
menupriority:   1
kind:           article
created_at:     2010-06-17T16:37:22+02:00
fr: title: Se cacher de ses statistiques web
en: title: Hide Yourself to your Analytics
author_name: Yann Esposito
author_uri: yannesposito.com
tags:
  - analytics
en:   - statistics
fr:   - statistiques
en:   - hide
fr:   - cacher
  - blog
  - jQuery
  - javascript
-----

fr: Voici un moyen très simple de ne plus être comptabilisé dans les visites de son propre site.
fr: Tout d'abord, vous devriez jeter un coup d'œil sur comment [je gère les systèmes de récupération de statistiques](/Scratch/fr/blog/2010-06-17-track-events-with-google-analytics). 
fr: Je centralise tout dans un seul fichier javascript ce qui facilite le travail.
en: This is a way not to count your own visits to your blog.
en: First you should look on how [I handle analytics](/Scratch/en/blog/2010-06-17-track-events-with-google-analytics). All analytics are handled in one javascript file, this make things really convenient.

fr: Cette méthode nécessite l'utilisation de `jquery-cookie`.
en: Then you need to know my method use the `jquery-cookie`.

fr: Avant de comptabiliser les visites, je vérifie que la clé `admin` n'est pas utilisée dans mes cookies.
en: I check if the key `admin` is not set in the cookie before adding the visit.

<code class="javascript">
    var admin = $.cookie('admin');
    if (! admin) {
        // put your analytics code here
    } else {
        console.log("[WARNING] you're HIDDEN to analytics");
    }
</code>

fr: et il suffit de créer deux fichier <sc>html</sc>. Un pour se cacher :
en: then create two <sc>html</sc> files. One to hide:

<code class="html" file="become_hidden.html">
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="fr" xml:lang="fr">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <script type="text/javascript" src="jquery.js"></script>
        <script type="text/javascript" src="jquery.cookie.js"></script>
        <script>
            $(document).ready(function(){
                $.cookie('admin',1);
                $('#info').html('Analytics can no more see you.')
            });
        </script>
        <title>Hide to analytics</title>
    </head>
    <body>
        <div id="info"></div> 
    </body>
</html>
</code>

fr: et un autre pour redevenir visible (ça peut être utile) :
en: the other to be visible again (it can be useful):

<code class="html" file="become_visible.html">
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="fr" xml:lang="fr">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <script type="text/javascript" src="jquery.js"></script>
        <script type="text/javascript" src="jquery.cookie.js"></script>
        <script>
            $(document).ready(function(){
                $.cookie('admin',null);
                $('#info').html('Analytics can see you.')
            });
        </script>
        <title>Hide to analytics</title>
    </head>
    <body>
        <div id="info"></div> 
    </body>
</html>
</code>

fr: Maintenant en accédant à ces fichiers depuis votre navigateur vous pouvez *disparaître* des systèmes d'analyses ou bien être considéré comme tous les autres individus.
fr: Pensez à accéder à ces fichiers depuis tous les navigateurs que vous utilisez et vos visites ne seront plus comptabilisées.
en: Now accessing these files with you browser you can *hide* or *appear* in your statistics. You just have to think to access these file from all you browser.

