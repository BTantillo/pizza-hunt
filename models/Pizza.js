const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema({ 
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        deafult: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: []
})

//create the Pizza model using PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

module.exports = Pizza;