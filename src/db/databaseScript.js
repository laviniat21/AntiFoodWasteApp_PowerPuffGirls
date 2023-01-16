// import sqlite3 from "sqlite3";
// import{
//     sqlCreareUsers,
//     sqlCreareFrigider,
//     sqlCreareProdus,
//     sqlCreareCos,
//     sqlCreareRandCos
// } from './queries.js';


// const db = new sqlite3.Database("./user.db", sqlite3.OPEN_READWRITE, (err) => {
//   if (err) return console.error(err.message);
// });

// db.run(sql, ["adde", "adelina", "ade@gmail.com", "blabla", "0760213221"], err => {
//     if(err) return console.error(err.message);
// });

//adaugare Bd

//db.run(sqlCreareUsers, (err) => {
//   if (err)
//     return console.error(
//       err.message + " ----------------------------------FRIGIDER"
//     );
// });
//db.run(sqlCreareFrigider, (err) => {
//   if (err)
//     return console.error(
//       err.message + " ----------------------------------FRIGIDER"
//     );
// });

// db.run(sqlCreareProdus, (err) => {
//   if (err)
//     return console.error(
//       err.message + " ----------------------------------PRODUS"
//     );
// });
//   db.run(sqlCreareCos, (err) => {
//     if (err)
//       return console.error(
//         err.message + " ---------------------------------- COS"
//       );
//   });
// db.run(sqlCreareRandCos, (err) => {
//   if (err)
//     return console.error(
//       err.message + " ----------------------------------RAND COS"
//     );
// });


// const autentificareEmailUser = `select mail from users where mail=?`;
// const autentificareParolaUser = `select parola from users where mail=? and parola=?`;

// export function verificare() {
//   let email = document.getElementById("email");
//   let password = document.getElementById("password");
//   let emailUsers = db.all(autentificareEmailUser, [email.value], (err) => {
//     if (err) return console.error(err.message);
//   });

//   let passwordUsers = db.all(
//     autentificareParolaUser,
//     [email.value, password.value],
//     (err) => {
//       if (err) return console.error(err.message);
//     }
//   );
//   if (email.value == emailUsers && password.value == passwordUsers) {
//     window.location.href = "incercare.html";
//   }
// }