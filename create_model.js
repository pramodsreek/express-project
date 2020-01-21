require('dotenv').config({path: __dirname + '/.env'});

const user = process.env['USERNAME'];
const password = process.env['PASSWORD'];
const schema = process.env['DATABASE'];
const host = process.env['HOST'];

const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const db = new Sequelize(schema, user, password, {
    host: host,
    dialect: 'mysql'
});

const task = async () => {
    try {
        
    } catch (error) {
        console.error(error);
    }
}

