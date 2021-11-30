const sequelize = require("sequelize");

const dbConfig = require("../config/config.js"); 

const Cadastro = require("../model/Cadastro");


const conexao = new sequelize (dbConfig);

Cadastro.init(conexao);


module.exports = conexao;