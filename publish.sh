#!/bin/bash

# Github pages publishing script. Shamelessly stolen and modified from
# https://github.com/schlagert/syslog.
#
# Packs the target web into a temporary folder and dances the change-branch-and-
# commit-push-dance in order to get the latest and greatest into the `gh-pages`
# branch.
#
# Usage:
#   ./publish.sh     - Will update and push the `gh-pages` branch to Github.

mkdir -p tmp

# pack the relevant `gh-page` assets
cp -r img tmp/
cp -r css tmp/
cp -r js  tmp/
cp -r compositions tmp/
cp index.html tmp/

# merge into to `gh-pages` branch
CURRENT=`git branch | grep "*" | awk '{print $2}'`
git checkout gh-pages
rm -f *.html edoc-info erlang.png stylesheet.css syslog.svg benchmark.svg
cp doc/* .
git add .
git commit -a -m "Regenerated site documentation."
git push origin gh-pages
git checkout $CURRENT
