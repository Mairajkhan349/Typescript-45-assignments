//Assignment No:- 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
//* The following code is exported fron exercise 17*/
let names_Of_Guests = [
    "Riaz Ahmed",
    "Dr.Aftab Ahmed",
    "Irfan Ali",
    "Abdul Hameed Soomro",
];
let absent_Guest = "Dr.Aftab Ahmed";
let new_Guest = "Pervaiz Ahmed";
names_Of_Guests[1] = new_Guest;
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
console.log("\nsorry we can not arrange big table,Only two people will be invited\n");
while (names_Of_Guests.length > 2) {
    let removed_Guest = names_Of_Guests.pop();
    console.log(`Sorry Mr. ${removed_Guest},You are not invited for dinner.`);
}
for (let i = 0; i < names_Of_Guests.length; i++) {
    console.log("\n\nDear Mr." +
        names_Of_Guests[i] +
        "\nYou are still invited in the party\nThank You!");
}
;
names_Of_Guests.splice(0, 2);
console.log(names_Of_Guests);
//*The above code is exported from exercise 17 */
//The code for exercisw 19 starts here
console.log(`\n\nTotal Number of Guests: ${names_Of_Guests.length}`);
export {};
