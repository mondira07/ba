// const express = require('express')
import express from "express"
const app = express()
const port = process.env.PORT || 4000

app.get('/',(req,res)=>{
    res.send('Hello ')

})

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
  })