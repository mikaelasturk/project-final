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

const workStatusSchema = new mongoose.Schema({
  worker: { type: Boolean, default: false },
  owner: { type: Boolean, default: false },
  startUp: { type: Boolean, default: false },
  searching: { type: Boolean, default: false },
  other: { type: Boolean, default: false },
  otherText: {
    type: String,
    trim: true,
    validate: {
      validator(value) {
        if (!this.other) return true
        return Boolean(String(value || "").trim())
      },
      message: "otherText is required when other is true"
    }
  }
}, { _id: false })

const userSchema = new mongoose.Schema({

  firstName: {
    type: String,
    required: true,
    minlength: 2,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"]
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    match: [/^(?=.*[A-ZÅÄÖ])(?=.*[a-zåäö])(?=.*\d).{8,}$/, "Invalid password format"]
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
  workStatus: {
    type: workStatusSchema,
    required: true,
    validate: {
      validator(value) {
        if (!value) return false

        return [value.worker, value.owner, value.startUp, value.searching, value.other].some(Boolean)
      },
      message: "At least one work status option must be selected"
    }
  },  
  isPremium: {
    type: Boolean,
    required: true,
    default: false,
    index: true
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