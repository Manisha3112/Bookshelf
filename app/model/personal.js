const knex=require('../utils/database').knex;
const bookshelf=require('bookshelf')(knex);
const reg=require('./reg');

const personal = bookshelf.model('student_personal', {
  tableName: 'student_personal',
  register() {
    return this.belongsTo('reg')
  }
})
  module.exports=personal;
  
  
  