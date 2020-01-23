//const {db, Rider, RiderPreference, AppPartner, Product, ProductAppPartner} = require('./models/models')

const {app} = require('./analytics_server')

const start = async () => {

    try {
        
        //await db.sync();

        app.listen(3031, () => {
            console.log('Server started - http://localhost:3031');
        })

    } catch (error) {
        console.error(error);
    }
    
}

start();