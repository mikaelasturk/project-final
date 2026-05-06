// [ ] todo: implement dashboard routes and connect middleware for user authentication and for premium content access (is some content visable to free users or is the whole "page" restricted?)
// [ ] todo: implement patch request and get request to /mina-sidor

import express from "express"
//import { getDashboard } from "../controllers/dashboardController.js"
import { User } from "../models/User"
import { seedingUsers } from "../seedingDatabase/seedingUsers"

const router = express.Router()
seedingUsers()
// Dashboard route - protected, only accessible to authenticated users

// route to get user info
router.get("/:id", async (request, response) => {
  try {
  const { id } = request.params
  const user = await User.findById(id)

  if (user) {
    response.status(200).json({
      message: "Hej!!!! Välkommen till din hemliga dashboard, " + user.firstName + "!!!",
      user
    })
  } else {
    response.status(404).json({
      error: "user not found"
    })
  }

  } catch (error) {
    response.status(400).json({
      error: "invalid request"
    })
  }
})

export default router