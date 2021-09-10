const Sequelize = require('sequelize');
const database = require('./db');

/*
 Nome do modelo de dados/tabela 
 (no singular, ele pluraliza o nome, ex: cidade, fica cidades)
 {column : {
     param: value
 }}
*/
const Produto = database.define('produto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    preco: Sequelize.DECIMAL(10,2),
    descricao: Sequelize.STRING
});

module.exports = Produto;