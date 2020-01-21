require('dotenv').config({path: __dirname + '/.env'});

const user = process.env['USERNAME'];
const password = process.env['PASSWORD'];
const schema = process.env['DATABASE'];
const host = process.env['HOST'];

let SequelizeAuto = require('sequelize-auto-v3')
let auto = new SequelizeAuto(schema, user, password, {
    host: host,
    dialect: 'mysql'
});
 
auto.run(function (err) {
  if (err) throw err;
 
  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});
