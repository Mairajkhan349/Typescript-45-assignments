"use strict";
// Assignment No :- 3
// Question : Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let person_Name = "Mairaj khan soomro";
let upper_Case = person_Name.toUpperCase();
let lower_Case = person_Name.toLowerCase();
let title_Case = person_Name
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase())
    .join(" ");
console.log(`Name in Upper Case : ${upper_Case}`);
console.log(`Name in Lower Case : ${lower_Case}`);
console.log(`Name in Title Case : ${title_Case}`);
