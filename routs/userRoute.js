const express = require ('express')

const router = express.Router()
const User = require('../model/userModel')



router.post('/newuser',(req,res)=>{
    const newUser = new User(req.body)
    newUser.save()
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json(err))
})

router.get('/allusers',(req,res)=>{
    User.find()
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json(err))
})

router.delete('/user/delete/:userId',(req,res)=>{
    User.findByIdAndRemove(req.params.userId)
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json(err))
})
module.exports = router 