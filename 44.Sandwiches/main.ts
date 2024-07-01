//Assignment No :- 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
let order1:string[] = ["cheese", "tomato", "lettuce"];
let order2:string[] = ["tuna", "mayo", "cucumber"];
let order3:string[] = ["chicken", "egg", "bacon"];
let sandwich = (array:string[]) => {
let message:string = `You ordered a sandwich with "${array.join(", ")}"`;
return message;

};
console.log("Order 1 :", sandwich(order1));
console.log("Order 2 :", sandwich(order2));
console.log("Order 3 :", sandwich(order3));