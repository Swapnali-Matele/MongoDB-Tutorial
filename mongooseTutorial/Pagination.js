const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const client = new MongoClient(
  "mongodb+srv://root:123@cluster0.gq2rjja.mongodb.net/?retryWrites=true&w=majority"
);
const test = require("assert");

const router = express.Router();

app.use(express.json());
var database;

async function getDetails(req, res) {
  let page = req.body.pageNo;
  const limit = 50;
  try {
    let condition = [];
    database
      .collection("finance_quotes")
      .find()
      .limit(50)
      .skip((page - 1) * limit)
      .toArray((err, result) => {
        // console.log("ENTERR")
        if (result.length > 0) {
          if (result.length < 50) {
            return console.log("All data Consumed last");
          } else {
            console.log("esdsdsad", page);
            console.log(result);

            // })
            console.log("condition loop");
            getDetails({ body: { pageNo: page + 1 } });  ///recursion

            //    console.log("end here")
          }
        } else {
          return console.log("All data Consumed empty");
        }
        condition = result;
      });
  } catch (err) {
    //console.log(err)
  }
}

app.get("/", (req, res) => {
  res.send("Welcome to MongoDB API");
});

app.get("/api/finance", getDetails);

app.listen(3000, () => {
  //connection url
  client
    .connect()
    .then((result) => {
      database = result.db("finance");
      console.log("Connection to database Successful");
    })
    .catch((err) => {
      if (err) throw err;
    });
});
module.exports = {
  database,
};
