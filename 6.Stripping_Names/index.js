"use strict";
// Assignment No :- 6
// Question :- Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces
const person_Name = "  \n\t Mairaj Khan \t\n   ";
console.log(person_Name);
const person_Name_Without_White_Spaces = person_Name.trim();
console.log(person_Name_Without_White_Spaces);
