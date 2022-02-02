const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const StudentModel = require("./models/studentModel");

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://keerthana:1234@cluster0.rwiie.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true});

app.get("/",(req,res)=>{
    res.send("hello");
})
app.post("/validate",async (req,res) => {

    try{
        userName = req.body.username;
        passWord =req.body.password;
    
        const student = await StudentModel.findOne({username:userName})
        
        if(student.username === userName && student.password === passWord)
        {
            console.log("valid user")
        }
        else{
            console.log("invalid user")
        }
        
    }
    catch(err){
        res.status(400).send(err);
    }
    

});

app.listen(process.env.PORT || 3001,()=>{
    console.log("server running in port 3001");
});
