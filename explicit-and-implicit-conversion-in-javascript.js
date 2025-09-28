/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


// Part 1: Debugging fixes with explicit conversions and explanations

// Bug 1: although `"5" - 2` will implicitly convert "5" to number and give 3,
// it's clearer and safer to convert explicitly when we intend numeric math.
let result = Number("5") - 2; // Number("5") -> 5, then 5 - 2 = 3
console.log("The result is:", result, "(type:", typeof result + ")");

// Bug 2: Boolean("false") returns true because any non-empty string is truthy.
// If the string contains the literal "true"/"false" and we want to interpret
// it as a boolean value, we must parse it explicitly.
let stringBool = "false";
// Convert the string "true"/"false" to an actual boolean value.
// We lower-case first to handle variants like "True" or "FALSE".
let isValid = (String(stringBool).toLowerCase() === 'true');
console.log('String before:', stringBool, '(type', typeof stringBool + ')', '-> parsed boolean:', isValid);
if (isValid) {
  console.log("This is valid!");
} else {
  console.log("Not valid (as expected for the string 'false').");
}

// Bug 3: age is a string. Using + with a number causes string concatenation.
// Use Number() to convert to numeric before arithmetic.
let age = "25";
let totalAge = Number(age) + 5; // Number("25") -> 25, then 25 + 5 = 30
console.log("Total Age:", totalAge, "(type:", typeof totalAge + ")");


// Part 2: Examples of implicit and explicit conversion (including edge cases)

console.log('\n--- Implicit Conversion Examples ---');

let implicitAdd = "5" + 3; // number 3 is coerced to string -> "53"
console.log('"5" + 3 =>', implicitAdd, '(type:', typeof implicitAdd + ')');

let implicitSub = "5" - 3; // "5" coerced to number -> 2
console.log('"5" - 3 =>', implicitSub, '(type:', typeof implicitSub + ')');

// Edge case: undefined -> Number(undefined) is NaN
console.log('Number(undefined) =>', Number(undefined), '(type:', typeof Number(undefined) + ')');

// Edge case: null conversions
console.log('Boolean(null) =>', Boolean(null), '(null is falsy)');
console.log('String(null) =>', String(null), '(becomes the string "null")');



console.log('\n--- Explicit Conversion Examples ---');
// Convert from string to number explicitly
let s = "42";
console.log('Before:', s, typeof s);
let n = Number(s);
console.log('After Number():', n, typeof n);

// Explicit conversion resulting in NaN (edge case)
let badNumber = Number("not-a-number");
console.log('Number("not-a-number") =>', badNumber, '(is NaN:', Number.isNaN(badNumber) + ')');

