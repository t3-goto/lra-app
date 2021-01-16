# TODO:distをpushした後にfe配下のdistのみpullするようにに作りこむ。
#!/bin/bash
# 最新WebコンテンツをGitHubからコンテナへ取込む

# コンテンツ元の環境変数が無ければエラー終了
if [ -z $CONTENTS_SOURCE_URL ]; then
  exit 1
fi

# 初回はGitHubからコンテンツをクローンする
git clone $CONTENTS_SOURCE_URL /data

# ２回目以降は、1分ごとに変更差分を取得する
cd /data
while true; do
  date
  sleep 60
  git pull
done
