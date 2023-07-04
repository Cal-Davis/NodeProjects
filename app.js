const express = require("express")
const app = express()
const mongoose = require("mongoose")
const  morgan = require('morgan')


mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("DB Connected"))
function sum(a , b){
    return a + b
}

const total = sum(20, 30)
console.log("TOTAL: " ,total) 

const port = process.env.PORT || 8080
app.listen(port ,()=> {
    console.log(`A Node js API is listening on port: ${port}`)

})