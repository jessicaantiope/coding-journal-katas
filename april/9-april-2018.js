// Kata - Codewars - return a string in reversed order with only alphabetical characters

function reverseLetter(str) {
  return str.replace(/[^a-z]/g, "").split("").reverse().join("")
}