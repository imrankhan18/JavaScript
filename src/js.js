function javaS() {
    //document.getElementById("result").innerHTML="Print"+result ;
    console.log("result"+result);
    let num=document.getElementById('value').value;
    var multiply= num*10;
    document.getElementById('result').innerHTML=multiply;
    let myLastName=('Imran')
    let myLastName=('Khan')//give error because when we use let a variable with the same name can only be declared once.
    var fullName=myLastName+myLastName;
    document.getElementById('str').innerHTML=fullName;
    console.log(str);



}