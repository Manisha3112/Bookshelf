const express= require('express');
var info=require("c");
var pers=require("../services/info/person");
const router = express.Router();
var { Validator, ValidationError } = require('express-json-validator-middleware');
var validator = new Validator({allErrors: true});
var validate = validator.validate;
var ValiSchema=require("./validator/validation");

const knex=require('../utils/database').knex;
const bookshelf=require('bookshelf')(knex);

// Fetch all student_information
 router.route('/student_information')
  
  .get(function (req, res) {
    info. read_information(req,res);
  });
  
//fetch student_information by id
  router.route('/reg')
  .get(function (req, res) {
    info.readById_information(req,res);
  });


//Create student_information
 router.route('/create')
.post(validate({body:ValiSchema}),function (req, res) {

  info. create_information(req,res);
 });


//Update student_information
 router.route('/reg')
  .put(validate({body:ValiSchema}),function (req, res) {
    info. update_information(req,res);
  });

//Delete student_information
  router.route('/reg')
  .delete(function (req, res) {
    info. delete_information(req,res);
  });
  
//fetch  student_personal
  router.route('/student_personal')
  
  .get(function (req, res) {
    pers. read_information(req,res);
  });

//fetch  student_personal byID 
  router.route('/pers')
  .get(function (req, res) {
    pers.readById_information(req,res);
  });

//Create student_personal
 router.route('/create_personal')
.post(function (req, res) {

  pers.create_information(req,res);
 });

 //Update student_personal
 router.route('/pers')
  .put(function (req, res) {
    pers. update_information(req,res);
  });

//Delete student_personal
  router.route('/pers')
  .delete(function (req, res) {
    pers. delete_information(req,res);
  });

//Join student_information and  student_personal by ID
  router.route('/reg/:id')
  .get(function (req, res) {
    info. join_info(req,res);
  }); 

  //Join student_information and  student_personal
  router.route('/join')
  .get(function (req, res) {
    info. join_allinfo(req,res);
  });  

  router.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
      
        res.status(400).send(err);
        next();
    }
    else next(err); 
});
  module.exports=router;
  


