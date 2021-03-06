----- 
menupriority:   1
kind:           article
created_at:           2009-08-18T14:44:31+02:00
title: Git en solo
author_name: Yann Esposito
author_uri: yannesposito.com
tags:
  - git
  - svn
  - workflow

-----

blogimage("central_architecture.png","central architecture")

begindiv(encadre)

_Màj_ : Actuellement j'utilise github avec des repository privés. Je paye une somme très raisonnable pour ce service. Si vous voulez être complètement autonome, je vous conseille d'utiliser [gitolite](https://github.com/sitaramc/gitolite) sur votre propre serveur accessible sur le web.

enddiv

J'utilise [Git](http://www.git-scm.org/) pour gérer mes projets personnels.
J'ai un *repository* centralisé et tous mes ordinateurs se synchronisent avec lui.
Cependant, dans la documentation officielle, je n'ai pas trouvé clairement ce que je souhaitais.

En d'autres termes, si vous souhaitez utiliser le type de *workflow* que SVN proposait avec Git (et ses avantages), voici comment procéder.

newcorps

## Initialisation

Disons que j'ai déjà un projet et que je veuille en créer un nouveau.

<div>
<code class="zsh">
cd to/project/directory/
git init
git add
git commit
</code>
</div>

Maintenant tous les fichiers du répertoire <code>to/project/directory/</code> sont *versionnés*. Si vous voulez ignorer certains fichiers il suffit de modifier le fichier <code>.gitignore</code>.

Par exemple voici le mien : 
<div>
<code class="zsh">
*.swp
.DS_Store
ikog.py.bak
output/Scratch/assets
output/Scratch/en
output/Scratch/fr
output/Scratch/multi
</code>
</div>

Ensuite, il faut placer ce projet dans un répertoire accessible via Internet.

<div>
<code class="zsh">
git clone --bare . /path/to/repository
</code>
</div>

<div class="encadre"><em>
Màj: La meilleure solution est d'installer <a href="https://github.com/sitaramc/gitolite">gitolite</a> pour installer un serveur git sur sa machine. Gitolite permet de gérer la gestion des droits d'utilisateurs, ceux-ci n'ayant pas accès à un shell sur la machine.
</em>
</div>

Maintenant à partir de n'importe quel ordinateur, voici ce que vous pouvez faire : 

<div>
<code class="zsh">
git clone protocol://path/to/repository local_directory
</code>
</div>

et <code>local_directory</code> contiendra un projet à jour.

<div class="encadre"><em>

Je vous conseille de faire la même opération sur l'ordinateur qui à servi à créer le projet de façon à vérifier que tout fonctionne correctement.
</em>
</div>

newcorps

## L'utilisation courante

Pour résumer vous avez maintenant un repository sur Internet et un ou plusieurs ordinateurs lui sont associés. Maintenant il faut que tout soit toujours synchronisé.

Avant de commencer à travailler, la première chose à faire est de récupérer les modification à partir d'Internet vers votre poste local : 

<div>
<code class="zsh">
git pull
</code>
</div>

Ensuit vous pouvez travailler en faisant (plusieurs fois) : 

<div>
<code class="zsh">
hack, hack, hack...
git add some files
git commit
</code>
</div>

Quang vous voulez envoyez les modifications locales sur Internet, il suffit de faire :

<div>
<code class="zsh">
git push
</code>
</div>

Tout devrait être bon.

Si vous avez des problèmes avec le <code>push</code> et le <code>pull</code> ; vérifiez votre fichier <code>.git/config</code>. Il devrait contenir les lignes suivantes :

<div>
<code class="zsh">
...
[remote "origin"]
	url = protocol://url/of/the/repository
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
	remote = origin
	merge = refs/heads/master
...
</code>
</div>

## Synchronisation des branches

Bien, maintenant que tout semble bon, il faut encore s'occuper de quelques petites choses (sinon, SVN suffirait).
Git est complètement orienté sur la décentralisation et la création de nouvelles branches sur le même poste. Synchroniser des branches sur plusieurs serveurs différent n'est pas une opération naturelle.

C'est pourquoi j'ai créé deux simples scripts pour automatiser cette opération. Un script pour créer un branche localement et en ligne. Un autre script pour récupérer les branches en lignes qui ne sont pas présente localement.

Ainsi, lorsque je veux créer une nouvelle branche (localement et ligne) ; je lance le script :

<div><code class="zsh">git-create-new-branch branch_name</code></div>

et quand je suis sur un autre ordinateur et que je veux récupérer les branches crées sur un autre poste, j'exécute :

<div><code class="zsh">git-get-remote-branches</code></div>

Voici le code des deux script (en zsh) : 

<div>
<code class="zsh" file="git-create-new-branch">
#!/usr/bin/env zsh

if (($#<1)); then
    print -- "usage: $0:t branch_name" >&2
    exit 1
fi

branch=$1
git br ${branch}
git co ${branch}
git config branch.${branch}.remote origin
git config branch.${branch}.merge refs/heads/${branch}
</code>
</div>

<div>
<code class="zsh" file="git-get-remote-branches">
#!/usr/bin/env zsh

# recup branches not on local
localbranches=( $(git br | sed 's/\*/ /') )
remoteMissingBranches=( $(git br -r | \
    egrep -v "origin/HEAD|(${(j:|:)localbranches})" ) )
for br in $remoteMissingBranches; do
  branch=${br#origin/}
  print "get remote branch $branch"
  git br ${branch}
  git config branch.${branch}.remote origin
  git config branch.${branch}.merge refs/heads/${branch}
done
</code>
</div>
