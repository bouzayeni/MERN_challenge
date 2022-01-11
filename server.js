const express = require ('express')
const app = express()
app.use(express.json())
const mongoose = require ('mongoose')
require('dotenv').config() 
const cors = require ('cors');
app.use(cors('http://localhost:3000'))


mongoose.connect(process.env.MONGO_URI,(err)=>err?console.log(err):console.log(`database connected`))


app.use('/api/user',require('./routs/userRoute'))

app.listen(process.env.PORT, (err)=>err?console.log(err):console.log(`server is runing`))