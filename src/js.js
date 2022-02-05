function javaS() {
    //document.getElementById("result").innerHTML="Print"+result ;
    console.log("result"+result);
    let num=document.getElementById('value').value;
    var multiply= num*10;
    document.getElementById('result').innerHTML=multiply;
    const myFirstName=('Imran')
    let myLastName=('Khan')//give error because when we use let a variable with the same name can only be declared once.
    let fullName=myFirstName+myLastName;
    document.getElementById('str').innerHTML=fullName;
    console.log(str);



}
//tadsk which is done in freecodecamp
//shows result on console
function task(){
  
    const mul = 45* 33;
    document.getElementById(mul);
    console.log(mul);
    const quotient = 66 / 33;
    document.getElementById(quotient);
    console.log(quotient);

    let myVar = 12;
    myVar=--myVar;
    console.log(myVar);
    
    const myDecimal = 5.7;
    console.log(myDecimal);

    const product = 2.0 * 2.5;
    console.log(product);

    const quotient1 = 4.4 / 2.0;
    console.log(quotient1);

    const remainder = 11%3;
    console.log(remainder);



}
task()