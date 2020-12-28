const { Schema, model, Types } = require("mongoose")

const schema = new Schema({
  word: { type: Object, required: false },
})

module.exports = model("Word", schema)
