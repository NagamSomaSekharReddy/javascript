//arrays are mutable
const arr = ["somu", "chinni", true, , 'a', 'z', 34, 90, 209887797979, 0, 9];
console.log(arr.length,arr);
//changing the value of array
arr[0] = "shibbu";
//adding element to array using index
arr[8] = "hii"
console.log(arr, typeof arr);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// array methods
let ar = [12, 3, 4, 5, 6, "somu"];
console.log(ar, typeof ar[0]);
//typeconversion
ar[0] = ar[0].toString();
console.log(ar, typeof ar[0]);
//combining using separator;
console.log(arr.join("_"), typeof arr.join("_"));
//delete the element form ar;
console.log(ar.pop());
console.log(ar);
//adding element to ar;
console.log(ar.push("hii"));
console.log(ar);
//removing the frist element;
console.log(ar.shift());//returns the first element of the array and remove from the array;
console.log(ar);
// adding at first element;
console.log(ar.unshift("praneeth"));//returns the length of the new array
console.log(ar);
//delete an array;
let num = [1, 2, 3, 4, 5, 5, 6, 7, 9, 8];
delete num[0];
console.log(num, num.length);
//concat ar and arr;
ar.concat(arr);
console.log(ar, arr, ar.concat(arr));
//sort
arr.sort();
console.log(arr);
let compare = (a, b) => {
  return a - b;
}
let compare1 = (a, b) => {
  return b - a;
}
//To sort  in des;
arr.sort(compare)
console.log(arr);
//to sort in ase;
arr.sort(compare1)
console.log(arr);

//splice;
let k = arr.splice(2, 4, 54, 65, 76, 87);
console.log(k);
console.log(arr);
//slice in arrays;
console.log(arr.slice(3));
console.log(arr)

//for loop using array;
let nu = [34, 65, 23, 4, 568, 56];
for (let i = 0; i < nu.length; i++) {
  console.log(nu[i]);
}
//for each loop
let r = [];
nu.forEach((ele) => {
  r.push(ele * ele);
})
console.log(r);
console.log(nu);
//while using a html collectionto convert into array we need to use the array.from instead of foreach it will give error while manupulation.
let r1 = {}
let name = "harry"
console.log(Array.from(name));
let g = Array.from(r);
console.log(g);
// for ....of;
for(let u of r){
  console.log(u)
}
//for ....in
for(let u in r){
  console.log(r[u])
}

// creating the object
let person = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      zip: '10001'
    }
  };

// accessing the data
console.log(person.name); // Output: 'John'
console.log(person.address.city); // Output: 'New York'

// MODIFYING THE DATA
person.age = 31;
console.log(person); // Output: { name: 'John', age: 31, address: { city: 'New York', zip: '10001' } }
// Adding a new property
person.job = 'Developer'; 
// Deleting the 'address' property
delete person.address; 

// ITERATION OF THE OBJECTS
for (let key in person) {
    console.log(key + ': ' + person[key]);
  }  

