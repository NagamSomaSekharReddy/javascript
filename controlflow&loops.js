//conditional expressions
//if-else
let a=54;
let a1=prompt("what is the driven age?");
if(a>0){
  console.log("hii")
} else{
  console.log("something")
}
//if-else-if -else
if(a1<31){
  console.log("something")
} else if(a1<43 && a1>54){
  console.log("chinni")
} else{
  console.log("send")
}
//terninatory conditional

console.log("you can "+(a1>18? "vote":"not eligible"))

//switch condition
let c="s"

switch(c){
  case "shibbu":
    console.log("po vey");
    break;
  case "somu":
    console.log("hii1");
    break;
  case "shoaib":
    console.log("suhana khan");
    break;
  case "chinni":
    console.log("cuteee");
    break;
  default:
    console.log("kaki")
}

//practice question
//use logial operator to find the whether the age of a person lies between 10 and 20?
let age=prompt("what is your age?")
age=Number(age)
console.log((age>10 && age<20)? "yes":"No");

//demonstrare the use of the switch case statment in js
switch (age){
  case 12:
    console.log("yes");
    break;
  case 13:
    console.log("yes");
    break;
  case 14:
    console.log("yes");
    break;
  default:
    console.log("no")
}
// write a javascript program to find the whether a number is divisible by either 2 or 3 and 2 and 3?
let no=prompt("what is your no?")
no=Number(no);
console.log((no%2===0 || no%3===0)? "oioi":"opop");
console.log((no%2===0 && no%3===0)? "oioi":"opop");
//print you can drive or you can't drive based ont the age greatear than 18?
console.log("you can "+(a1>18? "drive":"not drive"));

//loops
//for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  //for in loop
  //printing the marks of students
  const obj = {
    harry: 90,
    chinni: 99,
    shoaib: 87,
    pandu: 80,
  };
  
  for (let a in obj) {
    console.log("marks of " + a + " is " + obj[a]);
  }
  
  for (let a1 in "harry") {
    console.log("marks of " + a1);
  }
  //for of loop
  for (let a1 of "harry") {
    console.log("marks of " + a1);
  }
  //while loop
  let j = 0;
  while (j < 8) {
    console.log(j);
    j++;
  }
  
  //do-while loop
  let j1 = 0;
  do {
    console.log(j1);
    j1++;
  } while (j1 < 40);
  
  //functions
  function somu(s2, b2, c3, d3) {
    return Math.round((b2 + c3 + d3 + s2) / 4);
  }
  console.log(somu(1, 2, 3, 4));
  
  // arrow function
  
  const sum = (b2, c3, d3, s2) => {
    return Math.round((b2 + c3 + d3 + s2) / 4);
  };
  console.log(sum(7, 5, 5, 3));
  //practice questions for loops
  //printing the marks of students
  const marks = {
    harry: 90,
    chinni: 99,
    shoaib: 87,
    pandu: 80,
  };
  
  for (i = 0; i < Object.keys(marks).length; i++) {
    console.log(
      "the marks of " +
        Object.keys(marks)[i] +
        " are " +
        marks[Object.keys(marks)[i]]
    );
  }
  //for in
  for (let i in marks) {
    console.log("the marks of " + i + " are " + marks[i]);
  }
  
  // correct
  let co;
  while (co != 45) {
    // co=prompt("enter correct number")
  }
  //mean
  const mean = (q, w, r, t) => {
    return (q + w + r + t) / 4;
  };
  console.log(mean(1, 9, 5, 4));