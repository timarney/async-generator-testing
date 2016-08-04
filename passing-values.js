function * foo (x) {
  const y = 2 * (yield (x + 1))
  const z = yield (y / 3)
  return (x + y + z)
}

const genit = foo(5)

console.log(genit.next())
console.log(genit.next(12))
console.log(genit.next(13))
