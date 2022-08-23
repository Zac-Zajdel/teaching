/**
 * Give an example of each of the following data types
 *
 * 1. String
 * 2. Boolean
 * 3. Number
 * 4. BigInt
 * 5. Null
 * 6. Undefined
 * 7. Object
 *
 * Bonus:
 * - Verify using the typeof operator that a value of type string is indeed of type string
 * - Change a variable called age that is set to 21 to a string of '21'. What happened?
 *
 */

// 1:
let movies = "The Aviator"
// 2:
const isTheEarthFlat = false
const isJesseBadAtCoding = true
// 3:
let x = 74
let y = x - 5
console.log(y)
// 4:
let number = 1234567
// let number2 = new BigInt(987654)
// 5:
const data = null
// 6:
let cat;
cat = undefined
// 7:
const Jesse = {lastname: "Veronie", age: "26", eyecolor: "Hazel"}
// Bonus
console.log(typeof Jesse)
let age = 26
age = "26"
console.log(age)
