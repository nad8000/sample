const sqlite3 = require('sqlite3').verbose();

// SQlite接続
const db = new sqlite3.Database('../../sample-test.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the SQLite database.');
});

export default db;