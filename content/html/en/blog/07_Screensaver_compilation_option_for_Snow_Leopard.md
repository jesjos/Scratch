-----
isHidden:       false
menupriority:   1
kind:           article
created_at:           2009-09-06T17:59:16+02:00
title: Screensaver compilation option for Snow Leopard<sub>&copy;</sub>
author_name: Yann Esposito
author_uri: yannesposito.com
tags:
    - screensaver
    - Apple
    - mac
    - Xcode

-----
# How to recompile your screensaver to be Snow Leopard(c) compatible

I upgraded to Mac OS X 10.6 Snow Leopard(c), and my [YClock](/YBlog/YClock.html) screensaver didn't work on it. After searching on google, the problem seems to be just a recompilation away.
Unfortunately, even recompiling it in 64 bit it didn't work either.
After a bit more research (thanks to [ElectricSheep](http://community.electricsheep.org/node/236) ).

I discovered the good parameters for compilation.

blogimage("xcodeConfig.png","XCode configuration")

For now I didn't compiled it to work also on Tiger and Leopard. I don't know XCode enought to know how to make the Garbage collector to be disabled on 32 bits version and enabled on 64 bits version.

It was a bit difficult to discover these informations. Hope this post helped someone.
