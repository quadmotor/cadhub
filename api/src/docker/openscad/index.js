var express = require('express')
var app = express()
var router = express.Router()
app.use(express.json())

const { runScad, cleanup, stlExport } = require('./runScad')

const PORT = 8080

router.use(function (req, res, next) {
  console.log('/' + req.method)
  next()
})

const delayedCleanUp = (tempFile, delay = 1000) => {
  setTimeout(() => {
    cleanup(tempFile)
  }, delay)
}

router.get('/snapshot', async function (req, res) {
  const { file, settings } = req.body
  const { result, tempFile } = await runScad({ file, settings })
  console.log(`got result in route: ${result}, file is: ${tempFile}`)
  res.sendFile(`/home/rendering/${tempFile}/output.png`)
  res.on('finish', () => delayedCleanUp(tempFile))
})

router.get('/export', async function (req, res) {
  const { file } = req.body
  const { result, tempFile } = await stlExport({ file })
  console.log(`got result in route: ${result}, file is: ${tempFile}`)
  res.sendFile(`/home/rendering/${tempFile}/output.stl`)
  res.on('finish', () => delayedCleanUp(tempFile, 5000))
})

app.use('/', router)

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})
