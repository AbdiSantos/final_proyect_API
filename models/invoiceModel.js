const mongoose = require(`mongoose`);

const schema = mongoose.Schema;

const mySchemaInvoice = new schema({
nombre: String,
total: Number,
reservas: Array,
pelicula:String,
horario:String
},
{
  versionKey: false // You should be aware of the outcome after set to false
})

const Invoice = mongoose.model(`invoice`,mySchemaInvoice)

module.exports= Invoice
