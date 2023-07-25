const express = require('express')

const app = express()

const users = [ 'Admin', 'Moder', 'User' ]

app.get('/api', (req, res) => {
  res.status(200).json({
    message: 'OK'
  })
})

app.get('/api/plus-one', (req, res) => {
  res.status(200).json({
    answer: parseInt(req.query.number) + 1
  })
})

app.get('/api/users/:user_id', (req, res) => {
  if (req.params.user_id >= users.length) {
    return res.sendStatus(404)
  }

  res.status(200).json({
    username: users[req.params.user_id]
  })
})


const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
