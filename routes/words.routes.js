const { Router } = require("express")
const router = Router()
const Word = require("../models/Word")

router.get("/all", async (req, res, next) => {
  try {
    res.status(200).json({ result: "words" })
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" })
  }
})

router.post("/create", async (req, res) => {
  try {
    console.log("req body", req.body)
    const { word } = req.body
    console.log("newWord", word)

    const newWord = await Word({
      word,
    })
    const response = await newWord.save()
    console.log("res in mongoose", response)
    res.status(201).json({ status: "The word was created in collection" })
  } catch (err) {
    res
      .status(500)
      .json({ status: "Something went wrong. The word was not created" })
  }
})

module.exports = router
