var co = require('co')

function fakeAjax (url, cb) {
  var fake_responses = {
    'file1': 'The first text',
    'file2': 'The middle text',
    'file3': 'The last text'
  }
  var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000

  console.log('Requesting: ' + url)

  setTimeout(function () {
    cb(fake_responses[url])
  }, randomDelay)
}

function output (text) {
  console.log(text)
}

function getFile (file) {
  return new Promise(function (resolve) {
    fakeAjax(file, resolve)
  })
}

co(function * loadFiles () {
  // seq
  output(yield getFile('file1'))
  output(yield getFile('file2'))
  output(yield getFile('file3'))
}).then(function (value) {
  output('Complete!')
}, function (err) {
  console.error(err.stack)
})
