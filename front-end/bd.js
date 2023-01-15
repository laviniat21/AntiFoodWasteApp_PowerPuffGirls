// import{
//     creeareTabelUser,
//     creeareUser,
//     audentificareNumeUser,
//     audentificareParolaUser
// } from "../back-end/utils/userQueries"

// let { creeareTabelUser } = require('../back-end/utils/userQueries');


import sqlite3 from "sqlite3";

// const sqlite3 = require('sqlite3').verbose()
// let sql;

const db = new sqlite3.Database('./user.db', sqlite3.OPEN_READWRITE, (err) => {
    if(err) return console.error(err.message);
})


// let sql = `create table USERS (numeUtilizator string primary key , nume String not null, mail String not null, parola String not null, numarTelefon string not null)`;
// let sql = `insert into users(numeUtilizator, nume, mail,parola,numarTelefon) values (?,?,?,?,?)`;
// db.run(sql, ["adde", "adelina", "ade@gmail.com", "blabla", "0760213221"], err => {
//     if(err) return console.error(err.message);
// });

let sql = "SELECT * FROM users";
db.all(sql, [], (err, rows) => {
    if(err) return console.error(err.message);
    rows.forEach((row)=>{
        console.log(row);
    })
})

const autentificareEmailUser=`select mail from users where mail=?`;
const autentificareParolaUser=`select parola from users where mail=? and parola=?`;

export function verificare(){
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let emailUsers = db.all(autentificareEmailUser, [email.value], err => {
        if(err) return console.error(err.message);
    })

    let passwordUsers = db.all(autentificareParolaUser, [email.value, password.value], err => {
        if(err) return console.error(err.message);
    })
    if(email.value == emailUsers && password.value == passwordUsers){
        window.location.href ='incercare.html';
    }
}

