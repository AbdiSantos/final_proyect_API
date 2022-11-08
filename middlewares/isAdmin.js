const User = require(`../models/userModel`)
const Role =  require(`../models/roleModel`)

const isModerator = async (req, res, next) => {
  const user = await User.findById(req.userId);
  const roles = await Role.find({ _id: {$in: user.roles } });

  for (let index = 0; index < roles.length; index++) {
   if(roles[index].name =="admin"){next()
    return;
  }


  }
    return res.status(403).json({messge:"require moderator role"})
};

module.exports = isModerator;
