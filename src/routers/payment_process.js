const express = require('express')
const preference = require('../preference')
const router = express.Router()

router.post("/process_payment", (req, res) => {
    
    mercadopago.preferences.create(preference)
    .then(function(response){
        res.send({
         redirect_url:response.response.sandbox_init_point
    })
       
    }).catch(function(error){
       console.log(error);
    });
     
})

module.exports = router