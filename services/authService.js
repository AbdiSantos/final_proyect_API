const User = require(`../models/userModel`);
const jwt = require(`jsonwebtoken`);
const secretKey = require(`../config`);
const Role = require('../models/roleModel');

class AuthService {
  async signUp(newUser) {
    const nuevoUser = new User(newUser);

    const saveUser = await nuevoUser.save();
    const token = jwt.sign({ id: saveUser._id }, secretKey.SECRET, {
      expiresIn: 86400,
    });

    console.log(saveUser);
    return token;
  }

  async signIn(UserEmail, userPassword) {
    const userFound = await User.findOne({ email: UserEmail }).populate("roles");
    const matchPassword = await User.comparePassword(userPassword, userFound.password)
    if (!userFound) return ({message:`user not Found`});

    if (!matchPassword) return ({message:`invalid password`, token: null});

const token = jwt.sign({id:userFound._id}, secretKey.SECRET,{expiresIn: 86400})
const userN ={userName: userFound.username,email:userFound.email, roles: userFound.roles, token:token}
      console.log(userFound);
      return (userN);



  }
}

module.exports = AuthService;
