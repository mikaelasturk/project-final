// [ ] todo: implement user routes for signup and login locally

import express from "express"
import bcrypt from "bcrypt"
import { User } from "../models/User"
import { seedingUsers } from "../seedingDatabase/seedingUsers";

const router = express.Router()

router.get("/", async (request, response) => {
  // Seed users if needed
  await seedingUsers()
  
  const user = await User.find().sort({ memberCreatedAt: "desc"})
  response.json(user)
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

// Signup route
router.post("/signup", async (request, response) => {
  try {
    const { email, password, firstName, lastName, city, isPremium } = request.body
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
      password: 
      hashedPassword, 
      firstName, 
      lastName, 
      city, 
      isPremium: isPremium || false 
    })

    const savedUser = await user.save()

    response.status(201).json({
      success: true,
      message: "User created successfully",
      response: { 
       savedUser: savedUser,

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

export default router