const mongoose = require('mongoose');

const connectDB=()=>{
    try{
        const connect=mongoose.connect('mongodb://localhost:27017/user-mern',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('mongoDB connected')
    }catch(err){
        console.log(err);
    }
}

module.exports=connectDB

// mongodb+srv://vaibhav:1234@cluster0.ykjsr.mongodb.net/users?retryWrites=true&w=majority