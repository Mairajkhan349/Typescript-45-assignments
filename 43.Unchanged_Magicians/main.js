//Assignment No :- 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let nameOfMagicians = ["Harry Houdini", "David Blaine", "Teller"];
let copyingArray = (array) => {
    return [...array];
};
let copyOfArray = copyingArray(nameOfMagicians);
let make_great = (array) => {
    for (let i = 0; i < array.length; i++) {
        array[i] = `The Great ${array[i]}`;
    }
    ;
};
make_great(copyOfArray);
let show_magicians = (array) => {
    return array;
};
console.log("Original Array : ", show_magicians(nameOfMagicians));
console.log("Copy of Array : ", show_magicians(copyOfArray));
export {};
