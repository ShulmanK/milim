const { Schema, model, Types } = require("mongoose")

const schema = new Schema({
  word: { type: String, required: true },
})

module.exports = model("Word", schema)
