var express = require('express')
var app = express()
var router = express.Router()

const { runScad, cleanup } = require('./runScad')

const PORT = 8080

router.use(function (req, res, next) {
  console.log('/' + req.method)
  next()
})

const main = 'cube([10,10,10]);'

router.get('/', async function (req, res) {
  const { result, tempFile } = await runScad({ main })
  console.log(`got result in route: ${result}, file is: ${tempFile}`)
  res.sendFile(`/home/rendering/${tempFile}/output.png`)
  res.on('finish', () => {
    setTimeout(() => {
      cleanup(tempFile)
    }, 1000)
  })
})

app.use('/', router)

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})
