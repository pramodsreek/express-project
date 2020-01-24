const {db, DataTypes} = require('./connect');

const appPartnerAndProductsModel = require('./v_app_partner_and_products');
const appPartnersWithMaxRevenueSharingModel = require('./v_app_partners_with_max_revenue_sharing');
const incorrectRiderEmailsModel = require('./v_incorrect_rider_emails');
const preferenceAnomalyModel = require('./v_preference_anomaly');
const ridersWithPreferencesModel = require('./v_riders_with_preferences');



const app_partner_and_products = appPartnerAndProductsModel(db, DataTypes);
const app_partners_with_max_revenue_sharing = appPartnersWithMaxRevenueSharingModel(db, DataTypes);
const incorrect_rider_emails = incorrectRiderEmailsModel(db, DataTypes);
const preference_anomaly = preferenceAnomalyModel(db, DataTypes);
const riders_with_preferences = ridersWithPreferencesModel(db, DataTypes);

app_partner_and_products.removeAttribute('id');
app_partners_with_max_revenue_sharing.removeAttribute('id');
incorrect_rider_emails.removeAttribute('id');
preference_anomaly.removeAttribute('id');
riders_with_preferences.removeAttribute('id');

app_partner_and_products.removeAttribute('createdAt');
app_partners_with_max_revenue_sharing.removeAttribute('createdAt');
incorrect_rider_emails.removeAttribute('createdAt');
preference_anomaly.removeAttribute('createdAt');
riders_with_preferences.removeAttribute('createdAt');

app_partner_and_products.removeAttribute('updatedAt');
app_partners_with_max_revenue_sharing.removeAttribute('updatedAt');
incorrect_rider_emails.removeAttribute('updatedAt');
preference_anomaly.removeAttribute('updatedAt');
riders_with_preferences.removeAttribute('updatedAt');

//RiderPreference.belongsTo(Rider);
//Rider.hasOne(RiderPreference);
//AppPartner.belongsToMany(ProductAppPartner, {through: 'appPartnerId'});
//Product.belongsToMany(ProductAppPartner, {through: 'productId'});

/** 
//db.sync()
    .then(() => console.log('Database synced'))
    .catch(console.error)
    */

module.exports = {app_partner_and_products, app_partners_with_max_revenue_sharing, 
    incorrect_rider_emails, preference_anomaly, riders_with_preferences};

