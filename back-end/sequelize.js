const {Sequelize} =require("sequelize")
const sequelize=new Sequelize ({
    dialect: "sqlite",
    storage: "../sqlite/user.db"
});

sequelize.sync({alter: true}).then(()=>{
console.log("S-au seencronizat userii ;)") 
}
);

module.exports=sequelize;