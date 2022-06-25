const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51LEQaGSFuaVJlr3qJEME8kurn4bUODbL7TqkF9HcIqmyCy8x7JmxAflN3iRkfINfBm2JEsaUzYDrUPMvXdMYfKXV00EWXH5eWb"
);
const app = express();

app.use(express.json());
app.use(cors());

app.post("/payment",(req, res) => {
  const { price } = req.body;
  return stripe.customers
    .create({
      email: "random@random.com",
    })
    .then((customer) => {
      stripe.charges.create({
        amount: price * 100,
        currency: "inr",
      });
    })
    .then((resulr) => res.status(200).json(result));
});

app.listen(4000, () => {
  console.log("Server started at PORT 4000");
});
