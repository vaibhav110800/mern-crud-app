const axios=require('axios');
const fetch = require('node-fetch');

exports.homeRoutes=async (req,res)=>{
    try {
        const response=await axios.get("http://localhost:3000/api/users/")
        res.render('index',{users:response.data});
    } catch (error) {
        res.send(error);
    }

    // axios.get("http://localhost:3000/api/users/")
    // .then(function(response){
    //     res.render('index',{users:response.data});
    // })
    // .catch(err=>{
    //     res.send(err);
    // })
}

exports.add_user=(req,res)=>{
    res.render('add_user');
}

exports.update_user=async (req,res)=>{
    // try {
    //     const userData=axios.get('http://localhost:3000/api/user',{params:{id:req.query.id}})
    //     res.render('update_user',{user:userData.data})
    // } catch (err) {
    //     res.send(err);
    // }
    
    axios.get('http://localhost:3000/api/user',{params:{id:req.query.id}})
     .then(function(userData){
        res.render('update_user',{users:userData.data})
     })
     .catch(err=>{
        res.send(err);
     })
}

