const preference = {
    notification_url:'https://webhook.site/8c5336fb-c92b-4ee6-80ef-e5fa1bb80945',
    back_urls:{
      success:'https://localhost:4000/success_payment',
      failure:'https://localhost:4000/failure_payment',
      pending:'https://localhost:4000/pending_payment'
    },
    items: [
      {
        title: 'comprando nada k',
        unit_price:5,
        quantity: 1,
      }
    ]
};

module.exports = preference