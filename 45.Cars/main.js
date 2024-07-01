//Assignment No :- 45
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
let car = (manufacturer, model, ...rest) => {
    let carObj = {
        Manufacturer: manufacturer,
        Model: model,
        ...Object.assign({}, ...rest),
    };
    return carObj;
};
console.log("Car 1 : ", car("Suzuki", "Swift", { color: "red" }, { features: ["Navigation", "Sunroof"] }));
console.log("Car 2 : ", car("Toyota", "Camry", { color: "blue" }, { features: ["Power Window", "Sunroof"] }));
console.log("Car 3 : ", car("Honda", "Civic", { color: "green" }, { features: ["Navigation", "Leather Seats"] }));
export {};
