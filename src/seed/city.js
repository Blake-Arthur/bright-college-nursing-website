require("dotenv").config();
const mongoose = require("mongoose");

const City = require("../models/city.schema");
const District = require("../models/districts.schema");
const cities = require("./data/city.odisha.json");

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    for (const city of cities) {
      //Find the district by name
      const districtDoc = await District.findOne({
        name: city.district,
      });

      if (!districtDoc) {
        console.warn(`District not found: ${city.district}, ${city.name}`);
        continue;
      }

      //Insert or update city with district ObjectId
      await City.updateOne(
        { name: city.name, district: districtDoc._id },
        {
          name: city.name,
          district: districtDoc._id,
        },
        { upsert: true },
      );
    }

    console.log("Cities seeded successfully");

    await mongoose.disconnect();
    console.log("MongoDB disconnected");

    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    await mongoose.disconnect();
    process.exit(1);
  }
}

seed();
