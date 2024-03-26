"use strict";
// Assignment N0 :- 16
// Question :- More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// **The following  code is importerd from exercise 15** //
let names_Of_Guests = [
    "Riaz Ahmed",
    "Dr.Aftab Ahmed",
    "Irfan Ali",
    "Abdul Hameed Soomro",
];
//   for (let i = 0; i < names_Of_Guests.length; i++) {
//     console.log(
//       "\n\nDear Mr." +
//         names_Of_Guests[i] +
//         "\nIt is our pleasure to have you in the party\nThank You!"
//     );
//   }
//   console.log("     \n\n\tGuest list has been changed!\n\t  ");
let absent_Guest = "Dr.Aftab Ahmed";
let new_Guest = "Pervaiz Ahmed";
names_Of_Guests[1] = new_Guest;
for (let i = 0; i < names_Of_Guests.length; i++) {
    console.log("\n\nDear Mr." +
        names_Of_Guests[i] +
        "\nIt is our pleasure to have you in the party\nThank You!");
}
//   console.log(`\n\t${absent_Guest} is not coming to the party.`);
//  ** The above code is imported from exercise 15 ** //
// ** the code for exercise 16 starts from here. **//
console.log("\nGood news! We find a bigger Table so we are inviting 3 more guest.\n");
names_Of_Guests.unshift("Meer Murtaza");
names_Of_Guests.splice(2, 0, "Ashiq Habib Palijo");
names_Of_Guests.push("Tahir Ali Mahar");
for (let i = 0; i < names_Of_Guests.length; i++) {
    console.log("\n\nDear Mr." +
        names_Of_Guests[i] +
        "\nIt is our pleasure to have you in the party\nThank You!");
}
;
