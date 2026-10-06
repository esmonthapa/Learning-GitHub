// Given the array numbers = [2, 4, 6, 8, 10], use map() to create a new array containing
// the square of every number.
let nums = [2, 4, 6, 8, 10];
const squareofNums = nums.map((item, index) => {
	return item * item;
});
console.log(squareofNums);

// Given the array students = [{ name: "Ram", marks: 75 }, { name: "Sita", marks: 35 },
//  { name: "Hari", marks: 60 }], use map() to create a new array containing only the
// students’ names.

let students = [
	{ name: "Ram", marks: 75 },
	{ name: "Sita", marks: 35 },
	{ name: "Hari", marks: 60 },
];
const studentsName = students.map((item, index) => {
	return item.name;
});
console.log(studentsName);

// Given the array products = [{ name: "Mouse", price: 800 }, { name: "Keyboard", price: 1500 },
//  { name: "Monitor", price: 18000 }], use map() to create a new array containing each
// product’s price after a 10% discount.

let products = [
	{ name: "Mouse", price: 800 },
	{ name: "Keyboard", price: 1500 },
	{ name: "Monitor", price: 18000 },
];
let productsActualPrice = products.map((item, index) => {
	let discount = (10 * item.price) / 100;
	return item.price - discount;
});
console.log(productsActualPrice);

// Given the array numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use filter() to create a new array
// containing only the even numbers.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumber = numbers.filter((item, index) => {
	return item % 2 === 0;
});
console.log(evenNumber);

// Given the array students = [{ name: "Ram", marks: 75 }, { name: "Sita", marks: 32 },
// { name: "Hari", marks: 60 }, { name: "Gita", marks: 25 }], use filter() to find all
// students who scored 40 or higher.

let studentsInfo = [
	{ name: "Ram", marks: 75 },
	{ name: "Sita", marks: 32 },
	{ name: "Hari", marks: 60 },
	{ name: "Gita", marks: 25 },
];
let topStudents = studentsInfo
	.filter((item, index) => {
		return item.marks >= 40;
	})
	.filter((item, index) => {
		return item.name;
	});

console.log(topStudents);

// Given the array products = [{ name: "Mouse", price: 800 }, { name: "Keyboard", price: 1500 },
//  { name: "Monitor", price: 18000 }, { name: "Laptop", price: 75000 }], use filter() to find
// products costing below Rs. 5,000, and then use map() to create an array containing only
//  their names.
let productsInfo = [
	{ name: "Mouse", price: 800 },
	{ name: "Keyboard", price: 1500 },
	{ name: "Monitor", price: 18000 },
	{ name: "Laptop", price: 75000 },
];
let lessPriceProducts = productsInfo
	.filter((item, index) => {
		return item.price < 5000;
	})
	.map((item, index) => {
		return item.name;
	});
console.log(lessPriceProducts);

// Given the array numbers = [15, 60, 25, 80, 45, 90], use filter() to create a new array
// containing numbers greater than 50.

let digits = [15, 60, 25, 80, 45, 90];
let greaterNums = digits.filter((item, index) => {
	return item > 50;
});
console.log(greaterNums);

// Given the array temperatures = [10, 20, 30, 40], use map() to convert each temperature
// from Celsius to Fahrenheit using the formula (Celsius × 9/5) + 32.

let temperatures = [10, 20, 30, 40];
let temperaturesInFahrenheit = temperatures.map((item, index) => {
	return (item * 9) / 5 + 32;
});
console.log(temperaturesInFahrenheit);

// Given the array employees = [{ name: "Ram", active: true }, { name: "Sita", active: false },
// { name: "Hari", active: true }], use filter() to select active employees and map() to create
// an array containing only their names.

let employees = [
	{ name: "Ram", active: true },
	{ name: "Sita", active: false },
	{ name: "Hari", active: true },
];
let activeEmployees = employees
	.filter((item, index) => {
		return item.active;
	})
	.map((item, index) => {
		return item.name;
	});
console.log(activeEmployees);
