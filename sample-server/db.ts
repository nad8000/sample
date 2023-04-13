import { Database, OPEN_READWRITE, OPEN_CREATE } from 'sqlite3';

// SQLiteへの接続
const database = new Database('./sample-server/sample-development.db', OPEN_READWRITE | OPEN_CREATE, (err: Error | null) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the SQLite database.');
});

// Function to fetch all users from the "user" table
function fetchTags(): void {
  database.all('SELECT * FROM Tags', (err: Error | null, rows: any[]) => {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log('Fetched Tags:', rows);
  });
}

// Export the database connection and the fetchAllUsers function
export { database, fetchTags };