const express = require('express');
const path = require('path');
const {db, Rider, RiderPreference, AppPartner, Product, ProductAppPartner} = require('./models/models')

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.resolve(__dirname, './views'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/partner', async (req, res) => {

    try {
        const appPartners = await AppPartner.findAll();
        const products = await Product.findAll();
        const productAppPartners = await ProductAppPartner.findAll();
        const riders = await Rider.findAll();
        const riderPreferences = await RiderPreference.findAll(); 
        
        res.render('apppartner', {
            appPartners, products, productAppPartners, riders, riderPreferences
        });

    } catch (error) {
        console.error(error);
    }
    
    


})

app.post('/partner', async (req, res) => {
    
    try {
        console.log("partner", req.body.partner);
        console.log("product", req.body.product);
        console.log("unique number", req.body.uniqueno);
        console.log("tdate", req.body.tdate);

        const partnerapp = await ProductAppPartner.create({
            productId: req.body.product,
            appPartnerId: req.body.partner
        });

        console.log("successfully posted" + Date.parse(partnerapp.createdAt));

        res.send("successfully posted" + partnerapp.createdAt);
    } catch (error) {
        
        console.log(error);
        res.send(error);
    }
    
    
})

app.get('/products', async (req, res) => {
    try {
        const products = await Product.findAll();
        res.render('products', {products});
    } catch (error) {
        console.log(error);
    }
} 
)

module.exports = {
    app
}