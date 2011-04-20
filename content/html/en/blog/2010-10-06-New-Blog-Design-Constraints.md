-----
isHidden:       false
menupriority:   1
kind:           article
created_at:     2010-10-06T11:33:03+02:00
title: New Blog Design Constraints
author_name: Yann Esposito
author_uri: yannesposito.com
tags:
  - programming
  - blog
-----

I changed the design of my blog.
Now it should be far cleaner.
I believe I use no CSS3 feature and far less javascript.
Of course before my website was perfectly browsable without javascript. 
Unfortunately some CSS3 feature are not mature enough on some browser.
For more details you can read my older [blog entry](/n3blog/en/blog/2010-07-07-CSS-rendering-problems-by-navigator).
But the major problem came from, `font-shadow` and gradients.
Then my new design obey to the following rules:

- no CSS element begining by '-moz' or '-webkit', etc...,
- no text shadow,
- clean (I mean delete) most javascript.

I hope the new design please you. 
