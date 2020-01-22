const {db, Rider} = require('./model');

const task = async () => {
    try {

        await db.sync();

        let riders = await Rider.findAll();

        riders.forEach(rider => console.log(
            
            `riderId: ${rider.dataValues.riderId} \t\t firstname: ${rider.dataValues.firstname} \t\t lastname: ${rider.dataValues.lastname} \t\t email: ${rider.dataValues.email} \t\t mobile: ${rider.dataValues.mobile} \t\t createdAt: ${rider.dataValues.createdAt} \t\t updatedAt: ${rider.dataValues.updatedAt} \t\t`
            ))

        //console.log(riders);
            //where: {profit: {$gt: 15}}
            // {profit: {
            //    $or: {$lt: 25, $gt:18}
            //}}

        riders = await Rider.findAll({
            where: {firstname: 'Kate'},
            order: [
                ['lastname', 'ASC']
            ]
        });

        riders.forEach(rider => console.log(
            
            `riderId: ${rider.dataValues.riderId} \t\t firstname: ${rider.dataValues.firstname} \t\t lastname: ${rider.dataValues.lastname} \t\t mobile: ${rider.dataValues.mobile} \t\t updatedAt: ${rider.dataValues.updatedAt} \t\t`
            ))

    } catch (Exception) {
        console.error(Exception);
    }
}

task();

