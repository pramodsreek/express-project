//const {db, Rider, RiderPreference, AppPartner, Product, ProductAppPartner} = require('./models/models')

const {app} = require('./server')

const start = async () => {

    try {
        
        //await db.sync();

        app.listen(3030, () => {
            console.log('Server started - http://localhost:3030');
        })

    } catch (error) {
        console.error(error);
    }
    
}

start();