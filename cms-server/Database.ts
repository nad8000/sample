import { Database, OPEN_READWRITE, OPEN_CREATE } from 'sqlite3';

// SQLiteへの接続(TODO:環境変数ごとに変えたい)
const database = new Database(
  './cms-server/cms-development.db',
  OPEN_READWRITE | OPEN_CREATE,
  (err: Error | null) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the SQLite database.');
  }
);

export default database;
