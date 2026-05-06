// [ ] todo: implement middleware for user authentication and for premium content access which is then used in dashboardRoutes
// [ ] note: do we need to add replace bearer in req.header and test  loggedOut: true,

import { User } from '../models/User'

export const authenticateUser = async (request, response, next) => {
  try {
    const user = await User.findOne({ accessToken: request.header("Authorization").replace("Bearer ", "") })

    if (user) {
      request.user = user
      next()
    } else {
      response.status(401).json({
        message: "Authentication missing or invalid",
        loggedOut: true
      })
    }
  } catch (error) {
    response.status(500).json({
      message: "Internal Server Error",
      error: error.message
    })
  }
}