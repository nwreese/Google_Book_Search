const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  synopsis: String,
  description: {type: String, required: true },
  image: {data: Buffer, contentType: String},
  link: {type: String, required: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
