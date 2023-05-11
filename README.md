# 概要

React+Redux+TypeScript+SQLiteを使ってヘッドレスCMSを作成してブログ制作に使いたい

※一旦データベースはsqliteで作成してあとでmysqlに切り替える予定

※現在サーバー部分を作成中、クライアントはほぼテンプレートのまま

******************************************

## フォルダ構成

doc ドキュメント類

- database データベースのドキュメント

cms-client client側

- src クライアントサイドのコード

cms-server server側

- config sequelizeの設定フォルダ
- migrations sequelizeのマイグレーション作成用フォルダ
- models sequelizeのモデルフォルダ
- seeders sequelizeのダミーデータ作成用フォルダ
- src サーバーサイドのコード

******************************************

## 動作確認の手順

Githubからソースをcloneする。

```bat
git clone https://github.com/skrdt/sample.git
```

各フォルダに移動してnpm ciあるいはnpm installして必要なモジュールをインストールする。

クライアント

```bat
cd cms-project
npm ci
```

サーバー

```bat
cd cms-server
npm ci
```

## データベースの準備

cms-serverに移動し、下記のマイグレーションを実行するとsqliteデータベース(cms-development.db)が作成される。

```bat
npx sequelize-cli db:migrate
```

シードを実行するとデータベースにダミーデータが追加される。

```bat
npx sequelize-cli db:seed:all
```

## アクセスURL

開発にはVisualStdioCodeを使用している。
「実行とデバッグ」を開き、「All (Client + Server)」を実行するとすべてのリソースが起動する。

## 個別起動

「Run Client」を実行すると自動で下記URLが開く。

<http://localhost:3000>

サーバー側は「Run Server」を実行する。URLは下記、アクセスした際に「Hello World! sample server!」と表示されれば正常に動作している。

<http://localhost:8000>
