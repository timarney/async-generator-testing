function * crossBridge () {
  const reply = yield 'What is your favorite color?'
  console.log(reply)
  if (reply !== 'yellow') return 'Wrong!'
  return 'You may pass.'
}

{
  const iter = crossBridge()
  const q = iter.next().value // Iterator yields question
  console.log(q)
  const a = iter.next('blue').value // Pass reply back into generator
  console.log(a)
}

console.log('==================================')

// What is your favorite color?
// blue
// Wrong!

{
  const iter = crossBridge()
  const q = iter.next().value
  console.log(q)
  const a = iter.next('yellow').value
  console.log(a)
}

// What is your favorite color?
// yellow
// You may pass.
