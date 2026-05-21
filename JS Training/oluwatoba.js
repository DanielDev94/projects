// STRING METHODS
console.log("---STRING METHODS---");

let carName = "Chevrolet";
let carYear = 2025;
let userName = "   oluwatoba \uD800   ";
let userNum = 21;
let text = "Nice to see you. It is a pleasure meeting you";

console.log(carName.length);
console.log(carName.charAt(5));
console.log(carName.charCodeAt(4));
console.log(carName.codePointAt(6));
console.log(carName.concat(" ", carYear));
console.log(carName.at(6));
console.log(carName[0]);
console.log(carName.slice(6, 9));
console.log(carName.substring(6, 9));
console.log(carName.substr(6, 3));
console.log(carName.toUpperCase());
console.log(carName.toLowerCase());
console.log(userName.isWellFormed());
console.log(userName.toWellFormed());
console.log(userName.trim());
console.log(userName.trimStart());
console.log(userName.trimEnd());
// console.log(userNum.padStart(3, "0"));
// console.log(userNum.padEnd(3, "x"));
console.log(carName.repeat(3));
console.log(text.replace("Nice", "Good"));
console.log(text.replaceAll("you", "them"));
console.log(text.split("."));

// NUMBER METHODS
console.log("---NUMBER METHODS---");

let newNum = 2026;
let newNum2 = 20.8666;
let newNum3 = 12345678901234567890;
let newNum4 = "20.476, 30, 40";

console.log(newNum.toString());
console.log(newNum.toExponential(2));
console.log(newNum2.toFixed(2));
console.log(newNum2.toPrecision(2));
console.log((100 + newNum).valueOf());
console.log(Number.isFinite(newNum));
console.log(Number.isFinite(1 / 0));
console.log(Number.isInteger(newNum2));
console.log(Number.isInteger(newNum));
console.log(Number.isNaN(newNum));
console.log(Number.isNaN(NaN));
console.log(Number.isSafeInteger(newNum));
console.log(Number.isSafeInteger(newNum3));
console.log(Number.parseInt(newNum4));
console.log(Number.parseFloat(newNum4));

// OBJECTS METHODS
console.log("---OBJECTS METHOD---");

const car = {
  carBrand: "Chevrolet",
  carModel: 2025,
  type: "Sport Car",
};

car.carFullName = function () {
  return (this.carBrand + " " + this.carModel).toUpperCase();
};

console.log("This car is the " + car.carFullName() + " Model");

// ARRAY METHODS
console.log("---ARRAY METHODS---");

const cars = ["Chevrolet", "Ferrari", "Benz", "BMW"];
const cars2 = ["Ford", "Hyundai", "KIA"];
const scores = [
  [67, 45],
  [87, 35],
  [46, 76],
];

console.log(cars.length);
// console.log((cars.length = 2), cars); overwrites array (remove comment for use)
console.log(cars.toString());
console.log(cars.at(2));
console.log(cars[2]);
console.log(cars.join("_"));
console.log(cars.pop(), cars);
console.log(cars.push("Porsche"), cars);
console.log(cars.shift(), cars);
console.log(cars.unshift("Chevrolet"), cars);
console.log(Array.isArray(cars));
// console.log(delete cars[0], cars); overwrites array (remove comment for use)
console.log(cars.concat(cars2));
// console.log(cars.copyWithin(1, 0, 1)); overwrites array (remove comment for use)
console.log(scores.flat());
console.log(cars.slice(1));
console.log(cars2.splice(0, 0, "Aston", "Nissan"), cars2);
console.log(cars.toSpliced(0, 1));
