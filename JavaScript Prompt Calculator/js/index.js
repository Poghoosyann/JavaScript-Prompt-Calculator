let a = prompt ("Write the first number !!!");
let nshan = prompt ("Write an equal sign !!! (+,-,*,/)");
let b = prompt ("Write the second number !!!");
if (nshan == "+"){
    let d = +alert ("Your equality is the answer " + (+a + +b) + " !!!")
}
else if (nshan == "-"){
    let d = alert ("Your equality is the answer " + (a - b) + " !!!")
}
else if (nshan == "/"){
    let d = alert ("Your equality is the answer " + a / b + " !!!")
}
else if (nshan == "*"){
    let c = alert ("Your equality is the answer " + a * b + " !!!")
}

else{
    alert("Chancheled !!!");
}