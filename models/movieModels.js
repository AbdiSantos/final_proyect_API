
const mongoose = require(`mongoose`);

const schema = mongoose.Schema;

const mySchemaMovie = new schema({
name: String,
price: Number,
estreno: Number,
image:String,
horarios:Array
},
{
  versionKey: false // You should be aware of the outcome after set to false
})

const Movie = mongoose.model(`movie`,mySchemaMovie)

module.exports= Movie
