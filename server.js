const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGODBURLKEY);

const subscriberSchema = new mongoose.Schema({
  mailid: {
    type: String,
  },
});

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [1, ""],
  },
  desc: {
    type: String,
    required: [1, ""],
  },
});

const messageSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: [1, ""],
  },

  fmail: String,
  msg: String,
});
const Message = mongoose.model("msg", messageSchema);
const Review = mongoose.model("review", reviewSchema);
const Subscriber = mongoose.model("subscriber", subscriberSchema);

app.post("/subscriber", function (req, res) {
  const newmailid = req.body.email;
  const newsubscriber = new Subscriber({
    mailid: newmailid,
  });
  newsubscriber.save();
});
app.post("/userfeed", function (req, res) {
  const feed = new Review({
    name: req.body.name,
    desc: req.body.desc,
  });
  feed.save();
});
app.post("/msg", function (req, res) {
  const message = new Message({
    fname: req.body.fname,
    fmail: req.body.fmail,
    msg: req.body.msg,
  });
  message.save();
});
app.get("/feedback", function (req, res) {
  Review.find({}).then((foundfeeds) => res.json(foundfeeds));
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(express.static("client/build"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});
app.listen(PORT, function () {
  console.log("Server is up and running on the port " + PORT);
});
