/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const fs = require('fs-extra')
const rimraf = require('rimraf')

const srcPath = path.resolve(__dirname, '.')
const destFolder = path.resolve(__dirname, '../maktub/node_modules/react-native-track-player')

rimraf(destFolder, function() {
  console.log('all cleaned up!')
  fs.copy(srcPath, destFolder, function(err) {
    if (err) {
      return console.error(err)
    }
    console.log('succesfully copied track player to maktub')
  })
})
