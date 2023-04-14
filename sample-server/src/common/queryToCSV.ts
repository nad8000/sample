import fs from 'fs';
import db from '../../DatabaseManager';

/**
 * クエリをCSV形式で保存
 * @param query
 * @param fileName
 */
async function queryToCSV(query: string, fileName: string) {
  try {
    // クエリ実行
    const result: any[] = await db.fetchRows(query);

    // ヘッダをCSVに変換
    const headers = Object.keys(result[0]);
    const csvHeaders = headers.map((header) => `"${header}"`).join(',');

    // データをCSVに変換
    const rows = result.map((row) => {
      return Object.values(row)
        .map((value) => `"${value}"`)
        .join(',');
    });

    const csvContent = [csvHeaders, ...rows].join('\n');

    // CSVをエクセルで開きたいのでBOMをつける(TODO:文字化けなんとかしたい)
    const BOM = '\ufeff';
    fs.writeFileSync(`${fileName}.csv`, BOM + csvContent);

    console.log(`CSVファイルに出力しました: ${fileName}.csv`);
  } catch (err) {
    console.error(`queryToCSV:`, err);
  } finally {
    await db.close();
  }
}

export default queryToCSV;
