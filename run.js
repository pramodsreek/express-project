const {app} = require('./controller/server')
require('dotenv').config({path: __dirname + '/.env'})

let port = process.env['PORT'] || 3035; //default value is 3035

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