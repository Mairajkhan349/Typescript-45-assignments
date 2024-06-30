//Assignment No :- 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

let make_shirt = (size: string = "large", message: string = "I love TypeScript") => {
    console.log(`The shirt size is ${size} and the message printed on it is "${message}".`);
}
// Large shirt with default message
make_shirt();

// Medium shirt with default message
make_shirt("medium");

//A shirt of any size with a different message
make_shirt("small", "TypeScript is awesome");
