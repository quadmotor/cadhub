const { exec } = require('child_process')
const { promises } = require('fs')
const { resolve } = require('path')
const { writeFile } = promises
const { nanoid } = require('nanoid')

module.exports.runScad = async (files) => {
  const tempFile = nanoid()
  console.log(`file to write: ${files.main}`)
  await runCommand(`mkdir ${tempFile}`)
  await writeFile(`./${tempFile}/main.scad`, files.main)
  const result = await new Promise((resolve, reject) => {
    const command = `xvfb-run --auto-servernum --server-args "-screen 0 1024x768x24" openscad -o ./${tempFile}/output.png --imgsize=500,500 ./${tempFile}/main.scad`
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
  })
  console.log(`result is ${result}`)
  setTimeout(() => {
    resolve('timeout')
  }, 5000)
  return { result, tempFile }
}

module.exports.cleanup = async (file) => {
  await runCommand(`rm -rf ./${file}`)
}

async function runCommand(command) {
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
      resolve('timeout')
    }, 5000)
  })
}
