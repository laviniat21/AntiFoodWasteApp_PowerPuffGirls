import sqlite3 from "sqlite3";
import{
    sqlCreareUsers,
    sqlCreareProdus,
    sqlCreareCos,
    sqlCreareRandCos
} from './queries.js';


const db = new sqlite3.Database("./user.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);
});

db.run(sqlCreareUsers, err => {
    if(err) console.error(err.message);
})

db.run(sqlCreareProdus, err => {
    if(err) console.error(err.message);
})

db.run(sqlCreareCos, err => {
    if(err) console.error(err.message);
})

db.run(sqlCreareRandCos, err => {
    if(err) console.error(err.message);
})