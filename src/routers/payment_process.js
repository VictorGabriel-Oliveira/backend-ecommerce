const express = require('express')
const preference = require('../preference')
const mercadopago = require('mercadopago')

const router = express.Router()

const TOKEN = process.env.PRODUCTION_ACCESS_TOKEN

mercadopago.configurations.setAccessToken(TOKEN)

router.post("/process_payment", (req, res) => {
    mercadopago.preferences.create(preference).then(response=>{
        res.send({
         redirect_url:response.response.sandbox_init_point
        })  
    }).catch(function(error){
       console.log(error);
    });
     
})

module.exports = router