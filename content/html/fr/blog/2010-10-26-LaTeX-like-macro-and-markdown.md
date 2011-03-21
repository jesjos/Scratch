-----
isHidden:       false
menupriority:   1
kind:           article
created_at:     2010-10-26T14:30:58+02:00
title: Des macros LaTeX pour markdown
author_name: Yann Esposito
author_uri: yannesposito.com
macros:
  test: "This is a macro test"
  latex: '<span style="text-transform: uppercase">L<sup style="vertical-align: 0.15em; margin-left: -0.36em; margin-right: -0.15em; font-size: .85em">a</sup>T<sub style="vertical-align: -0.5ex; margin-left: -0.1667em; margin-right: -0.125em; font-size: 1em">e</sub>X</span>'
# tags:
-----

begindiv(intro)


<%= tlal %> J'ai fait un système simple de macros pour mon blog. Par exemple, il me suffit d'écrire %<span></span>latex et ça affiche %latex.

enddiv

J'ai ajouter un système de macro pour mon système de blog.
Lorsqu'on est habitué à %latex et que l'on commence à écrire des articles
un peu conséquent avec des notations mathématiques,
les macros deviennent vite quelque chose d'indispensable.

Dans l'entête de mes fichiers j'écris simplement:

<code class="yaml">
macros:
  test: "This is a macro test"
  latex: '<span style="text-transform: uppercase">L<sup style="vertical-align: 0.15em; margin-left: -0.36em; margin-right: -0.15em; font-size: .85em">a</sup>T<sub style="vertical-align: -0.5ex; margin-left: -0.1667em; margin-right: -0.125em; font-size: 1em">e</sub>X</span>'
</code>

Puis dans le corps ça va remplacer :

- %<span></span>test par *%test* ;
- et %<span></span>latex par *%latex*

Le code est assez simple. 
Pour les utilisateurs de `nanoc` il suffit de copier le fichier suivant dans le répertoire `lib`. 


<code class="ruby" file="macros.rb">
# usage:
# ---
# ...
# macros:
#   test: "passed test"
# ---
# ...
# Here is a %test.
#
class Macros < Nanoc3::Filter
    identifier :falacy
    attr_accessor :macro
    def initialize(arg)
        super
        @macro={}
        @macro[:tlal] = %{<span class="sc"><abbr title="Trop long à lire">tlàl</abbr> : </span>}
        @macro[:tldr] = %{<span class="sc"><abbr title="Too long; don't read">tl;dr</abbr>: </span>}
        if @item.nil?
            if not arg.nil?
                @macro.merge!( arg )
            end
        else
            if not @item[:macros].nil?
                @macro.merge!( @item[:macros] )
            end
        end
    end
    def macro_value_for(macro_name)
        if macro_name.nil? or macro_name=="" or @macro[macro_name.intern].nil?
            return %{%#{macro_name}} 
        end
        return @macro[macro_name.intern]
    end
    def run(content, params={})
        content.gsub(/%(\w*)/) do |m| 
            if m != '%'
                macro_value_for($1)
            else
                m
            end
        end
    end
end
</code>

Les macros peuvent être vraiment utiles. Lisez [cet article](http://adam.gomaa.us/blog/2007/oct/22/markdown-doesnt-scale/index.html) par exemple.
