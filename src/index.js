const express=require('express')
require('./db/mongoose.js')
const User = require('./mdoels/user.js')
const Task=require('./mdoels/tasks.js')

const app=express()
const port =process.env.PORT || 3000

app.use(express.json())

app.post('/users',(req,res)=>{
    const user=new User(req.body)
    user.save().then(() => {
        res.status(201).send(user)
    }).catch((e) => {
        res.status(400).send(e)

    });
})

app.post('/tasks',(req,res)=>{
    const task= new Task(req.body)
    task.save().then(() => {
        res.status(201).send(task)
    }).catch((e) => {
        res.status(400).send(e)
    });
})

app.listen(port,()=>{
    console.log("serveer is on port "+port)
})