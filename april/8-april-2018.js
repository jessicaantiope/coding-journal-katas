//Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil if input is empty string or null/nil.

function greet(name) {
  return name == null || name == "" ? null : `hello ${name}!` 
}

// You have to create a method, that corrects a given time string. There was a problem in addition, so many of the time strings are broken. Time-Format is european. So from "00:00:00" to "23:59:59". 
// If the input-string is null or empty return exactly this value!
// If the time-string-format is invalid, return null.
function divRemainder (n, divider) {
  return [Math.floor(n / divider), n % divider]
}

function timeCorrect(timestring) {
  if (timestring == null || timestring == "") {
    return timestring
  } else if (!timestring.match(/\d\d:\d\d:\d\d/)) {
    return null
  } 
  
  let [hours, mins, seconds] = timestring.match(/\d+/g).map((s) => parseInt(s))

  let [remSec, newSeconds] = divRemainder(seconds, 60)
  let [remMin, newMins] = divRemainder((mins + remSec), 60)
  let newHours = divRemainder((hours + remMin), 24)[1]
  
  return [newHours, newMins, newSeconds].map((n) => n < 10 ? `0${n}` : n).join(":")
}

//Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

let capitals = function (word) {
  return word.split("").map(function(char, i) {
    return (char == char.toUpperCase()) ? i : null
  }).filter((i) => (i != null))
}

// Find the sum of the odd numbers within an array, after cubing the initial integers. This function will return undefined (NULL in PHP) if any of the values aren't numbers.


function totalOddNums(sum, n) {
  return ((n % 2) != 0) ? sum + n : sum
}

function cubeOdd(arr) {
  if(!arr.every(Number.isInteger)) {
    return undefined
  }
  
  return arr.map((n) => n * n * n).reduce(totalOddNums, 0)
}

