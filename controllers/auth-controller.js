
let Employee = require('../models/user-model');

exports.login=(req, res)=>{
    Employee .findOne({EmailAdd : req.body.username})
  .then((user) => {
      console.log("user " , user);
      if(!user) {
          res.status(500).send({status: false, message : "user not found"});                
      } else {
        if(user.Password === req.body.password){
          res.status(200).json({
            message: "Successfully Logged In",
            data : {...user },
            status: {...user._doc }
    });
        }else{
            return res.status(401).json({
                message: "Invalid username and password.",
                status: false
            });
        }
          
      }
  })
}
