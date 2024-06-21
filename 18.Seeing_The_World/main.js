//Assignment No:- 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
let placesToVisit = ["Switzerland", "Turkey", "London", "New York", "Paris"];
// • Print your array in its original order.
console.log("Original Order:", placesToVisit);
// • Print your array in alphabetical order without modifying the actual list.
let alphabeticalOrder = [...placesToVisit].sort();
console.log("Alphabetical Order:", alphabeticalOrder);
// • Show that your array is still in its original order by printing it.
console.log("Original Order:", placesToVisit);
// • Print your array in reverse alphabetical order without changing the order of the original list.
let reverseAlphabeticalOrder = [...placesToVisit].sort().reverse();
console.log("Reverse Alphabetical Order:", reverseAlphabeticalOrder);
// • Show that your array is still in its original order by printing it again.
console.log("Original Order:", placesToVisit);
// • Reverse the order of your list. Print the array to show that its order has changed.
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
placesToVisit.reverse();
console.log("Original Order:", placesToVisit);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
placesToVisit.sort();
console.log("Alphabetical Order:", placesToVisit);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
placesToVisit.sort().reverse();
console.log("Reverse Alphabetical Order:", placesToVisit);
export {};
