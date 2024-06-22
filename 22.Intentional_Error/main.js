//Assignment No :- 22
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// This code will produce an index error because the index 5 is out of bounds for the array
let myArray = [1, 2, 3, 4, 5];
let response = myArray[5];
if (response === undefined) {
    console.log("Index Error! Your index number is not valid.");
}
else {
    console.log(`Number : ${response}`);
}
;
export {};
