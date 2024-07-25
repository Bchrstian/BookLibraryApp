// // types/expo-sqlite.d.ts
// declare module "expo-sqlite" {
//   export interface SQLiteTransaction {
//     executeSql(
//       sql: string,
//       params: any[],
//       successCallback?: (
//         tx: SQLiteTransaction,
//         result: SQLiteResultSet
//       ) => void,
//       errorCallback?: (tx: SQLiteTransaction, error: SQLiteError) => boolean
//     ): void;
//   }

//   export interface SQLiteResultSet {
//     rows: {
//       _array: any[];
//     };
//   }

//   export interface SQLiteError extends Error {}

//   export class SQLiteDatabase {
//     transaction(
//       callback: (tx: SQLiteTransaction) => void,
//       errorCallback?: (error: SQLiteError) => boolean
//     ): void;
//   }

//   export function openDatabase(
//     name: string,
//     version?: string,
//     description?: string,
//     size?: number
//   ): SQLiteDatabase;
// }
