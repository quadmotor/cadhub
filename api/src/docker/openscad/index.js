var express = require('express')
var app = express()
var router = express.Router()
app.use(express.json())

const { runScad, cleanup } = require('./runScad')

const PORT = 8080

router.use(function (req, res, next) {
  console.log('/' + req.method)
  next()
})

router.get('/', async function (req, res) {
  const { file, settings } = req.body
  const { result, tempFile } = await runScad({ file, settings })
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
