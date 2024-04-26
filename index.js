const express = require('express')

const app = express()

const port = 3000

app.get('/', (req,res) =>{
    res.send(`Hello world from Port ${port}`)
})

app.listen(3000, ()=>{
    console.info(`server is running on port ${port}`)
})