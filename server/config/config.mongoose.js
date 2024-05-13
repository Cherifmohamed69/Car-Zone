const mongoose = require("mongoose");
const { DB } = process.env;

const uri = `mongodb://127.0.0.1:27017/${DB}`;

mongoose
  .connect(uri)
  .then(() => console.log(`Established a connection to the ${DB} database`))
  .catch((err) =>
    console.log(
      "❌❌❌❌ Something went wrong when connecting to the database",
      err
    )
  );
