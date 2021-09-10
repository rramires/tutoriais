const Sequelize = require('sequelize');

/**
 * Nome do banco
 * Usuario
 * Senha
 * Banco
 * > options
 *  Dialect 'mysql'
 *  Host 'localhost'
 *  Port 3306 - Opcional
 */
const sequelize = new Sequelize('crud_sequelize',
                                'root',
                                '&ra2001!',
                                {
                                    dialect: 'mysql',
                                    host: 'localhost'
                                });

module.exports = sequelize;

