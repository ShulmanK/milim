const { Schema, model, Types } = require("mongoose")

const schema = new Schema({
  verb: { type: String, required: true },
  
})

module.exports = model("Word", schema)
