/**
 * Exercise 1 : Age Difference
Instruction
Given the years two people were born, find the date when the younger one is exactly half the age of the older.
Notes: The dates are given in the format YYYY
 */

let year1 = 2000
let year2 = 2010

let ageDifference = year2 - year1
let yearHalfAge = ageDifference / 2
let halfAgeYear = year2 + yearHalfAge
console.log(halfAgeYear)

/**
 * Exercise 2 : Zip Codes
Instruction
Harder exercise
Hint : This exercise has 2 parts. First, do this exercise without Regular Expressions, then do it using Regular Expressions

While working in a Post Office you must have the clients’ zip code in order to send them their letters.
Ask the client for their zip code and console.log “success” or “error” based on the following rules.
Zip codes consists of 5 numbers
Must only contain numbers
Must not contain any whitespace (spaces)
Must not be greater than 5 digits in length
 */

//Part 1 : Without RegEx

//let zipCode = prompt("Enter a zip code : ")
//zipCode = parseInt(zipCode)

/*if(zipCode.length === 5 && isNaN(zipCode) && zipCode.indexOf(" ") !== -1) {
    console.log("success")
} else {
    console.log("error")
}*/

//Part 2 : With RegEx

let zipCode2 = prompt("Enter a zip code: ");

let regex = /^\d{5}$/;
if (regex.test(zipCode2)) {
    console.log("success");
} else {
    console.log("error");
}

/**
 * Exercise 3 : Secret Word
Instruction
Harder exercise
Hint : Use Regular Expressions

Prompt the user for a word and save it to a variable.
Delete all the vowels of the word and console.log the result.
Bonus: Replace the vowels with another character and console.log the result
 */

let word = prompt("Enter a word : ")
let replacedVowels = /[aeiou]/gi
let result = word.replace(replacedVowels, "*")
console.log(result)