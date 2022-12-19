import mongoose from "mongoose";

const URI: string = "mongodb://localhost/booksDB";

mongoose.connect(URI);
mongoose.connection
  .on("open", () => {
    console.log("DataBase Connected");
  })
  .once("error", (error) => {
    console.log(`Failed to connect to the Database \n ${error}`);
  });
