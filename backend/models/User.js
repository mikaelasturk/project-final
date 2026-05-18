// [x] todo: implement user schema and model with Mongoose
// [ ] todo: look into adding enum for city if neccessary
// [ ] note: do we need ispremium in schema?

import crypto from "crypto"
import mongoose from "mongoose"

const formatStockholm = (date) => date ? new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Europe/Stockholm",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date)
: undefined;

const userSchema = new mongoose.Schema({

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
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString("hex")
  },
  city: {
    type: String,
    required: true
  },
  justifyMembership: {
    type: String,
    required: true,
    minlength: 10
  },
  isPremium: {
    type: Boolean,
    required: true,
    default: false
  },
  premiumStartDate: { 
    type: Date, 
    default: function() {
      return this.isPremium === true ? new Date() : undefined
    }
  },
  premiumEndDate: { 
    type: Date, 
    default: function() {
      return this.isPremium === true ? new Date(new Date().setFullYear(new Date().getFullYear() + 1)) : undefined
    }
  },
  userCreatedAt: { 
    type: Date, 
    default: Date.now 
  }
},

{
  toJSON: {
    transform(doc, ret) {
      ret.userCreatedAt = formatStockholm(ret.userCreatedAt);
      ret.premiumStartDate = formatStockholm(ret.premiumStartDate);
      ret.premiumEndDate = formatStockholm(ret.premiumEndDate);
    }
  }
}
)

export const User = mongoose.model("User", userSchema)