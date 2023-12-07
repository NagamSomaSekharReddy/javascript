//primitive datatype
let a=null;// the variable is null
let b=345;
let c="somu";
let d=Symbol("my self");
let e=true;
let f=BigInt(547)+BigInt(3);
let g=undefined;//m=not given any value
console.log(a,b,c,d,e,f,g);
console.log(typeof(f));

// non-primitive data types
const item={
  "somu":true,
  "rohith":false,
  "shibbu":8,
  "shoaib":undefined
}
console.log(item["shoaib"])
//create a string and try to add number to it.
let s="somu";
s+=1;
console.log(s);
//use type of to fing the type of the last question
console.log(typeof(s))
//create a const object and try to change it to hold the number later
const i1={
  gh:9,
  kj:98,
  mn:76,
  lk:"somu"
}
i1["lk"]=76;
console.log(i1);
// try to add new element to the above question
i1["fd"]="shibbu";
//write a program to create a  word meaning directory of 5 words
const dict={
  appericate:"ee"
}

// variables (var vs Let vs const)
console.log("this repl contains the code of variables")
var a1=54;
var a1="p";//var can be re-declared many times and initalize many times
let k=9;//we can't re-initalize the let variable  but we can re-declare the k value .
k=10;
const u=90;//we can't change the const.
//In most of time the usage of let is feasible for programming.
{
  let k="harry";
  console.log(k)
}
console.log(a1,k,u);
