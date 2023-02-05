import better_sqlite3 from "better-sqlite3";

let database = null;

export default function db(path) {
  if(!database){
    database = better_sqlite3(path, {fileMustExist: true /*, verbose: console.log*/ })
  }
  return database
}