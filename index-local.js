const app = require('./app')

app.listen(80, (err) => {
  if (err) {
    console.log('Server is not running.')
  } else {
    console.log('server is running.')
  }
})
