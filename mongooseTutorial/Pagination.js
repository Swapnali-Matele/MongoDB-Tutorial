const express = require('express');
const app = express();
const {MongoClient} = require('mongodb');
const client = new MongoClient('mongodb+srv://root:123@cluster0.gq2rjja.mongodb.net/?retryWrites=true&w=majority')
const test = require('assert');


app.use(express.json());
var database ;

app.get ( '/', (req, res) => {
    res.send('Welcome to MongoDB API'); 
})  

app.get('/api/finance', (req, res) => {
    
    
    const {page, limit = 5 } = req.query
   
    database.collection('finance_quotes').find().limit(5).skip((page - 1)*limit).toArray((err, result)=>{
        if (err) throw err;
        console.log(err)
        console.log(result.length)
        console.log(result)

        
        res.send(result);
    })

    
})

app.listen(3000, () => {
//connection url 
client.connect( ).then((result) => {
    database = result.db('finance')
    console.log("Connection to database Successful")
    
}).catch((err) => {
    if (err) throw err;
})
})