const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
var app = express();
const mongoose = require("mongoose");

var API = require("./routes/api-routes");
// var APIkey = require("./routes/APIkey");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("public"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

// routes
require("./routes/api-routes.js")(app);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  if (process.env.NODE_ENV === "production") {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  } else {
    res.sendFile(path.join(__dirname, "./client/public"));
  }
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
