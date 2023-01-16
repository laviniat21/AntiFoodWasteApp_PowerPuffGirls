import sqlite3 from "sqlite3";
import{
    sqlAdaugareUser,
    sqlAdaugareProdus,
    sqlAdaugareCos,
    sqlAdaugareRandCos
} from './queries.js';

const db = new sqlite3.Database("./user.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
  });

db.run(sqlAdaugareUser, ["adde", "adelina", "ade@gmail.com", "blabla", "0760213221"], err => {
    if(err) return console.error(err.message);
});
