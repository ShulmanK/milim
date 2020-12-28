const express = require("express")
const mongoose = require("mongoose")
const app = express()

app.use(express.json())
app.use("/api/words", require("./routes/words.routes"))

const PORT = 5000
const mongoUrl = "mongodb://localhost:27017/milim"

async function start() {
  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    app.listen(PORT, () => {
      console.log(`Example app listening at http://localhost:${PORT}`)
    })
  } catch (err) {
    console.log("Server Error", err.message)
    process.exit(1)
  }
}

start()

app.get("/", (req, res) => {
  res.send("Hello World")
})
