require('dotenv').config()

const express = require('express')
const app = express()


app.get('/health', (_, res) => {
  res.status(200).json({
    status: "OK",
  })
})




const port = process.env.PORT || 6666
const server = app.listen(port, () => {
  console.log(`Express server listening on port ${port}`)
})