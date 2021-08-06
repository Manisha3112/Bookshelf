const personal=require('../../model/personal');
const knex= require('../../utils/database').knex;
const bookshelf=require('bookshelf')(knex);
class person{
 //Read all student_information 
  read_information (req, res) {
    
    personal.forge()
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
    personal.forge({id:req.query.id})
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
    personal.forge({
      
              Student_Email: req.body.Student_Email,
              Student_DateOfBirth:req.body.Student_DateOfBirth,
              Student_Hobbies:req.body.Student_Hobbies
            })
            .save()
            .then(function (ans) {
              return res.json({message: "User is created successfully", data: {id: ans.get('id')} });
            })
            .catch(function (err) {
              return res.status(400).json({error: true, data: {message: err.message}});
            }); 
          };


//Update a user
update_information(req,res) {
personal.forge({id:req.query.id})
    .fetch({require: true})
    .then(function (personal) {
      personal.save({
        Student_Email: req.body.Student_Email|| personal.get('Student_Email'),
        Student_DateOfBirth:req.body.Student_DateOfBirth|| personal.get('Student_DateOfBirth'),
        Student_Hobbies:req.body.Student_Hobbies|| personal.get('Student_Hobbies')
        
        
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
            personal.forge({id: req.query.id})
            .fetch({require: true})
            .then(function (personal) {
              personal.destroy()
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
 }




 module.exports=exports=new person();