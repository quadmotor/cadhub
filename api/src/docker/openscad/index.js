var express = require('express')
var cors = require('cors')
var app = express()
var router = express.Router()
app.use(express.json())
// TODO if we decide to only access this container server side, that cors won't be needed.
app.use(cors())

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

router.post('/snapshot', async function (req, res) {
  const { file, settings } = req.body
  const { error, result, tempFile } = await runScad({ file, settings })
  if (error) {
    res.status(400).json({ error, tempFile })
  } else {
    console.log(`got result in route: ${result}, file is: ${tempFile}`)
    res.sendFile(`/home/rendering/${tempFile}/output.png`)
  }
  res.on('finish', () => delayedCleanUp(tempFile))
})

router.post('/export', async function (req, res) {
  const { file } = req.body
  const { error, result, tempFile } = await stlExport({ file })
  if (error) {
    res.status(400).json({ error, tempFile })
  } else {
    console.log(`got result in route: ${result}, file is: ${tempFile}`)
    res.sendFile(`/home/rendering/${tempFile}/output.stl`)
  }
  res.on('finish', () => delayedCleanUp(tempFile, 5000))
})

app.use('/', router)

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})
