require('dotenv').config({path: __dirname + '/../.env'});

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

const riderModel = require('./Riders');

const Rider = riderModel(db, DataTypes);

const task = async () => {
    try {
        await db.sync({alter: true})

        //Insert a Rider
        for (let i=0; i<50; i++) {
            await Rider.create({
                firstname: (['Mickey','Dora','Tenny','Matty','Julie','Ruth','Harry','Kate','Denny','Mitch'])[parseInt(Math.random()*10)],
                lastname: (['Mickey','Dora','Tenny','Matty','Julie','Ruth','Harry','Kate','Denny','Mitch'])[parseInt(Math.random()*10)],
                email: (['Mickey@test.tes','Dora@test.tes','Tenny@test.tes','Matty@test.tes','Julie@test.tes','Ruth@test.tes','Harry@test.tes','Kate@test.tes','Denny@test.tes','Mitch@test.tes'])[parseInt(Math.random()*10)],
                mobile: (['0409536789','0409536790','0409536791','0409536792','0409536793','0409536794','0409536795','0409536796','0409536797','0409536798'])[parseInt(Math.random()*10)]
            })
        }
    } catch (exception) {
        console.error(exception)
    }
}

//task();

/** 
db.sync({alter: true})
    .then(() => console.log('Database synced'))
    .catch(console.error)
*/

module.exports = {db, Rider};