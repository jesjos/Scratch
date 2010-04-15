#!/usr/bin/perl
BEGIN{
    $/="";
}

sub replaceminim {
    my $begin = $_[0] ;
    my $end = $_[1] ;
    my $keep = $_[2] ;

    # protection des X et Y pour qu'ils disparaissent
    s/X/_wasx_/g;
    s/Y/_wasy_/g;
    
    # remplacement de la chaine en un seul caractère
    s/$begin/X/g;          # begin
    s/$end/Y/g;               # end

    # A partir de maintenant tous les X sont les begin
    # tous les Y sont les ends
    # on veut récupérer ce qu'il y a à l'intérieur
    if ($keep) {
        s/X(([^XY]|\n)*?)Y/$1/gm;   # suppression begin..end
    } else {
        s/X([^XY]|\n)*?Y//gm;   # suppression begin..end
    }
    
    # recuperation des X, Y, et begin et end non traites
    s/X/$begin/g;
    s/Y/$end/g;
    s/_wasx_/X/g;
    s/_wasy_/Y/g;
}
replaceminim( "en:","::", 1);
replaceminim( "fr:","::", 0);
replaceminim( "<en>", "</en>", 1);
replaceminim( "<fr>", "</fr>", 0);
replaceminim( "!!en!!", "!!!!", 1);
replaceminim( "!!fr!!", "!!!!", 0);
s#date:#created_at:#
