const Roles=require(`../roles`)

const checkRoles=(req ,res,next)=>{
    if(req.body.roles){for (let index = 0; index < req.body.roles.length; index++) {
        if(!Roles.includes(req.body.roles[index])){res.json({message:`role not existing`})}


    }}

    next();
}

module.exports = checkRoles;
