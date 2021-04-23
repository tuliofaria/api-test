const https = require('https')
const fs = require('fs')
const app = require('./app')

const options = {
  // tls
  key: fs.readFileSync(
    '/etc/letsencrypt/live/api-test.devpleno.com/privkey.pem'
  ),
  cert: fs.readFileSync(
    '/etc/letsencrypt/live/api-test.devpleno.com/fullchain.pem'
  ),
}

const server = https.createServer(options, app)
server.listen(443, () => {
  console.log('server running...')
  console.log('creating webhook for pix')
})
