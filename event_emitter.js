const eventEmitter = require('events')
const order = new eventEmitter()
order.on('OrderPlaced', () => {

    console.log("Food has been ordered send sms")
})
// send sms is observer , event is order placed, order is subject 

order.on('OrderPlaced', () => {
    console.log('Food has been ordered, send an email')
})

order.emit("OrderPlaced")