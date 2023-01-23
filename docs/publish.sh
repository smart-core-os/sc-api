#!/bin/bash

set -e # if a command fails it stops the execution

echo "[+] Publishing API docs"

if [ $1 = "prepare" ]; then
  echo "- Preparing"
  echo "    git clone git@github.com:smart-core-os/smart-core-os.github.io.git ./target"
  git clone git@github.com:smart-core-os/smart-core-os.github.io.git ./target
  echo "    deleting old doc files"
  rm -rf ./target/src/api/traits/* ./target/src/api/types/* ./target/src/api/info/*
  echo "    copying docs files"
  cp -R ./api/* ./target/src/api
  echo "    committing generated docs to repo"
  pushd target
  git add src/api --force
  git commit -m "chore: generated API docs v$2" || echo "Done"
  popd
fi

if [ $1 = "perform" ]; then
  echo "- Peforming"
  pushd target
  echo "    pushing to docs repo"
  git push origin main
  echo "    tidying up"
  popd
  rm -rf ./target
fi
