const mongoose = require('mongoose');

const connectDB=()=>{
    try{
        const connect=mongoose.connect('mongodb://localhost:27017/mern-project',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('mongoDB connected')
    }catch(err){
        console.log(err);
    }
}

module.exports=connectDB
