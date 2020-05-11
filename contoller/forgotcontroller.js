const Userdata=require('../models/userdata')

exports.forgot_password=(req,res,next) => {

    console.log(req.body);  
    console.log('forgot password'); 

    const user = Userdata.fetchAll();    

    for(let val of user){

        console.log(val);
        console.log(user.body);

        if(  val.email == req.body.emaill){

           console.log('Your Password is :: '+val.pass);
           return res.redirect("/login");

        }
    }
    console.log("Invalid Email");
    return res.redirect("/forgot_password");
    
};


