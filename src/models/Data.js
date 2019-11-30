const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema({
  name: {
    type: String,
    required: [true, "missing name"]
  },
  profession: {
    type: String,
    required: [true, "missing profession"]
  },
  summary: {
    type: String,
    required: [true, "missiing summary"]
  },
  fbLink: {
    type: String
  },
  twLink: {
    type: String
  },
  igLink: {
    type: String
  },
  lkLink: {
    type: String
  },
  githubLink: {
    type: String
  }
});

DataSchema.set("toJSON", { virtual: true });

module.exports = mongoose.model("Data", DataSchema);
