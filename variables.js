console.log("this repl contains the code of variables")
var a=54;
var a="p";//var can be re-declared many times and initalize many times
let k=9;//we can't re-initalize the let variable  but we can re-declare the k value .
k=10;
const u=90;//we can't change the const.
//In most of time the usage of let is feasible for programming.
{
  let k="harry";
  console.log(k)
}
console.log(a,k,u);
