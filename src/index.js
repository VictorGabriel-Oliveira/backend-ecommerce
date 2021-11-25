const express = require('express')
const https = require('https')
const fs = require('fs')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const mercadopago = require('mercadopago')
dotenv.config()

const privateKey  = fs.readFileSync('./.cert/key.pem', 'utf8');
const certificate = fs.readFileSync('./.cert/cert.pem', 'utf8');
const credentials = {key: privateKey, cert: certificate};

const httpsServer = https.createServer(credentials, app);

app.use(cors)
app.use(express.json)

const TOKEN = process.env.PRODUCTION_ACCESS_TOKEN

mercadopago.configurations.setAccessToken(TOKEN)

httpsServer.listen(4000,()=>{
  console.log('serve is running')
})