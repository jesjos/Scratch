-----
isHidden:       false
menupriority:   1
kind:           article
created_at:     2011-08-17T11:33:30+02:00
title: A more convenient diff
author_name: Yann Esposito
author_uri: yannesposito.com
tags: 
  - diff
  - git
  - colors
-----

Diff is a very useful tool. But it is not so easy to read for us, simple mortal.


This is why, when you use `git` it will use a better formatting and colorize it.

Here is the script I use when I want to use human readable `diff` à la git.  

<code class="zsh" file="ydiff">
#!/usr/bin/env zsh

# Load colors helpers
autoload -U colors && colors

function colorize_diff {
    while read line; do
    case ${line[0]} in
    +) print -n $fg[green];;
    -) print -n $fg[red];;
    @) # Display in cyan the @@ positions @@
       if [[ ${line[1]} = '@' ]]; then
           line=$(print $line | perl -pe 's#(\@\@[^\@]*\@\@)(.*)$#'$fg[cyan]'$1'$reset_color'$2#')
       fi;;

    esac
        print -- $line
        print -n $reset_color
        done
}

diff -u $* | colorize_diff
</code>
