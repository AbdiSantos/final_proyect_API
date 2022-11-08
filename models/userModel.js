const mongoose = require(`mongoose`);
const bcrypt = require(`bcryptjs`)
const schema = mongoose.Schema;

const mySchemaUser = new schema(
  {
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String, requiered: true },
    roles: [{
      ref:"role",
      type: schema.Types.ObjectId,
    }]
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  }
);
mySchemaUser.statics.encryptPassword =async (password)=>{
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}
mySchemaUser.statics.comparePassword =async (password, recivedPassword)=>{
return await bcrypt.compare (password, recivedPassword)

}

const User = mongoose.model(`user`, mySchemaUser);

module.exports = User;
