const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Title is Required"],
    trim: true,
    // maxlength: [1, "Title must be 5 Ch Long"],
  },
  tasks: [String]
},
{timestamps: true}
);

module.exports = mongoose.model("Todo", TodoSchema);
