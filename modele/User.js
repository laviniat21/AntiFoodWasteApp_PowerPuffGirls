const {DataTypes}=require("sequelize");
const sequelize=require("../sequelize");


const User =sequelize.define(
    "User", 
    {
        numeUtilizator:{
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        nume:{
            type: DataTypes.STRING,
            allowNull: false
        },
        mail:{
            type: DataTypes.STRING,
            validate: {isEmail: true},
            allowNull: false
        },
        parola:{
            type: DataTypes.STRING,
            allowNull: false
        },
        numarTelefon:{ type: DataTypes.STRING,
            allowNull: false}
    }
)
module.exports=User;
