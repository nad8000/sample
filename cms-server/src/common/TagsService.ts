import fs from 'fs';
import db from '../../DatabaseManager';

/**
 * タグ
 * 
 * @param req
 */
async function TagsService(req: object) {
  try {
    // if (req.tagId == null) {
    //   throw Error('タグIDがありません');
    // } 

    // クエリ実行
    const query = '';
    const result: any[] = await db.fetchRows(query);

    return result;
  } catch (err) {
    console.error(`TagsService:`, err);
  } finally {
    await db.close();
  }
}

export default TagsService;
