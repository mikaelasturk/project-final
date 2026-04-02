import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

const port = process.env.PORT || 8080;
const app = express();

// Middleware to enable cors and bodyParser
app.use(cors());
app.use(bodyParser.json());

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/membership-portal";
mongoose.connect(mongoUrl);
mongoose.Promise = Promise;

const Member = mongoose.model("Member", {
  firstName: String,
  lastName: String,
  username: String,
  email: String,
  city: String,
  isPremium: Boolean,
  startDate: Date,
  endDate: Date,
});

Member.deleteMany().then(() => {

  new Member({
    firstName: "Mikaela",
    lastName: "Sturk",
    username: "mikaelasturk",
    email: "mikaelasturk@gmail.com",
    city: "Ekerö",
    isPremium: true,
    startDate: new Date(),
    endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
  }).save();

  new Member({
    firstName: "Carolina",
    lastName: "Oldertz",
    username: "carolinaoldertz",
    email: "carolina.oldertz@gmail.com",
    city: "Södermalm",
    isPremium: false,
    startDate: undefined,
    endDate: undefined,
  }).save();

  new Member({
    firstName: "Tanja",
    lastName: "Persson",
    username: "tanjapersson",
    email: "tanjapersson@womenation.se",
    city: "Linköping",
    isPremium: false,
    startDate: undefined,
    endDate: undefined,
  }).save();

});

// Defining routes
app.get("/", (req, res) => {
  Member.find().then((members) => {
    res.json(members);
  });
});

app.get("/:username", (req, res) => {
  const { username } = req.params;
  Member.findOne({ username: username }).then((member) => {
    if (member) {
      res.json(member);
    } else {
      res.status(404).json({ error: "Member not found" });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
