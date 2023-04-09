const sqlite3 = require('sqlite3').verbose();

// SQlite接続
const db = new sqlite3.Database('../sample-test.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the SQLite database.');
});

// Read data from the SQLite database
db.serialize(() => {
  db.each("SELECT id, name FROM users", (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.id + ": " + row.name);
  });
});

// Close the database connection
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Closed the SQLite database connection.');
});

export default db;