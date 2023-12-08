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
  