const Userdata=require('../models/userdata')

// const sgMail = require('@sendgrid/mail');

const apikey = ' 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 ' ;

//sgMail.setApiKey(apikey);

//const promise =new Promise((resolve,reject) => {
    
        exports.signupsucess=(req,res,next) => {

            console.log(req.body);    
            const user = Userdata.fetchAll();

            if(req.body.password!=req.body.confirm_password && req.body.confirm_password!=req.body.password){
                console.log('Incorret Password');
                return res.redirect("/signup");
            }

            for(let val in user){

                if( val.body == req.body.username ){
                    console.log('Already you are a user')

                    return res.redirect("/signup");
                }
            }

            const usersave = new Userdata(req.body.username,req.body.email,req.body.password);
            usersave.save();
            console.log(Userdata.fetchAll());
            console.log('/*-----------------------------------*/'); 
            console.log('signup sucess');
            return res.redirect("/login");
            
        };
    
// });
// signUpsucess(() => {

//     console.log(Userdata.fetchAll());
//     signupsucess().then(then => {
//         console.log(text);
//         return signupsucess();
//     })
//     .then(text2 => {
//     const sendSignEmail = (email,username) => {

//         console.log('Mail Sented..!!!');

//         sgMail.sendMultiple

//         sgMail.send({

//             to:email,
//             from :'www.fayazahamed.com',
//             subject : 'Coinformation mail',
//             text : 'Thanks for digning up ${username}. We would be gladto know how the app work',
//             html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        
//         });
//     }
        
//     module.exports={
//         sendSignEmail : sendSignEmail
//     }
// } 