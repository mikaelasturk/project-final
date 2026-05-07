import { User } from "../models/User"
import bcrypt from "bcrypt"

export const seedingUsers = async () => {
  const salt = 10

  if (process.env.RESET_SEED_DB === "true") {
    console.log("Resetting seeding database...");
    await User.deleteMany()
  }

  await User.updateOne(
    { email: "carolina.oldertz@gmail.com" },
    {
      $setOnInsert: {
      firstName: "Carolina",
      lastName: "Oldertz",
      email: "carolina.oldertz@gmail.com",
      password: bcrypt.hashSync("Carolina1", salt),
      city: "Stockholm",
      justifyMembership: "Vill bidra till ett starkare kvinnligt foretagsnatverk.",
      workStatus: {
        owner: true,
        worker: false,
        startUp: false,
        searching: false,
        other: false,
        otherText: ""
      },
      isPremium: true,
      premiumStartDate: new Date(),
      premiumEndDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      }
    },
    { upsert: true, setDefaultsOnInsert: false }
  )

  await User.updateOne(
    { email: "mikaelasturk@gmail.com" },
    {
      $setOnInsert: {
      firstName: "Mikaela",
      lastName: "Sturk",
      email: "mikaelasturk@gmail.com",
      password: bcrypt.hashSync("Mikaela1", salt),
      city: "Stockholm",
      justifyMembership: "Vill ta del av kunskap, events och professionellt natverk.",
      workStatus: {
        worker: true,
        owner: false,
        startUp: false,
        searching: false,
        other: false,
        otherText: ""
      },
      isPremium: false
      }
    },
    { upsert: true, setDefaultsOnInsert: false }
  )
}