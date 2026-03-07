require("dotenv").config();
const mongoose = require("mongoose");
const District = require("../models/districts__Schema");
const districts = require("./data/districts.odisha.json");

async function seed() {
  try {
    //Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    // Loop through districts JSON
    for (const district of districts) {
      await District.updateOne(
        { name: district.name }, // filter
        { name: district.name }, // update data
        { upsert: true }, // insert if not exists
      );
    }

    console.log("Districts seeded successfully");

    await mongoose.disconnect();
    console.log("MongoDB disconnected");

    process.exit(0); // exit success
  } catch (error) {
    console.error("Seeding failed:", error);

    // ensure connection closes even on failure
    await mongoose.disconnect();
    process.exit(1); // exit with error
  }
}

seed();
