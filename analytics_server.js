const express = require('express');
const path = require('path');
const {db, app_partner_and_products, app_partners_with_max_revenue_sharing, 
    incorrect_rider_emails, preference_anomaly, riders_with_preferences} = require('./models/modelviews')

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.resolve(__dirname, './views'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/business', async (req, res) => {

    try {
        const appPartnerAndProducts = await app_partner_and_products.findAll();
        const appPartnersWithMaxRevenueSharing = await app_partners_with_max_revenue_sharing.findAll();
        
        const incorrectRiderEmails = await incorrect_rider_emails.findAll();
        const preferenceAnomaly = await preference_anomaly.findAll();
        const ridersWithPreferences = await riders_with_preferences.findAll(); 
        
        res.render('business', {
            appPartnerAndProducts, appPartnersWithMaxRevenueSharing, incorrectRiderEmails, preferenceAnomaly, ridersWithPreferences
        });

    } catch (error) {
        console.error(error);
    }
    
    


})

module.exports = {
    app
}