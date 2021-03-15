const express = require("express")
const mongoose = require("mongoose")
var cors = require("cors")
const wordsRouter = require("./routes/words.routes")
const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/words", wordsRouter)

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
