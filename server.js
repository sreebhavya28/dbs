const express =require('express')
const mongoose = require('mongoose')
const fruit = require('./fruit')

const app = express()
mongoose.set('strictQuery',false)
mongoose.connect("mongodb://127.0.0.1:27017/test").then(()=>{
    console.log("Database is sucessfully established")
})
app.get('/',(req,res) => {
    res.send('welcome to API')
})
app.get('/sree',async(req,res) => {
    const fr= await fruit.create({
        name:"mango"

        
    })
    console.log(fr)
    res.json(fr)
})

app.listen (5000, () => {
    console.log("server is running on port 5000");

})

