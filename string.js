//strings
//string is immutable
let a = 'somu"'; //escape sequence
let a1 = "     chinni       ";
console.log(a.length);
let b = `${a} is a good boy`;
console.log(b);
//string methods
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.slice(2, 4));
console.log(a.replace("so", "chi"));
console.log(a + "hii");
console.log(a.concat("hii"));
console.log(a1.trim()); // removes the extra spaces
console.log(a[0]);
console.log(a[1]);
console.log(a[7]);

// //quiz print all the characters using the for loop
let n1="shoai\b"
for(let i=0;i<n1.length;i++){
  console.log(n1[i])
}

//practice questions
// 1)what will be print in javascript? console.log("har\"".length); ##4
console.log('har\"'.length);
//explore string start with end function of a string?
const sentence = "The quick brown fox jumps over the lazy dog.";

const word = "fox";
console.log(sentence.includes("fox"));
console.log(sentence.startsWith("fox"));
console.log(sentence.endsWith("fox"));
console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);
//write a program to to convert a string into lowercase?
console.log(word.toLowerCase());
//explore the amount of the string "please give Rs 100"?
let str = "please give me Rs 1000";
let amount = str.slice("please give me Rs ".length);// by length
amount = Number(amount);
console.log(amount, typeof amount);
//try to change 4th character of the  given string were able to do it?
let frd = "somu";
console.log(frd);
frd[1] = "h";
console.log(frd);
//due to string immutable
