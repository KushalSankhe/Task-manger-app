//CRUD OPERATIONS
const { MongoClient, ObjectID } = require('mongodb')

const connectingURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectingURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log("unable to connect to the database")
    }
    const db = client.db(databaseName)


    //............................Deleting the documents .................................

    // db.collection('users').deleteMany({
    //     age:44
    // }).then((result) => {
    //    console.log(result) 
    // }).catch((error) => {
    //     console.log(error)
    // });

    // db.collection('tasks').deleteOne({
    //     description:'make your day productive'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((err) => {
    //     console.log(err)
    // });




    //.............................update the documents..........................
    // db.collection('users').updateOne({
    //     _id:new ObjectID("62bc0f50b1f97b231c9436f9")
    // },{
    //     $inc:{
    //         age:2
    //     }
    // }).then((result) => {
    //     console.log(result)       
    // }).catch((err) => {
    //     console.log(err)
    // });

    // db.collection('tasks').updateMany({
    //     completed:false
    // },{
    //     $set:{
    //         completed:true
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })


    



    // ......................adding the document.....................................
    db.collection('users').insertOne({
        name:'viditi',
        age:9
    },(error,result)=>{
        if(error){
            return console.log("unable to insert user...")
        }
        console.log(result.ops)
    })



    // db.collection('users').insertMany([
    //     {
    //         name:'John Cena',
    //         age: 45
    //     },
    //     {
    //         name:'Johnny Deep',
    //         age:40
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('Unable to add the documnets')
    //     }


    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description:'Get the task app done in 1 week',
    //         completed:false
    //     },

    //     {
    //         description:'Do aptitude training ',
    //         completed:false
    //     },
    //     {
    //         description:'make your day productive',
    //         completed:true
    //     }

    // ],(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert documnets')
    //     }

    //     console.log(result.ops)
    // })


    // ...........................Reading documents.......................................

    // db.collection('users').findOne({name:'Roman'},(error,user)=>{
    //     if(error){
    //         return console.log('Unable to find the user')
    //     }
    //     console.log(user)
    // })

    // db.collection('tasks').find({completed:false}).toArray((error,users)=>{
    //     if(error){
    //         return console.log('Unable to find the documents')
    //     }
    //     console.log(users)

    // })
})