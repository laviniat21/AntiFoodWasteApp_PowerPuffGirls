//CREATE TABLE
//USERS{numeUtilizator,nume,mail,parola,numarTelefon}
let sqlCreareUsers = `create table USERS (numeUtilizator string primary key , nume String not null, mail String not null, parola String not null, numarTelefon string not null)`;
//PRODUS{id_produs,id_frigider,numeProdus,pret,data_limita,cantitate}
let sqlCreareProdus = `create table Produse (id_produs INTEGER primary key autoincrement,  id_frigider integer, numeProdus string not null, pret real not null, 
    data_limita date not null, cantitate real not null, foreign key(id_frigider) references Frigider(id_frigider) )`;
//COS{id_cos,numeUtilizator}
let sqlCreareCos = `create table Cos (id_cos INTEGER primary key autoincrement, numeUtilizator text, foreign key(numeUtilizator) references USERS(numeUtilizator))`;
//RANDCOS{id_randCos,id_cos,id_produs,cantitate,pret}
let sqlCreareRandCos = `create table RandCos (id_randCos INTEGER primary key autoincrement, id_cos INTEGER, id_produs INTEGER, cantitate real not null, pret real not null, 
    foreign key(id_cos) references Cos(id_cos), foreign key(id_produs) references Produse(id_produs))`;

//INSERT DATA
//adaugare randuri in tabele
let sqlAdaugareUser = `insert into users(numeUtilizator, nume, mail,parola,numarTelefon) values (?,?,?,?,?)`;
let sqlAdaugareCos = `insert into Cos(numeUtilizator) values (?)`;
let sqlAdaugareProdus=`insert into Produs(id_produs, id_frigider, numeProdus, pret, data_limita, cantitate) values(?,?,?,?,?,?)`;
let sqlAdaugareRandCos=`insert into (id_randCos, id_cos, id_produs, cantitate, pret) values(?,?,?,?,?)`;

//SELECT QUERIES
let sqlSelectFromUsers = "SELECT * FROM users";
let sqlSelectFromProduse = "SELECT * FROM produse";
let sqlSelectFromCos = "SELECT * FROM cos";
let sqlSelectFromRandCos = "SELECT * FROM RandCos";

//LOGIN QUERIES
let autentificareEmailUser = `select mail from users where mail=?`;
let autentificareParolaUser = `select parola from users where mail=? and parola=?`;

export{
    sqlCreareUsers,
    sqlCreareProdus,
    sqlCreareCos,
    sqlCreareRandCos,
    sqlAdaugareUser,
    sqlAdaugareCos,
    sqlAdaugareProdus,
    sqlAdaugareRandCos,
    sqlSelectFromUsers,
    sqlSelectFromProduse,
    sqlSelectFromCos,
    sqlSelectFromRandCos,
    autentificareEmailUser,
    autentificareParolaUser
};