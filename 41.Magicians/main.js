//Assignment No :- 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let nameOfMagicians = ["David Copperfield", "Doug Henning", "Lance Burton"];
function show_magicians(array) {
    for (let magician of array) {
        console.log(magician);
    }
    ;
}
;
show_magicians(nameOfMagicians);
export {};
