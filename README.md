# 概要

React+Redux+TypeScript+SQLiteを使ってローカルで動く小規模なウェブアプリケーションを作りたい。

******************************************

## フォルダ構成

sample-document ドキュメント類

- database データベースのドキュメント

sample-client client側

- src クライアントサイドのコード

sample-server server側

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
cd sample-project
npm ci
```

サーバー

```bat
cd sample-server
npm ci
```

## データベースの準備

sqliteの公式サイトからsqlite3をダウンロードし、sample-serverにsqlite3.exeをコピーする。
<https://sqlite.org/index.html>

sample-serverにsqlite3.exeがある状態でマイグレーションを実行するとsqliteデータベース(sample-development.db)が作成される。

```bat
cd sample-server
npx sequelize-cli db:migrate
```

シードを実行するとデータベースにダミーデータが追加される。

```bat
cd sample-server
npx sequelize-cli db:seed:all
```

## アクセスURL

VSCodeの「実行とデバッグ」を開き、「Run Client」を実行すると自動で下記URLが開く。

<http://localhost:3000>

サーバー側は「Run Server」を実行する。URLは下記、アクセスした際に「Hello World! sample server!」と表示されれば正常に動作している。

<http://localhost:8000>

## 手動実行する場合

手動で実行する場合はコマンドプロンプトを開き下記を実行する。

クライアント側の起動

```bat
cd sample-client
npm start
```

サーバー側の起動

```bat
cd sample-server
node server
```
