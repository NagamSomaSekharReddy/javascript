// declaring the function
const hello = () => {
    console.log("hello");
    return "hii";
  };
  //calling the functions
  hello();
  let v = hello();
  console.log(v);
  //declaring the functions with arugments
  function somu(s2, b2, c3, d3) {
    return Math.round((b2 + c3 + d3 + s2) / 4);
  }
  //calling the function with args
  console.log(somu(1, 2, 3, 4));
  
  // declaring the  arrow function
  
  const sum = (b2, c3, d3, s2) => {
    return b2 + c3 + d3 + s2;
  };
  
  //calling the arrow function
  console.log(sum(99, 96, 98, 97));
  
  // map,reduce ,filter functions
  //map reduce filter
//foreach doesn't create any new array but the map function will make a new array dosen't affect the original array.
let arr=[23,45,6,789,90];
let a1=arr.forEach((value1)=>{
  return value1>10;
})
let a=arr.map((value,index)=>{
  return value+index;
})
console.log(a);
console.log(a1);
console.log(arr);

//array filter function
let arr2=[23,34,5,5686,989]
let a12=arr2.filter((value2)=>{
  return value2>10;
})
console.log(a12)
//reduce array method into single element;
let arr3=[87,98,09,7,4,5,3,9,23];
let k3=arr3.reduce((h1,h2)=>{return h1+h2})
console.log(k3);
let arr4=["somu","chinni","naruto","kakashi","sasuke"];
let k4=arr4.reduce((j1,j2)=>{return j1+j2})
console.log(k4);

//practice-questions
//create an array and users say input le add to array;
let chi2=[];
let r=prompt("enter a number")
r=Number(r)
chi2.push(r)
console.log(chi2)

//keep adding elements to array until it adding element 0;
do{
  r=prompt("enter a number");
  r=Number(r);
  chi2.push(r)
} while(r!=0);
console.log(chi2)
//filter the number that are divisible by 10 from the given array
let chi3=chi2.filter((v)=>{ return v%10==0 })
console.log(chi3)
//create a array of square of the given array
let chi4=chi2.map((v1)=>{return v1*v1})
console.log(chi4)
//use reduce to calculate the factorial of the given number from the array of n natural numbers (n being the number whose factorial need to calculate)
let chi5=chi3.reduce((h1,h2)=>{
  return h1*h2
})
console.log(chi5);
// practice question
//write a program to generate random number and store it in a var. the program then takes  input from the user. if the guess of the user is correct or greater or lesser than the guess. no of guess is the score of the user . the program is expected to terminate after correct guess. number should between 1-100.

t=Math.random()
t=Math.round(t*100);
let c=0;
do{
  t1=prompt("guess the number");
  t1=Number(t1);
  c+=1
  if (t1===t){
    let l2=Math.round(100/c);
    console.log("your score is "+ l2)
  } else if(t1>t){
    console.log("the original number is lesser than the guess number")
  }else{
    console.log("the original number is greater than the guess number")
  }
} while (t1!==t);
