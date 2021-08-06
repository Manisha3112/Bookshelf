const knex=require('knex')({

  client: 'mysql2',
  connection: {
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'registerbook',
    charset  : 'utf8'
  }
});
module.exports.knex=knex;
