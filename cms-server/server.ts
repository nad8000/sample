import express from 'express';
import routes from './src/routes';

// 環境変数読み込み
require('dotenv').config();

const port = process.env.PORT || 8000;

const app = express();
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});