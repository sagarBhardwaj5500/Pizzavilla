const express = require("express");
const app = express();

const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string
const url =
  "mongodb+srv://sachin:sachin006@cluster0.hel6j.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

// The database to use
const dbName = "pizzavilla";

const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51LEQaGSFuaVJlr3qJEME8kurn4bUODbL7TqkF9HcIqmyCy8x7JmxAflN3iRkfINfBm2JEsaUzYDrUPMvXdMYfKXV00EWXH5eWb"
);

app.use(express.json());
app.use(cors());

app.post("/payment", (req, res) => {
  const { price } = req.body;
  const { orders } = req.body;

  console.log(orders);
  return stripe.customers
    .create({
      email: "random@random.com",
    })
    .then((customer) => {
      stripe.charges.create({
        amount: price * 100,
        currency: "usd",
      });
    })
    .then((result) => res.status(200).json(result));
});

app.post("/send", async (req, res) => {
  await client.connect();
  console.log("Connected correctly to server");
  const db = client.db(dbName);
  // Use the collection "people"
  const col = db.collection("pizzavillaCustomerDB");
  // Construct a document
  const { order } = req.body;
  // Insert a single document, wait for promise so we can read it back
  const p = await col.insertOne({
    ...order,
    orderTime: new Date().toLocaleTimeString(),
    orderDate: new Date().toLocaleDateString(),
  });
  // Find one document
  const myDoc = await col.findOne();
  // Print to the console
  console.log(myDoc);
});

app.get("/getData", async (req, res) => {
  await client.connect();
  console.log("Connected correctly to server");
  const db = client.db(dbName);
  // Use the collection "people"
  const col = db.collection("pizzavillaCustomerDB");
  const myDoc = await col.find().toArray();
  console.log(myDoc)
  res.status(200).json(myDoc);
});

app.listen(4000, () => {
  console.log("Server started at PORT 4000");
});
