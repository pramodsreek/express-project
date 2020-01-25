const {app} = require('./controller/analytics_server')
require('dotenv').config({path: __dirname + '/.env'})

let port = process.env['PORT_ANALYTICS'] || 3031; //default value is 3031

const start = async () => {

    try {
        
        //await db.sync();

        app.listen(port, () => {
            console.log('Server started - http://localhost:'+port);
        })

    } catch (error) {
        console.error(error);
    }
    
}

start();