import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

const port = process.env.PORT || 9027;
const app = express();

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/membership-portal";
mongoose.connect(mongoUrl);
mongoose.Promise = Promise;

// Middleware to enable cors and bodyParser
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {

  if (mongoose.connection.readyState === 1) {
    next();
  }
  else {
    return res.status(503).json({ error: "Database connection not established" });
  }
});

const formatStockholm = (date) =>
  date
    ? new Intl.DateTimeFormat("sv-SE", {
        timeZone: "Europe/Stockholm",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(date)
    : undefined;

const memberSchema = new mongoose.Schema(
  {
  firstName: { 
    type: String, 
    required: true,
    minlength: 2
  },
  lastName: { 
    type: String, 
    required: true,
    minlength: 2
  },
  username: { 
    type: String, 
    required: true, 
    unique: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  city: { 
    type: String, 
    required: true 
  },
  isPremium: { 
    type: Boolean, 
    required: true,
    default: false
  },
  premiumStartDate: { 
    type: Date, 
    default: function() {
      return this.isPremium === true ? new Date() : undefined;
    }
  },
  premiumEndDate: { 
    type: Date, 
    default: function() {
      return this.isPremium === true ? new Date(new Date().setFullYear(new Date().getFullYear() + 1)) : undefined;
    }
  },

  memberCreatedAt: { 
    type: Date, 
    default: Date.now 
  }
},
{
  toJSON: {
    transform(doc, ret) {
      ret.memberCreatedAt = formatStockholm(ret.memberCreatedAt);
      ret.premiumStartDate = formatStockholm(ret.premiumStartDate);
      ret.premiumEndDate = formatStockholm(ret.premiumEndDate);
    }
  }
}
);

const Member = mongoose.model("Member", memberSchema);

if (process.env.RESET_SEED_DB === "true") {
  console.log("Resetting seeding database...");

  const seedMembers = async () => {
    await Member.deleteMany({});

    await new Member({
      firstName: "Mikaela",
      lastName: "Sturk",
      username: "mikaelasturk",
      email: "mikaelasturk@gmail.com",
      city: "Ekerö",
      isPremium: true,
      premiumStartDate: new Date(),
      premiumEndDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    }).save();

    await new Member({
      firstName: "Carolina",
      lastName: "Oldertz",
      username: "carolinaoldertz",
      email: "carolina.oldertz@gmail.com",
      city: "Södermalm",
      isPremium: false,
    }).save();

    await new Member({
      firstName: "Tanja",
      lastName: "Persson",
      username: "tanjapersson",
      email: "tanjapersson@womenation.se",
      city: "Linköping",
      isPremium: false,
    }).save();
  };
  seedMembers();
}


// Defining routes

app.get("/", (req, res) => {
  res.send("Welcome to the Membership Portal API");
});

app.get("/members", (req, res) => {
  Member.find().sort({ memberCreatedAt: "desc" }).then((members) => {
    res.json(members);
  });
});

app.get("/members/premium-members", (req, res) => {
  Member.find({ isPremium: true }).sort({ memberCreatedAt: "desc" }).then((members) => {
    res.json(members);
  });
});

app.get("/members/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const member = await Member.findOne({ username: username });
    if (member) {
      res.json(member);
    } else {
      res.status(404).json({ error: "Member not found" });
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid request" });
  }
});

app.post("/members", async (req, res) => {
  const { firstName, lastName, username, email, city, isPremium } = req.body;
  
  const newMember = new Member({
    firstName,
    lastName,
    username,
    email,
    city,
    isPremium: isPremium || false,
  });
    
  try {
      const savedMember = await newMember.save();
      res.status(201).json({ message: "Member created successfully", savedMember: savedMember });
    } catch (error) {
    res.status(400).json({ message: "Failed to create member", error: error.errors });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
 