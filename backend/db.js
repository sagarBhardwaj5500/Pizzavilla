const { MongoClient } = require("mongodb");

const url = `mongodb+srv://sachin006:sachin006@cluster0.hel6j.mongodb.net/test?retryWrites=true&w=majority`;

const client = new MongoClient(url);


const dbName = "pizzavilla";

async function runDB(name, password) {
  try {
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db(dbName);

    
    const col = db.collection("pizzavillaCustomerDB");

    const myDoc = await col.findOne({name, password});
    
    console.log(myDoc);
    return myDoc
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}


module.exports = runDB;