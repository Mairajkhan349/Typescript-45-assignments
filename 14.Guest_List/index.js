"use strict";
// Assignment No:- 14
// Question : Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let name_Of_Guests = ["Riaz Ahmed", "Dr.Aftab Ahmed", "Irfan Ali", "Abdul Hameed Soomro"];
for (let i = 0; i < name_Of_Guests.length; i++) {
    console.log("Dear Mr." + name_Of_Guests[i] + ",\nIt is pleasure to have you in the party.\nThank You!\n\n");
}
