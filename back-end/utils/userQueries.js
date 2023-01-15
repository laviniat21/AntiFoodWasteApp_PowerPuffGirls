let creeareTabelUser= `create table USERS (numeUtilizator string primary key , nume String not null, mail String not null, parola String not null, numarTelefon string not null)`;
const creeareUser=`insert into users(numeUtilizator, nume, mail,parola,numarTelefon) values (?,?,?,?,?)`;
const audentificareNumeUser=`select numeUtilizator from user where numeUtilizator=?`;
const audentificareParolaUser=`select parola from user where numeUtilizator=? and parola=?`;

export{
    creeareTabelUser,
    creeareUser,
    audentificareNumeUser,
    audentificareParolaUser
};