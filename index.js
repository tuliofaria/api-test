const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Server is running...')
})

app.get('/users', (req, res) => {
  res.send([{ id: 1, name: 'Tulio' }])
})

app.listen(80, (err) => {
  if (err) {
    console.log('Server is not running.')
  } else {
    console.log('server is running.')
  }
})
