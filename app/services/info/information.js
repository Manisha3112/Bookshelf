const reg=require('../../model/reg');
const personal=require('../../model/personal');
const knex= require('../../utils/database').knex;
const bookshelf=require('bookshelf')(knex);
class information{
 //Read all student_information 
  read_information (req, res) {
    
    reg.forge({ 
            })
            .fetchAll()
             .then(function (information) {
             return res.json({message: "User data fetched suceesfully", data: information.toJSON()});
              })
     
     .catch(function (err) {
      return res.status(400).json({error: true, data: {message: err.message}});
    });
  
};

//read a user

  readById_information(req,res){
    reg.forge({id: req.query.id})
    .fetch()
    .then(function (user) {
      if (!user) {
        return res.status(404).json({error: true, data: {}});
      }
      else {
       return res.json({message: "User data is fetched successfully", data: user.toJSON()});
      }
    })
    .catch(function (err) {
      return res.status(400).json({error: true, data: {message: err.message}});
    });

  }  
//Create a user
create_information (req, res) {
    reg.forge({
      
              Student_Name: req.body.Student_Name,
              Student_Department:req.body.Student_Department
            })
            .save()
            .then(function (ans) {
              return res.json({message: "User is created successfully", data: {id: ans.get('id')}});
            })
            .catch(function (err) {
              return res.status(400).json({error: true, data: {message: err.message}});
            }); 
          };


//Update a user
update_information(req,res) {
reg.forge({id: req.query.id})
    .fetch({require: true})
    .then(function (reg) {
      reg.save({
        Student_Name: req.body.Student_Name|| reg.get('Student_Name'),
        Student_Department: req.body.Student_Department || reg.get('Student_Department')
        
      })
      .then(function () {
        return res.json({error: false, data: {message: 'User details updated successfully'}});
      })
      .catch(function (err) {
        return res.status(400).json({error: true, data: {message: err.message}});
      });
    })
    .catch(function (err) {
     return res.status(400).json({error: true, data: {message: err.message}});
    });
  
}
//Delete a user
delete_information(req,res){
            reg.forge({id: req.query.id})
            .fetch({require: true})
            .then(function (reg) {
              reg.destroy()
              .then(function () {
               return  res.json({error: false, data: {message: 'User data deleted successfully'}});
              })
              .catch(function (err) {
                return res.status(400).json({error: true, data: {message: err.message}});
              });
            })
            .catch(function (err) {
              return res.status(400).json({error: true, data: {message: err.message}});
            });
         };



join_info (req, res) {
  
          knex.from('student_information')
         .innerJoin('student_personal','student_information.id','student_personal.id')
         .where('student_information.id',req.params.id)
         .then(function(data)
         {
           res.send(data)
         })
        };

 join_allinfo (req, res) {
          knex .select('*').from('student_information')
          .join('student_personal', {'student_personal.id': 'student_information.id'})
         .then(function(data)
         {
           res.send(data)
         })
        };
 }

module.exports=exports=new information();