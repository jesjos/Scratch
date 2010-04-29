----- 
isHidden:       false
menupriority:   1
kind:           article
created_at:           2009-09-06T17:59:16+02:00
title: Compilation d'économiseur d'écran sous Snow Leopard<small>&copy;</small> 
tags:
    - screensaver
    - Apple
    - mac
    - Xcode

-----
# Comment recompiler un économiseur d'écran sous Snow Leopard(c)

Mon économiseur d'écran ne fonctionnait plus sous Mac OS X 10.6 Snow Leopard(c). Après un peu de recherche sous google, le problème semblait pouvoir être réglé avec une recompilation.
Cependant, même en recomilant en 64 bits ça ne fonctionnait toujours pas.
Après un peu plus de recherches (merci à [ElectricSheep](http://community.electricsheep.org/node/236) ),
j'ai découvert les bons paramètres.

<%= blogimage("xcodeConfig.png","XCode configuration") %>

Pour l'instant je ne l'ai pas compilé pour être compatible Tiger et Leopard. Je ne connais pas assez bien XCode pour savoir comment désactiver le garbage collector sur la version 32 bits et l'activer sur la version 64 bits.

Il a été assez difficile de découvrir toutes ces informations. J'espère que cet article aura pu aider quelqu'un.
