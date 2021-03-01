const { exec } = require('child_process')
const { promises } = require('fs')
const { writeFile } = promises
const { nanoid } = require('nanoid')

module.exports.runScad = async ({
  file,
  settings: { size: { x = 500, y = 500 } = {} } = {}, // TODO add view settings
} = {}) => {
  const tempFile = await makeFile(file)
  const result = await runCommand(
    `xvfb-run --auto-servernum --server-args "-screen 0 1024x768x24" openscad -o ./${tempFile}/output.png --imgsize=${x},${y} ./${tempFile}/main.scad`
  )
  return { result, tempFile }
}

module.exports.stlExport = async ({ file } = {}) => {
  const tempFile = await makeFile(file)
  const result = await runCommand(
    `openscad -o ./${tempFile}/output.stl ./${tempFile}/main.scad`
    // `xvfb-run --auto-servernum --server-args "-screen 0 1024x768x24" openscad -o ./${tempFile}/output.png --imgsize=${x},${y} ./${tempFile}/main.scad`
  )
  return { result, tempFile }
}

module.exports.cleanup = async (file) => {
  await runCommand(`rm -rf ./${file}`)
}

async function makeFile(file) {
  const tempFile = nanoid()
  console.log(`file to write: ${file}`)

  await runCommand(`mkdir ${tempFile}`)
  await writeFile(`./${tempFile}/main.scad`, file)
  return tempFile
}

async function runCommand(command, timeout = 5000) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`)
        reject(`error: ${error.message}`)
        return
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`)
        reject(`stderr: ${stderr}`)
        return
      }
      console.log(`stdout: ${stdout}`)
      resolve(`stdout: ${stdout}`)
    })
    setTimeout(() => {
      reject('timeout')
    }, timeout)
  })
}
