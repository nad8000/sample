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
各フォルダに移動してnpm ciして必要なモジュールをインストールする。

```bat
git clone https://github.com/skrdt/sample.git
cd sample
cd sample-project
npm ci
cd ..
cd sample-server
npm ci
```

sqliteの公式サイトからsqlite3をダウンロードし、sample-serverにsqlite3.exeをコピーする。
<https://sqlite.org/index.html>

sample-serverにsqlite3.exeがある状態でマイグレーションを実行するとsqliteデータベース(sample-test.db)が作成される。
シードを実行するとデータベースにダミーデータが追加される。（未実装）

```bat
cd sample-server
npx sequelize-cli db:migrate --env test  
npx sequelize-cli db:seed:all --env test  
```

VSCodeの「実行とデバッグ」を開き、「Run Client」「Run Server」を実行すると自動で下記URLが開く。

<http://localhost:3000>

サーバー側のURLは下記、アクセスした際に「Hello World! sample server!」と表示されれば正常に動作している。

<http://localhost:8000>

手動で実行する場合はコマンドプロンプトを開き下記を実行する。

クライアント側の起動

```bat
cd sample-project
npm start
```

サーバー側の起動

```bat
cd cdsample-server
node server
```
