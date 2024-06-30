//Assignment No :- 42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let nameOfMagicians: string[] = ["David Copperfield", "Doug Henning", "Lance Burton"];
let  make_great = (array:string[]) => {
for (let i = 0; i < array.length; i++) {
    array[i] = `The Great ${array[i]}`;
};
};
make_great(nameOfMagicians);
console.log(nameOfMagicians);
