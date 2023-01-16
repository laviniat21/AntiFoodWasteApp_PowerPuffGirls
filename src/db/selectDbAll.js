import sqlite3 from 'sqlite3'
import{
    sqlSelectFromUsers,
    sqlSelectFromProduse,
    sqlSelectFromCos,
    sqlSelectFromRandCos
} from './queries.js';

const db = new sqlite3.Database("./user.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
  });

  db.all(sqlSelectFromUsers, [], (err, rows) => {
      if (err) return console.error(err.message);
      rows.forEach((row) => {
        console.log(row);
      });
    });

    db.all(sqlSelectFromProduse, [], (err, rows) => {
        if (err) return console.error(err.message);
        rows.forEach((row) => {
          console.log(row);
        });
      });

      db.all(sqlSelectFromCos, [], (err, rows) => {
        if (err) return console.error(err.message);
        rows.forEach((row) => {
          console.log(row);
        });
      });

      db.all(sqlSelectFromRandCos, [], (err, rows) => {
        if (err) return console.error(err.message);
        rows.forEach((row) => {
          console.log(row);
        });
      });

