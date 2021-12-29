const mongoose = require("mongoose");

require("dotenv").config({ path: "variables.env" });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("Db Conectada");
  } catch (error) {
    console.log(error);
    process.exit(1); // para a app
  }
};

module.exports = connectDB;
