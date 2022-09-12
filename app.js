const mongoose = require('mongoose')
const express = require('express')
const app = express()

mongoose.connect("mongodb://localhost/goodFoods", ()=>{
    console.log('connected')
})

//     res.send("yes")
// })
// app.listen(3000)