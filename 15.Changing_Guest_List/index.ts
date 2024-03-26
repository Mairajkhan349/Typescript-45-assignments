// Assignment No :- 15
// Question : Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let names_Of_Guests: string[] = [
  "Riaz Ahmed",
  "Dr.Aftab Ahmed",
  "Irfan Ali",
  "Abdul Hameed Soomro",
];
for (let i = 0; i < names_Of_Guests.length; i++) {
  console.log(
    "\n\nDear Mr." +
      names_Of_Guests[i] +
      "\nIt is our pleasure to have you in the party\nThank You!"
  );
}
console.log("     \n\n\tGuest list has been changed!\n\t  ");

let absent_Guest: string = "Dr.Aftab Ahmed";
let new_Guest: string = "Pervaiz Ahmed";
names_Of_Guests[1] = new_Guest;
for (let i = 0; i < names_Of_Guests.length; i++) {
  console.log(
    "\n\nDear Mr." +
      names_Of_Guests[i] +
      "\nIt is our pleasure to have you in the party\nThank You!"
  );
}
console.log(`${absent_Guest} is not coming to the party.`);
