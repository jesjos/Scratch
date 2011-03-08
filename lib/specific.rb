def html_tag
    t=tags
    %{<meta name="tag" content="#{t}"/>} if t.length>0
end

def html_alternate_lang
    @conf.languages.map do |lang|
        item_for_lang=item_of_language(lang)
        if not item_for_lang.nil?
            %{<link rel="alternate" lang="#{lang}" hreflang="#{lang}" type="text/html" 
              title="#{item_for_lang[:title]}" 
              href="#{item_for_lang.reps[0].path}" />}
        end
    end.join("\n"+" "*8)
end

def html_ie_stuff
    %{<!--[if lt IE 9]>
        <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <script src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js"></script>
        <![endif]-->}
end

def has_article_depth
    depth = depthOf(@item)
    std_article_depth=3
    return true if depth > std_article_depth
    return false if depth < std_article_depth
    return @item.children.length > 0
end

def article_navigation_menu
    if has_article_depth        
        %{<div class="navigation">
            <div class="navigationprev">#{previousFor(@item)}</div>
            <div class="navigationnext">#{nextFor(@item)}</div>
        </div>
        <div class="flush"></div>}
    end
end

def html_article_top_menu
    res = %{<div class="return"><a href="#entete">&darr; Menu &darr;</a></div>
            <div id="choixlang">}
    @conf.languages.map do |l|
        dest=@item_rep.path.sub(/^\/Scratch\/..\//, %{/Scratch/#{l}/}) 
        if @item_rep.path != dest
            res <<= %{<a href="#{dest}" onclick="setLanguage('#{l}')">#{ tradOfKeywordIn(:switchTo,l)}</a>}
        end
    end
    res <<= %{</div>}
end

def html_last_modified_dates
    require 'time'
    language=@conf.language
    res=%{<div id="lastmod">}
    creation_date_iso = Time.parse(@item[:created_at].to_s).iso8601
    creation_date = @item[:created_at].strftime(@config[:dateFormat][language.intern])
    res <<= %{#{tradOf(:created_at)}: <time datetime="#{creation_date_iso}">#{creation_date}</time>}

    res <<= " - "

    modified_date_iso = Time.parse(gitmtime.to_s).iso8601
    modified_date = gitmtime.strftime(@config[:dateFormat][language.intern])
    res <<= %{#{tradOf(:last_modified)}: <time datetime="#{modified_date_iso}" pubdate="pubdate">#{modified_date}</time>}
    res <<= %{</div>}
end

def html_last_modified_date
    language=@conf.language
    res=%{<div id="lastmod">}
    modified_date_iso = Time.parse(gitmtime.to_s).iso8601
    modified_date = gitmtime.strftime(@config[:dateFormat][language.intern])
    res <<= %{#{tradOf(:last_modified)}: <time datetime="#{modified_date_iso}" pubdate="pubdate">#{modified_date}</time>}
    res <<= %{</div>}
end


def html_prev_next_articles
    res = %{<div id="next_before_articles">}
    res<<=%{<div id="previous_articles">
                    #{tradOf(:previousArticles)}}
    (1..3).each do |n|
        a=article_brother(-n)
        if not a.nil?
            res <<= %{<div class="previous_article">}
            res <<= link_to( %{<span class="nicer">«</span>&nbsp;}+ a[:title], a)
            res <<= %{</div>}
        end
    end
    res <<= %{</div>}
    res <<= %{<div id="next_articles">
                #{tradOf(:nextArticles)}}
    (1..3).each do |n|
        a=article_brother(n)
        if not a.nil?
            res <<= %{<div class="next_article">}
            res <<= link_to(a[:title] + %{&nbsp;<span class="nicer">»</span>}, a) 
            res <<= %{</div>}
        end
    end
    res <<= %{</div>}
    res <<= %{</div>}
    return res
end

def html_rss
    %{<div id="choixrss">
        <a id="rss" href="http://feeds.feedburner.com/yannespositocom#{ @conf.language }">
            #{tradOf(:subscribe)}
        </a>
    </div>}
end

def html_comment
    res =%{<script type="text/javascript">
            $(document).ready(function(){ 
                $('#comment').hide(); 
                $('#clickcomment').click(showComments); 
            });
            function showComments() {
                $('#comment').show();
                $('#clickcomment').fadeOut();
            }
            document.write('<div id="clickcomment">#{tradOf(:clickForComment)}</div>');
        </script>
        <div class="flush"></div>
        <section id="comment">
            <h2 class="first">#{tradOf(:comment)}</h2>
            <noscript>
                #{tradOf(:enableJavascriptToComment)}
            </noscript>
            #{generateIntenseDebateThread}
        </section>}
end
