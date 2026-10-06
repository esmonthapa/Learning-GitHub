// // Q.no.1
// let num=-2;
// if(num>0){
//     console.log(num + " is a Positive Number")
// } else if(num<0){
//     console.log(num + " is a Negative Number")
// } else{
//     console.log(num + " is Zero")
// }

// // Q.no.2
// let num1=20;
// let num2=30;
// if(num1>num2){
//     console.log("Num1 is the greatest.")
// } else if(num1==num2){
//     console.log("Both num are equal.")
// } else{
//     console.log("Num2 is the greatest.")
// }

// // Q.no.3
// let temp=31;
// if(temp<15){
//     console.log("Cold")
// }else if(temp>30){
//     console.log("Hot")
// } else{
//     console.log("Normal")
// }

// // Q.no.4
// let age=18;
// let hasId=true;
// if(age>=18 && hasId){
//     console.log("Valid")
// }else{
//     console.log("Invalid")
// }

// for (let i = 1; i <= 20; i++) {
// 	if (i % 3 == 0) {
// 		console.log("Fizz --> ", i);
// 	}
// }
// for (let i = 1; i <= 20; i++) {
// 	if (i % 5 == 0) {
// 		console.log("Buzz -->", i);
// 	}
// }
// for (let i = 1; i <= 20; i++) {
// 	if (i % 3 == 0 && i % 5 == 0) {
// 		console.log("Fizzbuzz-->", i);
// 	}
// for(let i=1; i<=20;i++){
// 	if(i%3==0){
// 		if(i%3==0 && i%5==0){
// 			console.log("FizzBuzz---> "+ i);
// 		} else{
// 			console.log("Fizz---> "+ i);
// 		}
// 	}else if(i%5==0){
// 		console.log("Buzz--->" +i)
// 	} else{
// 		console.log("None of these.")
// 	}
// }

const add = (a, b) => {
	return a + b;
};
const sub = (a, b) => {
	return a - b;
};
const mul = (a, b) => {
	return a * b;
};
const div = (a, b) => {
	return a / b;
};


function calculator(a,b,result){
	return result(a,b)
}

console.log(calculator(10,20,add));
console.log(calculator(30,20,sub));
console.log(calculator(10,20,mul));
console.log(calculator(10,88,checkEvenorOdd));

function checkEvenorOdd(num){
	return num%2===0? "Even" : "Odd";
}
const processNum=(num)=> {
	if(num>=0){
		return "Positive"
	} else if(num==0){
		return "Zero"
	} else{
		return "Negative"
	}
}
function calc(a,result){
	return result(a)
}
console.log(calc(11,checkEvenorOdd));
console.log(calc(0,processNum))

setTimeout(()=>{
	console.log("Hello after 3 sec")
},5000)

const num=[1,2,3,4,5]
num.forEach((item,index)=>{
	console.log(item+index);
})

const ages=[20,34,44,50,30,20]
const above18=ages.filter((item,index)=>{
	return item>25
})
console.log(above18);
