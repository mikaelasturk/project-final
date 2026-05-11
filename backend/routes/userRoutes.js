// [x] todo: implement user routes for signup and login locally
// [ ] todo: make route for admin to view members and filter on premium(query)

import express from "express"
import bcrypt from "bcrypt"
import { User } from "../models/User"
import { addContactToMailchimp } from "../config/mailchimpConfig";
import { seedingUsers } from "../seedingDatabase/seedingUsers";

const router = express.Router()

seedingUsers()

router.get("/", async (request, response) => {  

  const user = await User.find().sort({ userCreatedAt: "desc"})
  response.json(user)
})

// Signup route
router.post("/signup", async (request, response) => {
  try {
    const { email, password, firstName, lastName, city, justifyMembership, isPremium } = request.body
    const existingUser = await User.findOne({ email: email.toLowerCase()})

    if (existingUser) {
      return response.status(409).json({
        success: false,
        message: "An error occurred when creating the user"
      })
    }

    const salt = bcrypt.genSaltSync()
    const hashedPassword = bcrypt.hashSync(password, salt)

    const user = new User({
      email, 
      password: hashedPassword, 
      firstName, 
      lastName, 
      city, 
      justifyMembership,
      isPremium: isPremium || false 
    })

    const savedUser = await user.save()

    try {
      await addContactToMailchimp(mailchimpUser) 
    } catch (error) {
      console.error("Kunde inte lägga till användare i Mailchimp:", error)
    }

    response.status(201).json({
      success: true,
      message: "User created successfully and added to Mailchimp",
      response: { 
       savedUser: savedUser
      }
    })

  } catch (error) {
    response.status(400).json({ 
      success: false,
      message: "Failed to create user",
      response: error
    })
  }
})

// Login route
router.post("/login", async (request, response) => {

  try {
    const { email, password } = request.body

    const user = await User.findOne({email:email.toLowerCase()})

    if (user && bcrypt.compareSync(password, user.password))
    {
      response.status(200).json({
        success: true, 
        message: "Login successful",
        response: { 
          email: user.email, 
          id: user._id, 
          accessToken: user.accessToken }
      })
    } else { 
      response.status(401).json({
        success: false,
        message: "Invalid email or password",
        response: null
      })
    }
  } catch(error) {
    response.status(500).json({ 
      success: false,
      message: "Something went wrong during login",
      response: error
     })
  }
})  

export default router