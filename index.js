// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

//append destructively
function destructivelyAppendCat(name) {
  cats.push(name)
}

//prepend destructively
function destructivelyPrependCat(name) {
  cats.unshift(name)
}

//remove first destructively
function destructivelyRemoveFirstCat() {
  cats.shift()
}

//remove last destructively
function destructivelyRemoveLastCat() {
  cats.pop()
}

//append
function appendCat(name) {
  return [...cats, name]
}

//prepend
function prependCat(name) {
  return [name, ...cats]
}

//remove first
function removeFirstCat() {
  return cats.slice(1)
}

//remove last
function removeLastCat() {
  return cats.slice(0, cats.length - 1)
}