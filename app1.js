const express=require('express');
var bodyParser = require('body-parser');
const app=express();
//const information=require('./routes/route');
app.use(express.urlencoded({extended:false}));
app.use(express.json());
var route=require("./app/routes/route")

app.use('/user',route);

app.listen(1119,function(){
    console.log('Server running at port 1119')
})