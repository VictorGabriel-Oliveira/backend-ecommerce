const express = require('express')
const https = require('https')
const fs = require('fs')
const app = express()

const privateKey  = fs.readFileSync('./.cert/key.pem', 'utf8');
const certificate = fs.readFileSync('./.cert/cert.pem', 'utf8');
const credentials = {key: privateKey, cert: certificate};

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(4000,()=>{
  console.log('serve is running')
})