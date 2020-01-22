const Sequelize = require('sequelize');

require('dotenv').config({path: __dirname + '/../.env'});

console.log('path:' + __dirname + '../.env');

const user = process.env['USERNAME'];
const password = process.env['PASSWORD'];
const schema = process.env['DATABASE'];
const host = process.env['HOST'];

console.log('user=' + user + '-end');


const db = new Sequelize(schema, user, password, {
    host: host,
    dialect: 'mysql'
});

const DataTypes = Sequelize.DataTypes;

/** 
db.authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });
*/

module.exports = {db, DataTypes};