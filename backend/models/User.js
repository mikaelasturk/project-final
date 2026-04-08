// [ ] todo: implement user schema and model with Mongoose
// [ ] todo: look into adding enum for city if neccessary
// [ ] note: do we need ispremium in schema?

import crypto from "crypto"
import mongoose from "mongoose"

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
    unique: true
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
  memberCreatedAt: { 
    type: Date, 
    default: Date.now 
  }
})

export const User = mongoose.model("User", userSchema)