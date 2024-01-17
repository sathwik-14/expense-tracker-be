require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.get('/',(req,res)=>{
    console.log('server is online...');
})
app.listen(port)