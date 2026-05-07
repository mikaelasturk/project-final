import express from "express"
import bcrypt from "bcrypt"
import { User } from "../models/User"
import { seedingUsers } from "../seedingDatabase/seedingUsers"

const router = express.Router()

seedingUsers()

const DEFAULT_SIGNUP_DATA = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  city: "",
  justifyMembership: "",
  workStatus: {}
}

const DEFAULT_LOGIN_DATA = {
  email: "",
  password: ""
}

const asTrimmedText = (value) => String(value || "").trim()


const normalizeSignupData = (inputData = {}) => {
  const signupData = { ...DEFAULT_SIGNUP_DATA, ...inputData }

  return {
    firstName: asTrimmedText(signupData.firstName),
    lastName: asTrimmedText(signupData.lastName),
    email: asTrimmedText(signupData.email).toLowerCase(),
    password: String(signupData.password || ""),
    city: asTrimmedText(signupData.city),
    justifyMembership: asTrimmedText(signupData.justifyMembership),
    workStatus: signupData.workStatus || {}
  }
}

const normalizeLoginData = (inputData = {}) => {
  const loginData = { ...DEFAULT_LOGIN_DATA, ...inputData }

  return {
    email: asTrimmedText(loginData.email).toLowerCase(),
    password: String(loginData.password || "")
  }
}

const validateLoginData = (loginData) => {
  const fieldErrors = {}

  if (!loginData.email) fieldErrors.email = "REQUIRED"
  if (!loginData.password) fieldErrors.password = "REQUIRED"

  return fieldErrors
}

const getFieldPath = (path = "") => {
  if (path === "workStatus.otherText") return "otherText"
  return path
}

const getFieldCode = (error = {}) => {
  if (error.kind === "required") return "REQUIRED"
  if (error.kind === "minlength") return "TOO_SHORT"
  if (error.kind === "maxlength") return "TOO_LONG"
  if (error.kind === "regexp") return "INVALID_FORMAT"
  if (error.message === "At least one work status option must be selected") return "REQUIRED"
  if (error.message === "otherText is required when other is true") return "CONDITIONAL_REQUIRED"

  return "INVALID_VALUE"
}

const toFieldErrors = (validationError) => {
  const fieldErrors = {}

  Object.entries(validationError.errors || {}).forEach(([path, error]) => {
    fieldErrors[getFieldPath(path)] = getFieldCode(error)
  })

  return fieldErrors
}

router.get("/", async (request, response) => {
  const users = await User.find().sort({ userCreatedAt: "desc" })
  response.json(users)
})

router.post("/signup", async (request, response) => {
  try {
    const data = normalizeSignupData(request.body)

    const user = new User({
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      city: data.city,
      justifyMembership: data.justifyMembership,
      workStatus: data.workStatus
    })

    let fieldErrors = {}
    try {
      await user.validate()
    } catch (error) {
      if (error?.name === "ValidationError") {
        fieldErrors = toFieldErrors(error)
      } else {
        throw error
      }
    }

    const existingUser = await User.findOne({ email: data.email })
    if (existingUser) {
      fieldErrors.email = "EMAIL_TAKEN"
    }

    if (Object.keys(fieldErrors).length > 0) {
      const statusCode = Object.keys(fieldErrors).length === 1 && fieldErrors.email === "EMAIL_TAKEN" ? 409 : 400

      return response.status(statusCode).json({
        success: false,
        message: "Validation failed",
        fieldErrors
      })
    }

    const salt = bcrypt.genSaltSync()
    const hashedPassword = bcrypt.hashSync(data.password, salt)

    user.password = hashedPassword
    const savedUser = await user.save({ validateBeforeSave: false })

    response.status(201).json({
      success: true,
      message: "User created successfully",
      response: {
        savedUser
      }
    })
  } catch (error) {
    if (error?.code === 11000 && error?.keyPattern?.email) {
      return response.status(409).json({
        success: false,
        message: "Validation failed",
        fieldErrors: {
          email: "EMAIL_TAKEN"
        }
      })
    }

    if (error?.name === "ValidationError") {
      return response.status(400).json({
        success: false,
        message: "Validation failed",
        fieldErrors: toFieldErrors(error)
      })
    }

    response.status(500).json({
      success: false,
      message: "Something went wrong during signup",
      response: error
    })
  }
})

router.post("/login", async (request, response) => {
  try {
    const loginData = normalizeLoginData(request.body)
    const fieldErrors = validateLoginData(loginData)

    if (Object.keys(fieldErrors).length > 0) {
      return response.status(400).json({
        success: false,
        message: "Validation failed",
        fieldErrors
      })
    }

    const user = await User.findOne({ email: loginData.email })

    if (user && bcrypt.compareSync(loginData.password, user.password)) {
      response.status(200).json({
        success: true,
        message: "Login successful",
        response: {
          email: user.email,
          id: user._id,
          accessToken: user.accessToken
        }
      })
    } else {
      response.status(401).json({
        success: false,
        message: "Invalid email or password",
        response: null
      })
    }
  } catch (error) {
    response.status(500).json({
      success: false,
      message: "Something went wrong during login",
      response: error
    })
  }
})

export default router
