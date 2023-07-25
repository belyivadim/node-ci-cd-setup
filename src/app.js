const express = require('express')

const app = express()

app.get('/api', (req, res) => {
  res.status(200).json({
    message: 'OK'
  })
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
