// ========================String Methods==============
// 1. CharAt()=>(Kisi index ka character nikalne ke liye).

let name = "Devashish mishra";
let newName=name.charAt(3);
// console.log(newName)        //output: a


// 2. concat()=>(Strings ko jodne ke liye).
let str1="Hello,";
let str2="World!";

let newstr=str1.concat(str2);
// console.log(newstr)        //output: Hello,world!

//3.includes()=>Check karne ke liye ki ek word hai ya nahi.
let think="Devashish is a good boy";
let newThink1=think.includes("boy");   //output: ture
let newThink2=think.includes("Girl");  //output: false

// console.log(newThink1);
// console.log(newThink2);

//4.indexOf()=>string ki position dhoondne ke liye.

let String="Hello JavaScript!";

let newst=String.indexOf("J");
// console.log(newst)           //output: 6
// console.log(String.indexOf("J"))  //same output but diffrent type code mtlb chhota code

