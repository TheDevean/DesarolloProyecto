const express 	= require('express');
const db        = require('../database/mongo');

var DAO = {
  find: function(req, res){
    db.find("products").then(function(data){
      console.log("find:");
			res.json(data);
    }).catch(function (error) {
      res.json(error);
    });
  },

  insertOne: function(req, res){
    console.log("insertOne: ", req.body);
    db.insertOne("products", req.body).then(function(data){
			res.json(data);
    }).catch(function (error) {
      res.json(error);
    });
  },

  updateOne: function(req, res){
    console.log("updateOne: body: ", req.body);
    db.updateOne("products", req.body ).then(function(data){
			res.json(data);
    }).catch(function (error) {
      res.json(error);
    });
  },

  deleteOne: function(req, res){
    console.log("deleteOne: id: ", req.params.id);
    db.deleteOne("products", req.params.id ).then(function(data){
			res.json(data);
    }).catch(function (error) {
      res.json(error);
    });
  },
  
      findbyname: function(req, res){
        console.log("find:",req.params.name);

    db.find("products", {$or: [
        {name: req.params.name},
        {brand: req.params.name},
        {provider: req.params.name},
    ]} ).then(function(data){

      console.log("find:");

			res.json(data);

    }).catch(function (error) {

      res.json(error);

    });

  }
}

module.exports = exports = DAO;
