#!env zsh

# This script is used to fixup the Alfred Sync folder after Alfred sync gets it all wrong.
rm -rf .git
rm -rf node_modules
git clone --bare git@github.com:Grynn/alfred-chrono.git .git
git config --unset core.bare
git checkout
npm install
