//Assignment No :- 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
let string1 = "Hello";
console.log("\nTests for equality and inequality with strings :-");
console.log(string1 === "Hello");
console.log(string1 !== "Hello");
// • Tests using the lower case function
let name = "MANAHIL";
console.log("Tests using the lower case function :-");
console.log(name.toLowerCase() === "manahil");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 10;
console.log("Tests for equality and inequality with numbers :-");
console.log(num1 === 10);
console.log(num1 !== 10);
console.log("Tests using greater than and less than :-");
console.log(num1 > 5);
console.log(num1 < 5);
console.log("Tests using greater than or equal to and less than or equal to :-");
console.log(num1 >= 5);
console.log(num1 <= 5);
// • Tests using "and" and "or" operators
let num2 = 20;
let num3 = 30;
console.log("Tests using 'and' and 'or' operators :-");
console.log(num2 === 20 && num3 === 30);
console.log(num3 < 10 || num2 < 10);
// • Test whether an item is in a array
let arrayOfNames = ["Manahil", "Raj", "Rohan", "Rahul"];
console.log("Test whether an item is in a array :-");
console.log(arrayOfNames.includes("Rahul") === true);
// • Test whether an item is not in a array
console.log("Test whether an item is not in a array :-");
console.log(arrayOfNames.includes("Hamza Alvi") === false);
export {};
