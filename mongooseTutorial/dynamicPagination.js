const express = require('express');
const app = express();
const {MongoClient} = require('mongodb');
const client = new MongoClient('mongodb+srv://root:123@cluster0.gq2rjja.mongodb.net/?retryWrites=true&w=majority')
const test = require('assert');
const { ifError } = require('assert');


app.use(express.json());
var database ;

app.get ( '/', (req, res) => {
    res.send('Welcome to MongoDB API'); 
})  

app.get('/api/finance', (page,()=>{
    
    const page = 1
    const limit = 5
       
        const financeData = database.collection('finance_quotes').find().limit(10).skip((page - 1)*limit).toArray((err, result)=>{
            console.log(result.length)
            console.log(result)
       
        })
       const newPage = page +1
        if(11<newPage){
            console.log("hello world")
            abc(newPage)

        
    }

    
     

    //res.send(result);
}))
  
        
app.listen(3000, () => {
//connection url 
client.connect( ).then((result) => {
    database = result.db('finance')
    console.log("Connection to database Successful")
    
}).catch((err) => {
    if (err) throw err;
})
})