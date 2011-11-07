#!/usr/bin/env zsh

gem install nanoc 

print -- "INSTALL oniguruam needed for the ultraviolet gem"

cd /tmp
wget http://www.geocities.jp/kosako3/oniguruma/archive/onig-5.9.2.tar.gz
tar xzf onig-5.9.2.tar.gz
cd onig-5.9.2
./configure && make

print -- "YOU SHOULD TYPE YOUR PASSWORD (sudo)"
sudo make install

print -- "Install needed gems"
gem install  ultraviolet
gem install builder kramdown
# gem install spox-ultraviolet --source=http://gems.github.com
gem install spox-ultraviolet
