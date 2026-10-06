// let heading=document.querySelector("#heading");
// heading.innerText="Good Morning";
// let para=document.querySelector("p");
// para.style.color="purple";
// let box=document.querySelectorAll(".box")
// for(let i=0;i<box.length;i++){
//     box[i].style.backgroundColor="Green";
// }

// const plusBtn=document.querySelector("#plus");
// const minusBtn=document.querySelector("#minus");
// const num=document.querySelector("#num");
// let count=Number(num.innerText);
// plusBtn.addEventListener("click",()=>{
//     count+=1;
//     num.innerText=count;
// })
// console.log(count);
// minusBtn.addEventListener("click",()=>{
//     count-=1;
//     num.innerText=count;
// })

// Create three buttons named Red, Green, and Blue. Clicking a button should change a box to the
// corresponding background colour.
const box = document.querySelectorAll(".box");
const redBtn = document.querySelector("#red");
const greenBtn = document.querySelector("#green");
for (let i = 0; i < box.length; i++) {
	redBtn.addEventListener("click", () => {
		box[i].style.backgroundColor = "red";
	});
	greenBtn.addEventListener("click", () => {
		box[i].style.backgroundColor = "green";
	});
	function blueColor() {
		box[i].style.backgroundColor = "blue";
	}
}

// Create a heading and a button. When the button is clicked, change the heading’s text, text
// colour, background colour, and font size.

    const heading=document.querySelector("#heading");
    const editHeader=document.querySelector("#editHeader");

    editHeader.addEventListener("click",()=>{
       
    })

// Create a box that changes its background colour and size when the mouse hovers over it. Return
// it to its original design when the mouse leaves.

// Create two buttons named Increase and Decrease with a number displayed between them. Increase
// or decrease the number when the corresponding button is clicked. Do not allow the number to go
//  below zero.
