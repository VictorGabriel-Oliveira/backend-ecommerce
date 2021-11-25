const express = require('express')
const https = require('https')
const fs = require('fs')
const cors = require('cors')

const dotenv = require('dotenv')

const app = express()
const privateKey  = fs.readFileSync('./.cert/key.pem', 'utf8');
const certificate = fs.readFileSync('./.cert/cert.pem', 'utf8');
const credentials = {key: privateKey, cert: certificate};

dotenv.config()

const process_payment_route = require('./routers/payment_process')
const response_paymentStatus_routes = require('./routers/responsePaymentStatus')


app.use('/',process_payment_route)
app.use('/',response_paymentStatus_routes)

app.use(cors)
app.use(express.json)

const httpsServer = https.createServer(credentials, app);


httpsServer.listen(4000,()=>{
  console.log('serve is running')
})