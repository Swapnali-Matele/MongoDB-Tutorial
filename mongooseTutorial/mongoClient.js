//connect using MongoClientInstance(object)
//import {MongoClient} from 'mongodb';
const MongoClient = require('mongodb').MongoClient;
const test = require('assert');

//connection url 
const url = 'mongodb+srv://root:123@cluster0.gq2rjja.mongodb.net/Client_Database'
const dbName = 'Client_Database'

//connect using MongoClient

const mongoClient = new MongoClient(url);
mongoClient.connect(function(err, client) {
    const db = client.db(dbName);
    client.close()
    console.log('connected')

})

// // Connect using the MongoClient.connect static method
// const MongoClient = require('mongodb').MongoClient;
// const test = require('assert');
// // Connection url
// const url = 'mongodb://localhost:27017';
// // Database Name
// const dbName = 'test';
// // Connect using MongoClient
// MongoClient.connect(url, function(err, client) {
//   const db = client.db(dbName);
//   client.close();
// });