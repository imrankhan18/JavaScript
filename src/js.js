function javaS() {
  //document.getElementById("result").innerHTML="Print"+result ;
  console.log("result" + result);
  let num = document.getElementById("value").value;
  var multiply = num * 10;
  document.getElementById("result").innerHTML = multiply;
  const myFirstName = "Imran";
  let myLastName = "Khan"; //give error because when we use let a variable with the same name can only be declared once.
  let fullName = myFirstName + myLastName;
  document.getElementById("str").innerHTML = fullName;
  console.log(str);
}
//tadsk which is done in freecodecamp
//shows result on console
function task() {
  const mul = 45 * 33;
  document.getElementById(mul);
  console.log(mul);
  const quotient = 66 / 33;
  document.getElementById(quotient);
  console.log(quotient);

  let myVar = 12;
  myVar = --myVar;
  console.log(myVar);

  const myDecimal = 5.7;
  console.log(myDecimal);

  const product = 2.0 * 2.5;
  console.log(product);

  const quotient1 = 4.4 / 2.0;
  console.log(quotient1);

  const remainder = 11 % 3;
  console.log(remainder);

  let a = 3;
  let b = 17;
  let c = 12;

  a += 12;
  b += 9;
  c += 7;
  console.log(a, b, c);

  let a1 = 11;
  let b1 = 9;
  let c1 = 3;

  a1 -= 6;
  b1 -= 15;
  c1 -= 1;
  console.log(a1, b1, c1);

  let a2 = 5;
let b2 = 12;
let c2 = 4.6;

// Only change code below this line
a2 *= 5;
b2 *= 3;
c2 *= 10;
console.log(a2, b2, c2);

let a3 = 48;
let b3 = 108;
let c3 = 33;

// Only change code below this line
a3 /= 12;
b3 /=  4;
c3 /=  11;

console.log(a3,b3,c3);

const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
console.log(myStr)

const myStr1 = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr1)

var myStr2="Firstline\n\SecondLine\rThirdline";
console.log(myStr2);
const myStr3 = "This is the start." + "This is the end."; 
console.log(myStr3);

let myStr4="This is the first sentence.";
myStr4+=" This is second sentence."
console.log(myStr4);

const myName1 = "My name is";
const myStr5 = myName1+ " and " + "I am well";
console.log(myName1,myStr5);

const someAdjective = "imran";
let str="Learning to code is ";
str+=someAdjective;
console.log(str);

let lastNameLength;
const lastName = "Lovelace";
lastNameLength = lastName.length;
console.log(lastNameLength);

let firstLetterOfLastName = "";
const lastName1 = "Lovelace";
firstLetterOfLastName = lastName1[0];
console.log(firstLetterOfLastName);

let my = "Jello World";

// Only change code below this line
my[0]="H"+my;
my=my.slice(1);
my="H"+my;
console.log(my);

let lirstLetterOfLastName1 = "";
const lastName2 = "Lovelace";

// Only change code below this line
lirstLetterOfLastName1 = lastName2[lastName2.length -2];
console.log(lirstLetterOfLastName1);

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "My " + myNoun + " is " + myAdjective + " and " + myVerb + " " + myAdverb + "!";
console.log(wordBlanks);

const myArray = [["IK"],21];
console.log(myArray);

const myArray2 = [50, 60, 70];
var myData=myArray2[0];
console.log(myArray2);

const myData1 = [50, 60, 70];
myData1[0]=45;
console.log(myData1);

const myArray3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData2 = myArray3[2][1];
  console.log(myData2);

  const myArr1 = [["John", 23], ["cat", 2]];
myArr1.push(["dog",3]);
console.log(myArr1);

const myArray6 = [["John", 23], ["cat", 2]];
removedFromMyArray=myArray6.pop();
console.log(removedFromMyArray);

const myArr3 = [["John", 23], ["dog", 3]];
const removedFromMyArr3=myArr3.shift();

myArr3.unshift("Happy");
console.log(removedFromMyArr3);
const myArr4 = [["John", 23], ["dog", 3]];
myArr4.unshift("Happy");
console.log(myArr4);

var myList = [["Banana", 3], ["Apple", 4], ["Orange", 5], ["Peach", 6], ["Pineaple", 7]];
console.log(myList);


function reusableFunction(){
    str="Hi World";
    console.log()
  }
  reusableFunction()



}

task();

function reusableFunction(){
    str="Hi World";
    console.log(str);
  }
  reusableFunction()

  function functionWithArgs(a, b) {
    console.log(a + b);
  }
  functionWithArgs(10, 5);

  function timesFive(num3){
    num3=num3*5;
    return num3;
    }
