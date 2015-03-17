#!/bin/bash

# Github pages publishing script. Shamelessly stolen and modified from
# https://github.com/schlagert/syslog. Actually I got to reading a bit and found
# this http://oli.jp/2011/github-pages-workflow/ - and figured out something
# of a variant.
#
# Usage:
#   ./publish.sh     - Will update and push the `gh-pages` branch to Github.

# merge the latests web-stuff into to `gh-pages` branch
CURRENT=`git branch | grep "*" | awk '{print $2}'`
git checkout gh-pages
git checkout ${CURRENT} -- index.html img css js compositions
git commit -a -m "Regenerated site documentation."

# publish to origin
git push origin gh-pages
git checkout ${CURRENT}
