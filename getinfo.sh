#!/usr/bin/env sh

SplitLine=">-----------------------------------------------------<"
# pull
git pull | echo $SplitLine

# find
git status --untracked-files --short
echo $SplitLine
git log --pretty=oneline | wc -l
echo $SplitLine