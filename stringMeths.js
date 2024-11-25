// Follow along with this video: https://www.youtube.com/watch?v=x16Z_U1tGrc

let str = `Hello`;
// console.log(str.charAt(2)); // same as str[2]

str = `The code undefined code code !`;
// console.log(str.indexOf('code',5)) // gets first occurrence of code, default: 0
// console.log(str.lastIndexOf('code')) // gets last occurrence of code , default: +infinity

// slice(indexStart), substring()
//        - extract and return a new string and return it as a new string

str = `The morning is upon us.`;
// console.log(str.slice(-8,-4)); // negative start from the end and then goes right (+)
// console.log(str.substring(16, 13)); // negative behaves as 0
// console.log(str.slice(0 , 4));

// console.log(str.split(" ", 2)); // separator is not included!!, return the first n splits

str = `The quick brown fox jumps over the lazy dog`;
console.log(str.includes("fox"), 0); // searchSTR, position where it starts to look for searchSTR

// str = `    Hello World!      `;
// const tr = str.trim();
// console.log(tr); // removes white space both in the start and end
// const tr1 = str.trimStart();
// console.log(tr1); // removes white space in the start
// const tr2 = str.trimEnd();
// console.log(tr2); // remove white space in end
