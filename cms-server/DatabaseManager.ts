import database from './Database';

export default class DatabaseManager {
  /**
   * クエリ結果を配列に格納する
   *
   * @param query SQL
   * @returns 結果配列
   */
  static fetchRows(query: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      database.all(query, (err: Error | null, rows: any[]) => {
        if (err) {
          console.error(err.message);
          reject(err);
          return;
        }
        resolve(rows);
      });
    });
  }

  //TODO:ロールバック、トランザクションもほしい

  /**
   * データベースを閉じる
   */
  static close(): void {
    database.close();
  }
}
