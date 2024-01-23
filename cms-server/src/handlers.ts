import { Request, Response } from 'express';
import queryToCsv from './common/QueryToCSV';
import TagsService from './common/TagsService';

/**
 * http://localhost:8000/
 * サーバールート
 *
 * @param req リクエスト
 * @param res レスポンス
 */
export const rootHandler = (req: Request, res: Response) => {
  res.send('Hello World! cms server!');
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

/**
 * http://localhost:8000/Tags
 * タグ取得
 * 
 * @param req リクエスト
 * @param res レスポンス
 */
export const tagsHandler = async (req: Request, res: Response) => {
  res.send(await TagsService(req));
};

/**
 * http://localhost:8000/TagGroups
 * タググループ取得
 * 
 * @param req リクエスト
 * @param res レスポンス
 */
export const TagGroupsHandler = async (req: Request, res: Response) => {
  await queryToCsv(`SELECT * From Tags`, 'TagReport');
  res.send('レポートCSVを作成しました');
};

/**
 * http://localhost:8000/Cards
 * カード取得
 * 
 * @param req リクエスト
 * @param res レスポンス
 */
export const CardsHandler = async (req: Request, res: Response) => {
  await queryToCsv(`SELECT * From Tags`, 'TagReport');
  res.send('レポートCSVを作成しました');
};
