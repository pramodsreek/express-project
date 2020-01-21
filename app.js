let express = require('express');
let mysql = require('mysql');

require('dotenv').config({path: __dirname + '/.env'})

const user = process.env['USERNAME'];
const password = process.env['PASSWORD'];
const schema = process.env['DATABASE'];
const host = process.env['HOST'];

let app = express();

let viewController = require('./controller/viewController');

console.log("PORT = ", process.env['PORT']);

let port = process.env['PORT'] || 3000; //default value is 3000



//middleware
app.use('/resources', express.static('public'));

app.set('view engine', 'ejs');



app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);

    let connection = mysql.createConnection({
        host     : host,
        user     : user,
        password : password,
        database : schema
      });

    connection.connect();
 
    connection.query ('SELECT rider.rider_id, rider.firstname, rider.lastname, \
                        rider.email, rider.mobile, \
                        rider.createdAt, rider.updatedAt \
                        from Riders rider', function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results);
            console.log('the firstname on row 1', results[0].firstname)
    });
 
    connection.end();


    next(); //call the next middelewate that is get
})

viewController(app);


app.listen(port);


