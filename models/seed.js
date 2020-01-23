const {db, Rider, RiderPreference, AppPartner, Product, ProductAppPartner} = require('./models')


const seed = async () => {

    try {

        //db.sync();

 /**       
        //ignore duplicates will ignore if there are duplicate records and continue instead of interupting
        await RiderPreference.bulkCreate([
            {riderId: 6, tollRoadPreferred: 1, shortDurationPreferred: 1},
            {riderId: 7, tollRoadPreferred: 0, shortDurationPreferred: 1},
            {riderId: 8, tollRoadPreferred: 1, shortDurationPreferred: 0},
            {riderId: 9, tollRoadPreferred: 0, shortDurationPreferred: 1},
            {riderId: 10, tollRoadPreferred: 1, shortDurationPreferred: 0}
        ], {
            ignoreDuplicates: true
        })
 
        await Product.bulkCreate([
            {productName: 'SmallCar20', capacity: 3, basePrice: 1.50, minimumPrice: 15.00, costPerMinute: 0.05, costPerDistance: 1.05, serviceFees: 2.70},
            {productName: 'MediumCar20', capacity: 5, basePrice: 1.50, minimumPrice: 15.00, costPerMinute: 0.05, costPerDistance: 1.05, serviceFees: 2.70},
            {productName: 'LargeCar20', capacity: 7, basePrice: 1.50, minimumPrice: 15.00, costPerMinute: 0.05, costPerDistance: 1.05, serviceFees: 2.70},
            {productName: 'SmallBus20', capacity: 10, basePrice: 1.50, minimumPrice: 15.00, costPerMinute: 0.05, costPerDistance: 1.05, serviceFees: 2.70},
            {productName: 'MediumBus20', capacity: 15, basePrice: 1.50, minimumPrice: 15.00, costPerMinute: 0.05, costPerDistance: 1.05, serviceFees: 2.70},
            {productName: 'LargeBus20', capacity: 20, basePrice: 1.50, minimumPrice: 15.00, costPerMinute: 0.05, costPerDistance: 1.05, serviceFees: 2.70},
            {productName: 'SmallCarWithBabySeat20', capacity: 2, basePrice: 1.50, minimumPrice: 15.00, costPerMinute: 0.05, costPerDistance: 1.05, serviceFees: 2.70},
            {productName: 'MediumCarWithBabySeat20', capacity: 4, basePrice: 1.50, minimumPrice: 25.00, costPerMinute: 0.05, costPerDistance: 1.05, serviceFees: 2.70},
            {productName: 'LargeCarWithBabySeat20', capacity: 6, basePrice: 1.50, minimumPrice: 25.00, costPerMinute: 0.05, costPerDistance: 1.05, serviceFees: 2.70},
            {productName: 'SmallFlyingTaxi20', capacity: 3, basePrice: 1.50, minimumPrice: 25.00, costPerMinute: 0.05, costPerDistance: 1.05, serviceFees: 2.70},
            {productName: 'LargeFlyingTaxi20', capacity: 5, basePrice: 1.50, minimumPrice: 25.00, costPerMinute: 0.05, costPerDistance: 1.05, serviceFees: 2.70}
        ], {
            ignoreDuplicates: true
        })
*/
        await AppPartner.bulkCreate([
            {appPartnerName: 'StateTransport20', isGlobalAppPartner: 0, revenueSharing: 1, revenueSharePercentage: 50},
            {appPartnerName: 'BrayHound20', isGlobalAppPartner: 1, revenueSharing: 1, revenueSharePercentage: 50},
            {appPartnerName: 'Hasseys20', isGlobalAppPartner: 0, revenueSharing: 1, revenueSharePercentage: 50},
            {appPartnerName: 'Cooks20', isGlobalAppPartner: 1, revenueSharing: 1, revenueSharePercentage: 50},
            {appPartnerName: 'TapOn20', isGlobalAppPartner: 0, revenueSharing: 1, revenueSharePercentage: 50},
            {appPartnerName: 'StateTransport30', isGlobalAppPartner: 0, revenueSharing: 1, revenueSharePercentage: 50},
            {appPartnerName: 'BrayHound30', isGlobalAppPartner: 1, revenueSharing: 1, revenueSharePercentage: 50},
            {appPartnerName: 'Hasseys30', isGlobalAppPartner: 0, revenueSharing: 1, revenueSharePercentage: 50},
            {appPartnerName: 'Cooks30', isGlobalAppPartner: 1, revenueSharing: 1, revenueSharePercentage: 50},
            {appPartnerName: 'TapOn30', isGlobalAppPartner: 0, revenueSharing: 1, revenueSharePercentage: 50}
        ], {
            ignoreDuplicates: true
        })

        /** 
        await ProductAppPartner.bulkCreate([
            {productId: 1, appPartnerId: 1},
            {productId: 2, appPartnerId: 1},
            {productId: 3, appPartnerId: 1},
            {productId: 4, appPartnerId: 1},
            {productId: 5, appPartnerId: 1},
            {productId: 6, appPartnerId: 2},
            {productId: 7, appPartnerId: 2},
            {productId: 8, appPartnerId: 2}
        ], {
            ignoreDuplicates: true
        })
*/
        
        
    } catch (error) {
        console.error(error);
    }
}

seed();