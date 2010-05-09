-----
isHidden:       false
menupriority:   1
kind:           article
created_at:           2009-10-23T10:53:16+02:00
title: launch daemon from command line
author_name: Yann Esposito
author_uri: yannesposito.com
tags:
    - zsh
    - shell
    - script
    - tip

-----

Here is a tip, I don't know why, but I almost always forgot how to do that.

When you want to launch a command and this command should not be killed after you close your terminal. Here is how to accomplish that from command line: 

<div><code class="zsh">
nohup cmd &
</code>
<small>where <code>cmd</code> is your command.</small>
</div>

I let this command here for me and I wish it could also help someone.

