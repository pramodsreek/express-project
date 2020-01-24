const express = require('express');
const path = require('path');
const {db, Rider, RiderPreference, AppPartner, Product, ProductAppPartner} = require('./models/models')

const { check, validationResult } = require('express-validator');

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

app.get('/rider', async (req, res) => {

    try {
        //const riders = await Rider.findAll();
        
        //res.render('riders', {
           // riders
        //});

        res.render('rider');

    } catch (error) {
        console.error(error);
    }
    
    


})


app.post('/rider', [
    // email must be valid
    check('email').isEmail(),
    // lastname must be at least 5 chars long
    check('lastname').isLength({ min: 5 })
  ], async (req, res) => {
    
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    try {
        console.log("firstname", req.body.firstname);
        console.log("lastname", req.body.lastname);
        console.log("email", req.body.email);
        console.log("mobile", req.body.mobile);


        await Rider.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            mobile: req.body.mobile,
            score: req.body.score
        }).then(rider => res.json(rider));

    } catch (error) {
        
        console.log(error);
        res.send(error);
    }
    
    
})

app.get('/riders', async (req, res) => {
//export all data
    try {
        const riders = await Rider.findAll();
        
        //res.render('riders', {
           // riders
        //});

        res.json(riders);

    } catch (error) {
        console.error(error);
    }

})

app.get('/riders/:id', async (req, res) => {
    //export all data
        try {
            const riderId = req.params.id;
            const rider = await Rider.findByPk(riderId);
            
            //res.render('riders', {
               // riders
            //});
    
            res.json(rider);
    
        } catch (error) {
            console.error(error);
        }
    
    })

app.delete('/riders/:id', async (req, res) => {
        //export all data
            try {
                const riderId = req.params.id;
                const rider = await Rider.findByPk(riderId);
                
                console.log(rider);

                const number_of_deleted_rows = await Rider.destroy({
                    where: {
                        riderId: riderId
                    },
                    force: true
                  });

                res.json("deleted");
        

            } catch (error) {
                console.error(error);
                res.json(error);
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