const {Model, DataTypes} = require("sequelize");

class Cadastro extends Model {
    static init(sequelize){
        super.init(
            {
                nome: DataTypes.STRING,
                sobrenome: DataTypes.STRING,
                endereco: DataTypes.STRING,
                nascimento: DataTypes.STRING,
                email: DataTypes.STRING,
                senha: DataTypes.STRING,
                foto: DataTypes.STRING,

            }, {sequelize, freezeTableName: true },
        );
    }
}

module.exports = Cadastro;