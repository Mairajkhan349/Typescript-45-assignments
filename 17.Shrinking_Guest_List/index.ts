// Assignment No :- 17
// Question :- Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

//**The following code is imported from exercise 16 */
let names_Of_Guests: string[] = [
    "Riaz Ahmed",
    "Dr.Aftab Ahmed",
    "Irfan Ali",
    "Abdul Hameed Soomro",
  ];
  let absent_Guest: string = "Dr.Aftab Ahmed";
  let new_Guest: string = "Pervaiz Ahmed";
  names_Of_Guests[1] = new_Guest;

//   for (let i = 0; i < names_Of_Guests.length; i++) {
//     console.log(
//       "\n\nDear Mr." +
//         names_Of_Guests[i] +
//         "\nIt is our pleasure to have you in the party\nThank You!"
//     );
//   }

  console.log("\nGood news! We find a bigger Table so we are inviting 3 more guest.\n");

names_Of_Guests.unshift("Meer Murtaza");
names_Of_Guests.splice(2 , 0 ,"Ashiq Habib Palijo");
names_Of_Guests.push("Tahir Ali Mahar");

for (let i = 0; i < names_Of_Guests.length; i++) {
    console.log(
      "\n\nDear Mr." +
        names_Of_Guests[i] +
        "\nIt is our pleasure to have you in the party\nThank You!"
    );
  };
//** The above code is imported from exercise 16 */
//** The code for exercise 17 begins from here */ 
console.log("\nsorry we can not arrange big table,Only two people will be invited\n");
while (names_Of_Guests.length > 2) {
   let removed_Guest = names_Of_Guests.pop();
   console.log(`Sorry Mr. ${removed_Guest},You are not invited for dinner.`);
   
}
for (let i = 0; i < names_Of_Guests.length; i++) {
    console.log(
      "\n\nDear Mr." +
        names_Of_Guests[i] +
        "\nYou are still invited in the party\nThank You!"
    );
  };
  names_Of_Guests.splice(0,2);
  console.log(names_Of_Guests);     //**the array is now empty.*/

  