const express = require('express')

const router = express.Router()

router.get('/success_payment',(req,res)=>{
    res.send('pagamento concluido')
})

router.get('/pending_payment',(req,res)=>{
    res.send('pedido pendente')
})

router.get('/failure_payment',(req,res)=>{
    res.send('Ocorreu um erro')
})

module.exports = router