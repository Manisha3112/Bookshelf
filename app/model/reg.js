const knex=require('../utils/database').knex;
const bookshelf=require('bookshelf')(knex);
var register=bookshelf.Model.extend({
  
    tableName:'student_information',
    
  
});
module.exports=register;
  
  

