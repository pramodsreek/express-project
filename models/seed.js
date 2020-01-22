const {db, Rider, RiderPreference, AppPartner, Product, ProductAppPartner} = require('./models')


const seed = async () => {

    try {

        db.sync();

        /** 
        //ignore duplicates will ignore if there are duplicate records and continue instead of interupting
        await RiderPreference.bulkCreate([
            {riderId: 1, tollRoadPreferred: 1, shortDurationPreferred: 1},
            {riderId: 2, tollRoadPreferred: 0, shortDurationPreferred: 1},
            {riderId: 3, tollRoadPreferred: 1, shortDurationPreferred: 0},
            {riderId: 4, tollRoadPreferred: 0, shortDurationPreferred: 1},
            {riderId: 5, tollRoadPreferred: 1, shortDurationPreferred: 0}
        ], {
            ignoreDuplicates: true
        })

        await Product.bulkCreate([
            {productName: 'SmallCar', capacity: 3, basePrice: 1.50, minimumPrice: 5.00, costPerMinute: 0.05, costPerDistance: 1.05, serviceFees: 2.70},
            {productName: 'MediumCar', capacity: 5, basePrice: 1.50, minimumPrice: 5.00, costPerMinute: 0.05, costPerDistance: 1.05, serviceFees: 2.70},
            {productName: 'LargeCar', capacity: 7, basePrice: 1.50, minimumPrice: 5.00, costPerMinute: 0.05, costPerDistance: 1.05, serviceFees: 2.70},
            {productName: 'SmallBus', capacity: 10, basePrice: 1.50, minimumPrice: 5.00, costPerMinute: 0.05, costPerDistance: 1.05, serviceFees: 2.70},
            {productName: 'MediumBus', capacity: 15, basePrice: 1.50, minimumPrice: 5.00, costPerMinute: 0.05, costPerDistance: 1.05, serviceFees: 2.70},
            {productName: 'LargeBus', capacity: 20, basePrice: 1.50, minimumPrice: 5.00, costPerMinute: 0.05, costPerDistance: 1.05, serviceFees: 2.70},
            {productName: 'SmallCarWithBabySeat', capacity: 2, basePrice: 1.50, minimumPrice: 5.00, costPerMinute: 0.05, costPerDistance: 1.05, serviceFees: 2.70},
            {productName: 'MediumCarWithBabySeat', capacity: 4, basePrice: 1.50, minimumPrice: 5.00, costPerMinute: 0.05, costPerDistance: 1.05, serviceFees: 2.70},
            {productName: 'LargeCarWithBabySeat', capacity: 6, basePrice: 1.50, minimumPrice: 5.00, costPerMinute: 0.05, costPerDistance: 1.05, serviceFees: 2.70},
            {productName: 'SmallFlyingTaxi', capacity: 3, basePrice: 1.50, minimumPrice: 5.00, costPerMinute: 0.05, costPerDistance: 1.05, serviceFees: 2.70},
            {productName: 'LargeFlyingTaxi', capacity: 5, basePrice: 1.50, minimumPrice: 5.00, costPerMinute: 0.05, costPerDistance: 1.05, serviceFees: 2.70}
        ], {
            ignoreDuplicates: true
        })

        await AppPartner.bulkCreate([
            {appPartnerName: 'StateTransport', isGlobalAppPartner: 0, revenueSharing: 1, revenueSharePercentage: 18},
            {appPartnerName: 'BrayHound', isGlobalAppPartner: 1, revenueSharing: 1, revenueSharePercentage: 20},
            {appPartnerName: 'Hasseys', isGlobalAppPartner: 0, revenueSharing: 1, revenueSharePercentage: 30},
            {appPartnerName: 'Cooks', isGlobalAppPartner: 1, revenueSharing: 0, revenueSharePercentage: 0},
            {appPartnerName: 'TapOn', isGlobalAppPartner: 0, revenueSharing: 1, revenueSharePercentage: 19}
        ], {
            ignoreDuplicates: true
        })
*/
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

        
        
    } catch (error) {
        console.error(error);
    }
}

seed();