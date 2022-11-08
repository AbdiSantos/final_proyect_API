const mongoose = require(`mongoose`);

const schema = mongoose.Schema;

const mySchemaRole = new schema(
  {
    name: String,
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  }
);

const Role = mongoose.model(`role`, mySchemaRole);

module.exports = Role;
