import { Request, Response } from 'express';
import queryToCsv from './common/queryToCSV';

/**
 * http://localhost:8000/
 * サーバールート
 *
 * @param req リクエスト
 * @param res レスポンス
 */
export const rootHandler = (req: Request, res: Response) => {
  res.send('Hello World! sample server!');
};

/**
 * http://localhost:8000/TagReport
 * タグCSV作成
 *
 * @param req リクエスト
 * @param res レスポンス
 */
export const reportCsvHandler = async (req: Request, res: Response) => {
  await queryToCsv(`SELECT * From Tags`, 'TagReport');
  res.send('レポートCSVを作成しました');
};
