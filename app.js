const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Server is running...')
})

app.get('/users', (req, res) => {
  res.send([{ id: 1, name: 'Tulio' }])
})
app.get('/clients', (req, res) => {
  res.send([{ id: 2, name: 'aaao' }])
})

module.exports = app
