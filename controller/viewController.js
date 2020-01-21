let bodyParser = require('body-parser');


// create application/x-www-form-urlencoded parser
let urlencodedParser = bodyParser.urlencoded({ extended: false })

// create application/json parser
let jsonParser = bodyParser.json()

module.exports = function (app){

    app.get('/', function(req, res){
        // res.send('<html><head><link href=resources/style.css type=text/css rel=stylesheet></head><body><h1>Hello Express!</h1></body></html>');
        res.render('index');
    });

    app.get('/rider/:id', function(req, res){
        //res.send('<html><head></head><body><h1>' + 'Rider:' + req.params.id + '</h1></body></html>');
        res.render('rider', {ID: req.params.id, QSTR: req.query.qstr});
    });

    app.post('/rider', urlencodedParser, function(req, res){
        res.send('Thanks Express!');
        console.log(req.body.firstname);
        console.log(req.body.lastname);
    });


    app.post('/riderjson', jsonParser, function(req, res){
        res.send('Thanks Express for JSON!');
        console.log(req.body.firstname);
        console.log(req.body.lastname);
    });
    

    app.get('/api', function(req, res){
        res.json({ firstname: 'John', lastname: 'Smith'});
    });
}


