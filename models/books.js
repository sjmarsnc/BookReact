const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, 
    trim: true
  },
  // url string for thumbnail image
  authors: { [String],
      default: [] 
  },
  description: {
      type: String, 
      trim: true
  }
  // url for books web page - unique index
  link: {
    type: String,
    default: "",
    unique: true
  },
  image: { 
      type: String, 
      default: "" 
  }
});

const books = mongoose.model("books", booksSchema);

module.exports = books;

 