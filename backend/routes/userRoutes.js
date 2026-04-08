// [ ] todo: implement user routes for signup and login locally

import express from "express"
import { User } from "../models/User"
import { seedingUsers } from "../seedingDatabase/seedingUsers";

const router = express.Router()

router.get("/", async (req, res) => {
  // Seed users if needed
  await seedingUsers()
  
  const user = await User.find().sort({ memberCreatedAt: "desc"})
  res.json(user)
})

export default router