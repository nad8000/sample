const express = require('express');
const sqlite3 = require('sqlite3');

// 環境変数読み込み
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

//Databaseオブジェクトを作成する。sqlite3.Databaseというオブジェクトに用意されている。
const db = new sqlite3.Database('sampl-test.db');

app.get('/', (req, res) => {
  res.send('Hello World! sample server!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});