const User = require('../models/userModel');

const checkDuplicateUser = async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username });

  if (user) {
    return res.status(400).json({ message: `user already exists` });
  }

  const email = await User.findOne({ email: req.body.email });
  if (email) {
    return res.status(400).json({ message: `email already exists` });
  }

  next();
};

module.exports = checkDuplicateUser;
