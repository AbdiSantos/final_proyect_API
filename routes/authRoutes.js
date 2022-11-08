const express = require(`express`);
const router = express.Router();
const AuthService = require(`../services/authService`);
const User = require(`../models/userModel`);
const Role = require('../models/roleModel');
const service = new AuthService();
const checkDuplicateUser = require(`../middlewares/checkUser`)

router.post('/signup',checkDuplicateUser, async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;

    const newUser = new User({
      username,
      email,
      password: await User.encryptPassword(password),
    });
    if (roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: `user` });
      newUser.roles = [role._id];
    }

    const sign = await service.signUp(newUser);

    res.json(sign);
  } catch (error) {
    console.log(error);
  }
});

router.post('/signin', async (req, res) => {
  try {

    const userEmail = req.body.email
    const userPassword = req.body.password
    const siging =  await service.signIn(userEmail, userPassword)
    console.log(siging)
    res.json(siging)

  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
