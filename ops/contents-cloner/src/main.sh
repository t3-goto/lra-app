#!/bin/bash
#################################
# ContentsCloner（FE）
#################################

# Check contents source.
if [ -z $CONTENTS_SOURCE_URL ]; then
  exit 1
fi

# Define action to handle SIGTERM.
save() {
  exit 0
}
trap save TERM

# Initialize git.
git init
git config core.sparsecheckout true
git remote add origin ${CONTENTS_SOURCE_URL}.git
echo ${CONTENTS_SOURCE_DIR} >.git/info/sparse-checkout

# Pull contents.
git pull origin ${CONTENTS_SOURCE_BRANCH}

# Pull diff contents every minute.
while true; do
  date
  sleep 60
  git pull origin ${CONTENTS_SOURCE_BRANCH}
done
