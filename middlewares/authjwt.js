const jwt = require(`jsonwebtoken`);
const secretKey = require(`../config`);
const User = require(`../models/userModel`);

const verifyToken = async (req, res, next) => {
  const token = req.headers[`x-access-token`];
  try {

    if (!token || token == undefined) {
      res.json({ message: `no token provider` });
    }
    const decoded = jwt.verify(token, secretKey.SECRET);


    req.userId = decoded.id;

    const user = await User.findById(req.userId, { password: 0 });
    if (!user) return res.json(`no user found`);

    next();
  } catch (error) {
    return res.status(401).json({ message: `unauthorize` });
  }
};

module.exports = verifyToken;
