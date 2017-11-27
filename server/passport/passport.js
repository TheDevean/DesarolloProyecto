var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var express = require('express');
var router = express.Router();

passport.use('login', new LocalStrategy({
    passReqToCallback : true
  },
  function(req, username, password, done) {
    // check in mongo if a user with username exists or not
  console.log("username",username);
  db.find("user",{email:username}).then(function(data){
    console.log("find:");
    if (data.body){
              return done(null, data.body);            
     }
    else {
        return done(null, false); 
    }
    res.json(data);
  }).catch(function (error) {
    res.json(error);
  });
}));


//}
//     User.findOne({ 'username' :  username },
//       function(err, user) {
//         // In case of any error, return using the done method
//         if (err)
//           return done(err);
//         // Username does not exist, log error & redirect back
//         if (+++){
//           return done(null, false,              
//         }
//         // User exists but wrong password, log the error
//         if (){
//           return done(null, false,
//         }
//         // User and password both match, return user from
//         // done method which will be treated like success
//         return done(null, user);
//       }
//     );
module.exports = passport = router;
