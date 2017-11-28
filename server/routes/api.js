const express       = require('express');
const router        = express.Router();
const ClientsDAO    = require('../dao/clients.dao');
const ProductsDAO   = require('../dao/products.dao');
const SalesDAO      = require('../dao/sales.dao');
const UserDAO      = require('../dao/user.dao');
const passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const db = require('../database/mongo');


passport.use(new LocalStrategy({    
  passReqToCallback: true  
},   function(req, username, password, done) {     // check in mongo if a user with username exists or not
  console.log("passportlo", username);
  db.find("user", {
    email: username
  }).then(function(data) {
    if (data.body) {
      if (password == data.body[0].password) {
        console.log('bien');
        return done(null, data.body);   
      } else {
        console.log('mal');
        return done(null, false); 
      }                    
    } else {
      return done(null, false); 
    }
    res.json(data);
  }).catch(function(error) {
    res.json(error);
  });
}));

 
router.all('*', function(req, res, next) {  
  console.log("[api]", req.method, req.url);  
  next();
}); 
router.get('/api/hola', function(req, res) {  
  res.send("hola mundo");
}); 
router.get('/api/holajson', function(req, res) {  
  res.json({
    result: "hola json",
    data: "este es un formato JSON"
  });
}); 
router.get('/api/hola/:name', function(req, res) {  
  var name  = req.params.name;  
  res.send("hola " +  name);
});

// Users
router.get('/api/clients', ClientsDAO.find);
router.post('/api/clients', ClientsDAO.insertOne);
router.put('/api/clients', ClientsDAO.updateOne);
router.delete('/api/clients/:id', ClientsDAO.deleteOne);
router.get('/api/client/:name', ClientsDAO.findbyname); 
// Products
router.get('/api/products', ProductsDAO.find);
router.post('/api/products', ProductsDAO.insertOne);
router.put('/api/products', ProductsDAO.updateOne);
router.delete('/api/products/:id', ProductsDAO.deleteOne);
router.get('/api/product/:name', ProductsDAO.findbyname); 
// Sales
router.get('/api/sales', SalesDAO.find);
router.post('/api/sales', SalesDAO.insertOne);
router.put('/api/sales', SalesDAO.updateOne);
router.delete('/api/sales/:id', SalesDAO.deleteOne);


//Users
router.get('/api/user/:email', UserDAO.findByEmail);
router.get('/api/user/:id', UserDAO.findByID);
router.post('/api/login', function(req, res, next) {
  passport.authenticate('local', function(error, user, info) {
      console.log('hooiuu', error, user, info);
      if (user) {
        res.json({
          result: 'success',
          body: user
        });
      } else {
        res.json({
          result: 'failure',
          error: error
        });
      }
    })(req, res, next)
});

module.exports = router;
