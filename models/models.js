const {db, DataTypes} = require('./connect');

const riderModel = require('./Riders');
const riderPreferencesModel = require('./RiderPreferences');
const appPartnersModel = require('./AppPartners');
const productsModel = require('./Products');
const productAppPartnersModel = require('./ProductAppPartners');

const Rider = riderModel(db, DataTypes);
const RiderPreference = riderPreferencesModel(db, DataTypes);
const AppPartner = appPartnersModel(db, DataTypes);
const Product = productsModel(db, DataTypes);
const ProductAppPartner = productAppPartnersModel(db, DataTypes);

//RiderPreference.belongsTo(Rider);
//Rider.hasOne(RiderPreference);
//AppPartner.belongsToMany(ProductAppPartner, {through: 'appPartnerId'});
//Product.belongsToMany(ProductAppPartner, {through: 'productId'});

/** 
db.sync()
    .then(() => console.log('Database synced'))
    .catch(console.error)
    */

module.exports = {db, Rider, RiderPreference, AppPartner, Product, ProductAppPartner};